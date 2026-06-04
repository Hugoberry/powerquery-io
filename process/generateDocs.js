/**
 * Generate Docusaurus Markdown from the extracted #shared JSON.
 *
 * Source of truth : ./shared/<locale>.json  (produced by the GitHub Action)
 * Output          : ../docs                                   (for `en`)
 *                   ../i18n/<locale>/docusaurus-plugin-content-docs/current  (all others)
 *
 * HTML embedded in the Power BI documentation strings (<code>, <ul>/<li>,
 * <p>, <b>, <i>, <br>, <table>…) is converted to real Markdown with Turndown
 * instead of the previous pile of locale-specific regex patches. MDX-unsafe
 * characters that survive the conversion ({ } and bare <) are escaped so the
 * Docusaurus build does not choke.
 *
 * Usage:
 *   node generateDocs.js                 # every locale found under ../i18n
 *   node generateDocs.js de fr ja        # only the named locales
 *   node generateDocs.js en              # English -> ../docs
 *   node generateDocs.js --all --en      # every i18n locale plus English
 *   node generateDocs.js --preserve-case # keep original path casing
 *   node generateDocs.js --trim          # drop locale files identical to en
 */

const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');
const turndownPluginGfm = require('turndown-plugin-gfm');

const SHARED_DIR = path.join(__dirname, 'shared');
const I18N_DIR = path.join(__dirname, '..', 'i18n');
const DOCS_DIR = path.join(__dirname, '..', 'docs');
const TEMPLATE = fs.readFileSync(path.join(__dirname, 'functionDocTemplate.ejs'), 'utf8');

// ---------------------------------------------------------------------------
// CLI
// ---------------------------------------------------------------------------
function parseArgs(argv) {
  const opts = { locales: [], all: false, en: false, lowercase: true, trim: false, clean: false };
  for (const arg of argv) {
    switch (arg) {
      case '--all': opts.all = true; break;
      case '--en': opts.en = true; break;
      case '--preserve-case': opts.lowercase = false; break;
      case '--trim': opts.trim = true; break;
      case '--clean': opts.clean = true; break;
      default:
        if (arg.startsWith('--')) {
          console.warn(`Ignoring unknown flag: ${arg}`);
        } else {
          opts.locales.push(arg);
        }
    }
  }
  return opts;
}

// Locales = every i18n/<locale> dir that has a docs content folder.
function discoverI18nLocales() {
  if (!fs.existsSync(I18N_DIR)) return [];
  return fs.readdirSync(I18N_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name)
    .filter(loc => fs.existsSync(localeOutputDir(loc)))
    .sort();
}

function localeOutputDir(locale) {
  return locale === 'en'
    ? DOCS_DIR
    : path.join(I18N_DIR, locale, 'docusaurus-plugin-content-docs', 'current');
}

// ---------------------------------------------------------------------------
// HTML -> Markdown
// ---------------------------------------------------------------------------
const turndown = new TurndownService({
  codeBlockStyle: 'fenced',
  emDelimiter: '*',
  bulletListMarker: '-',
});
turndown.use(turndownPluginGfm.gfm);

// Escape MDX-significant characters that Turndown leaves in text nodes.
// `{`/`}` would be parsed as JSX expressions and a bare `<foo` as a JSX tag.
const baseEscape = TurndownService.prototype.escape;
turndown.escape = function (text) {
  return baseEscape.call(this, text)
    .replace(/[{}]/g, m => '\\' + m)
    .replace(/</g, '&lt;');
};

function htmlToMarkdown(value) {
  if (typeof value !== 'string' || value.trim() === '') return value;
  // Collapse the CRLF noise the source is riddled with before parsing.
  const normalised = value.replace(/\r\n|\r|\n/g, ' ');
  return turndown.turndown(normalised)
    // Normalise guillemets to straight quotes, dropping the inner spacing that
    // languages like French place inside them ("« x »" -> "\"x\""). This also
    // stops GFM's bare-URL/`www.` autolinker from pulling the surrounding space
    // and » into an invalid URL (e.g. fr "« www.adventure-works.com »"), which
    // otherwise breaks the MDX build.
    .replace(/[«‹][^\S\r\n]*/g, '"')
    .replace(/[^\S\r\n]*[»›]/g, '"')
    .trim();
}

// ---------------------------------------------------------------------------
// Taxonomy -> category folder
// ---------------------------------------------------------------------------
function createFunctionToCategoryMap(taxonomy) {
  const map = {};
  const walk = (entry, categoryName) => {
    if (typeof entry !== 'object' || entry === null) return;
    for (const key of Object.keys(entry)) {
      if (typeof entry[key] === 'string') map[key] = categoryName;
      else if (typeof entry[key] === 'object') walk(entry[key], categoryName);
    }
  };
  for (const [category, value] of Object.entries(taxonomy)) walk(value, category);
  return map;
}

function cleanCategoryName(name) {
  return name.replace(/( functions| values| handling functions)$/i, '');
}

const taxonomy = require('./shared/_taxonomy.json');
const functionToCategory = createFunctionToCategoryMap(taxonomy);

// ---------------------------------------------------------------------------
// Per-locale generation
// ---------------------------------------------------------------------------
function normaliseExamples(examples) {
  if (Array.isArray(examples)) return examples;
  if (examples && typeof examples === 'object') return [examples];
  return [];
}

function relativeDocPath(fn, lowercase) {
  const category = cleanCategoryName(functionToCategory[fn.Name] || 'Uncategorized');
  const namespace = category === 'accessing-data' && fn.Name.includes('.')
    ? fn.Name.split('.')[0]
    : null;
  const segments = namespace
    ? [category, namespace, `${fn.Name}.md`]
    : [category, `${fn.Name}.md`];
  return (lowercase ? segments.map(s => s.toLowerCase()) : segments).join(path.sep);
}

function generateLocale(locale, opts) {
  const jsonPath = path.join(SHARED_DIR, `${locale}.json`);
  if (!fs.existsSync(jsonPath)) {
    console.warn(`! ${locale}: no shared/${locale}.json — skipping`);
    return { locale, written: 0, skipped: true };
  }

  const outputDir = localeOutputDir(locale);
  fs.mkdirSync(outputDir, { recursive: true });

  // Remove previously generated function docs so renamed/removed functions do
  // not linger as stale orphans. readme.md and _category_.json are preserved.
  if (opts.clean) {
    let removed = 0;
    const sweep = dir => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) { sweep(full); continue; }
        if (entry.name.endsWith('.md') && entry.name.toLowerCase() !== 'readme.md') {
          fs.unlinkSync(full);
          removed++;
        }
      }
    };
    sweep(outputDir);
    if (removed) console.log(`  cleaned ${removed} existing .md files`);
  }

  const { functions } = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  let written = 0;
  let appended = 0;

  for (const fn of functions) {
    const doc = fn.Documentation || {};
    doc['Documentation.Description'] = htmlToMarkdown(doc['Documentation.Description']);
    doc['Documentation.LongDescription'] = htmlToMarkdown(doc['Documentation.LongDescription']);
    const examples = normaliseExamples(doc['Documentation.Examples']);
    for (const ex of examples) {
      if (ex && ex.Description) ex.Description = htmlToMarkdown(ex.Description);
    }
    doc['Documentation.Examples'] = examples;

    const output = ejs.render(TEMPLATE, {
      functionName: fn.Name,
      documentation: doc,
      parameters: fn.Parameters,
      requiredParameters: fn.RequiredParameters,
      returnType: fn.ReturnType,
    });

    const outPath = path.join(outputDir, relativeDocPath(fn, opts.lowercase));

    // Hand-authored expansion: if a `_<name>.mdx` partial sits next to the
    // output, append it so the generated definition stays fresh from JSON while
    // the extra prose is preserved. Docusaurus processes .md as MDX, so the
    // import works; `_`-prefixed files are excluded from routing.
    let finalOutput = output;
    const partialName = `_${path.basename(outPath, '.md')}.mdx`;
    const partialPath = path.join(path.dirname(outPath), partialName);
    if (fs.existsSync(partialPath)) {
      const component = `Partial_${fn.Name.replace(/[^A-Za-z0-9]/g, '_')}`;
      finalOutput += `\nimport ${component} from './${partialName}'\n\n<${component} />\n`;
      appended++;
    }

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, finalOutput);
    written++;
  }

  const appendNote = appended ? ` (${appended} with .mdx partials appended)` : '';
  console.log(`✓ ${locale}: ${written} files${appendNote} -> ${path.relative(process.cwd(), outputDir)}`);
  return { locale, written, outputDir };
}

// Delete locale files whose content matches the English docs file (the job the
// old trimLocaleDocs.ps1 did) so untranslated functions fall back to English.
function trimAgainstEnglish(result) {
  if (!result.outputDir || result.locale === 'en') return 0;
  let removed = 0;
  const walk = dir => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(full); continue; }
      if (!entry.name.endsWith('.md')) continue;
      const rel = path.relative(result.outputDir, full);
      const enFile = path.join(DOCS_DIR, rel);
      if (fs.existsSync(enFile) &&
          fs.readFileSync(enFile, 'utf8') === fs.readFileSync(full, 'utf8')) {
        fs.unlinkSync(full);
        removed++;
      }
    }
  };
  walk(result.outputDir);
  console.log(`  trimmed ${removed} files identical to English`);
  return removed;
}

// ---------------------------------------------------------------------------
function main() {
  const opts = parseArgs(process.argv.slice(2));
  let locales = opts.locales.length ? opts.locales : discoverI18nLocales();
  if (opts.all) locales = [...new Set([...locales, ...discoverI18nLocales()])];
  if (opts.en && !locales.includes('en')) locales.unshift('en');
  if (!locales.length) {
    console.error('No locales to process. Pass locale codes or ensure ../i18n exists.');
    process.exit(1);
  }

  console.log(`Generating docs for: ${locales.join(', ')}`);
  const results = [];
  for (const locale of locales) {
    const result = generateLocale(locale, opts);
    if (opts.trim) trimAgainstEnglish(result);
    results.push(result);
  }

  const total = results.reduce((n, r) => n + (r.written || 0), 0);
  console.log(`\nDone. ${total} files generated across ${results.filter(r => !r.skipped).length} locale(s).`);
}

main();
