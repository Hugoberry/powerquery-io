/**
 * Post-build sitemap enrichment for the multilingual site.
 *
 * Docusaurus emits one independent sitemap per locale:
 *
 *     build/sitemap.xml            (default locale, served at /)
 *     build/<locale>/sitemap.xml   (every other locale, served at /<locale>/)
 *
 * Nothing ties them together and none of them carry hreflang, so crawlers that
 * find /sitemap.xml only ever see the default locale and never learn the pages
 * are translations of one another. This script runs after `docusaurus build`
 * and fixes both problems:
 *
 *   1. Every <url> in every per-locale sitemap is rewritten to include an
 *      <xhtml:link rel="alternate" hreflang="..."> for each locale that also
 *      has that page, plus an x-default pointing at the default locale.
 *   2. A sitemap_index.xml is written at the build root referencing every
 *      per-locale sitemap, and robots.txt is pointed at it.
 *
 * Locales are discovered from the build output (any sub-directory that contains
 * a sitemap.xml), so the list can never drift from what was actually built.
 *
 * Usage:
 *   node process/generateSitemaps.js          # operates on ../build
 *   node process/generateSitemaps.js <dir>     # operates on <dir>
 */

const fs = require('fs');
const path = require('path');

const BUILD_DIR = path.resolve(process.argv[2] || path.join(__dirname, '..', 'build'));
const CONFIG_FILE = path.join(__dirname, '..', 'docusaurus.config.js');
const ROBOTS_FILES = [
  path.join(BUILD_DIR, 'robots.txt'),
  path.join(__dirname, '..', 'static', 'robots.txt'),
];

/** Pull a single-quoted scalar (e.g. defaultLocale: 'en') out of the config source. */
function readConfigValue(source, key) {
  const match = source.match(new RegExp(`${key}:\\s*'([^']+)'`));
  return match ? match[1] : null;
}

/** Parse a sitemap into ordered { loc, lastmod, changefreq, priority } blocks. */
function parseSitemap(file) {
  const xml = fs.readFileSync(file, 'utf8');
  const blocks = [];
  for (const [, body] of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const pick = (tag) => {
      const m = body.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
      return m ? m[1] : null;
    };
    const loc = pick('loc');
    if (loc) {
      blocks.push({
        loc,
        lastmod: pick('lastmod'),
        changefreq: pick('changefreq'),
        priority: pick('priority'),
      });
    }
  }
  return blocks;
}

function escapeXml(value) {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function main() {
  if (!fs.existsSync(BUILD_DIR)) {
    throw new Error(`Build directory not found: ${BUILD_DIR}. Run \`docusaurus build\` first.`);
  }

  const config = fs.readFileSync(CONFIG_FILE, 'utf8');
  const origin = (readConfigValue(config, 'url') || 'https://powerquery.io').replace(/\/$/, '');
  const defaultLocale = readConfigValue(config, 'defaultLocale') || 'en';

  // Discover locales from the build output. The default locale lives at the
  // root; every other locale is a sub-directory containing its own sitemap.xml.
  const rootSitemap = path.join(BUILD_DIR, 'sitemap.xml');
  if (!fs.existsSync(rootSitemap)) {
    throw new Error(`No sitemap.xml at build root (${rootSitemap}); was the sitemap plugin enabled?`);
  }

  const locales = [{ code: defaultLocale, prefix: '', sitemap: rootSitemap }];
  for (const entry of fs.readdirSync(BUILD_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const candidate = path.join(BUILD_DIR, entry.name, 'sitemap.xml');
    if (fs.existsSync(candidate)) {
      locales.push({ code: entry.name, prefix: `/${entry.name}`, sitemap: candidate });
    }
  }

  // Build: pageKey (path with the locale prefix stripped) -> { localeCode: href }.
  // pageKey lets us line up the same logical page across every locale.
  const pages = new Map();
  const parsed = new Map();
  for (const locale of locales) {
    const blocks = parseSitemap(locale.sitemap);
    parsed.set(locale.code, blocks);
    for (const block of blocks) {
      let pageKey = block.loc.slice(origin.length); // strip origin -> /<prefix>/path
      if (locale.prefix && (pageKey === locale.prefix || pageKey.startsWith(`${locale.prefix}/`))) {
        pageKey = pageKey.slice(locale.prefix.length) || '/';
      }
      if (!pages.has(pageKey)) pages.set(pageKey, {});
      pages.get(pageKey)[locale.code] = block.loc;
    }
  }

  // Rewrite each per-locale sitemap with hreflang alternates.
  const NS =
    'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ' +
    'xmlns:xhtml="http://www.w3.org/1999/xhtml"';

  for (const locale of locales) {
    const blocks = parsed.get(locale.code);
    const out = ['<?xml version="1.0" encoding="UTF-8"?>', `<urlset ${NS}>`];

    for (const block of blocks) {
      let pageKey = block.loc.slice(origin.length);
      if (locale.prefix && (pageKey === locale.prefix || pageKey.startsWith(`${locale.prefix}/`))) {
        pageKey = pageKey.slice(locale.prefix.length) || '/';
      }
      const alternates = pages.get(pageKey) || {};

      out.push('  <url>');
      out.push(`    <loc>${escapeXml(block.loc)}</loc>`);
      if (block.lastmod) out.push(`    <lastmod>${block.lastmod}</lastmod>`);
      if (block.changefreq) out.push(`    <changefreq>${block.changefreq}</changefreq>`);
      if (block.priority) out.push(`    <priority>${block.priority}</priority>`);

      for (const code of Object.keys(alternates).sort()) {
        out.push(`    <xhtml:link rel="alternate" hreflang="${code}" href="${escapeXml(alternates[code])}"/>`);
      }
      if (alternates[defaultLocale]) {
        out.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(alternates[defaultLocale])}"/>`);
      }
      out.push('  </url>');
    }

    out.push('</urlset>', '');
    fs.writeFileSync(locale.sitemap, out.join('\n'));
  }

  // Write the sitemap index referencing every per-locale sitemap.
  const indexEntries = locales.map((locale) => {
    const loc = `${origin}${locale.prefix}/sitemap.xml`;
    return `  <sitemap>\n    <loc>${escapeXml(loc)}</loc>\n  </sitemap>`;
  });
  const index = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...indexEntries,
    '</sitemapindex>',
    '',
  ].join('\n');
  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap_index.xml'), index);

  // Point robots.txt at the index instead of the bare default-locale sitemap.
  for (const robots of ROBOTS_FILES) {
    if (!fs.existsSync(robots)) continue;
    const updated = fs
      .readFileSync(robots, 'utf8')
      .replace(/^Sitemap:.*$/m, `Sitemap: ${origin}/sitemap_index.xml`);
    fs.writeFileSync(robots, updated);
  }

  const totalPages = pages.size;
  console.log(
    `Enriched ${locales.length} locale sitemap(s) covering ${totalPages} page(s); ` +
      `wrote sitemap_index.xml and updated robots.txt.`,
  );
}

main();
