# Power Query M Reference
This repository hosts the automated scripts designed for constructing an up-to-date Markdown version of the Power Query M reference documentation. The source of this documentation is the #shared structure within the Power BI Desktop application, which is extracted and published to a Docusaurus site for improved accessibility and user experience. The documentation is readily accessible at https://powerquery.io/.

## Features
The new site is equipped with a range of features aimed at enhancing the usability and accessibility of the Power Query M documentation. These features include:

* **Comprehensive Locale Support:** The site supports the majority of locales offered by Power BI Desktop, ensuring that users across the globe can access the documentation in their preferred language.

* **Automated Updates via GitHub Actions:** The documentation is kept up-to-date through an automated workflow powered by GitHub Actions. This automation involves extracting the latest #shared structure from Power BI Desktop, converting it into Markdown format, and publishing it to the Docusaurus site.

* **Easy Navigation and Search Functionality:** Designed with user experience in mind, the site features intuitive navigation and advanced search capabilities, supported by Algolia.

* **Responsive Design:** The Docusaurus site is designed to be fully responsive, ensuring that the documentation is accessible and readable on a wide range of devices, from desktop computers to smartphones and tablets.

* **Dark Mode:** Understanding the diverse preferences of our users, the site features a Dark Mode option, allowing for a more comfortable viewing experience in low-light environments.


## Notable Scripts
The repository follows the structure of a Docusaurus3 site with addition of the following scripts:

* The `/process` folder hosts scripts for generation of Markdown files based of JSON data.
* The `/.github` folder contains GitHub Actions configurations, automating documentation refreshes to ensure content remains up-to-date.
* `/process/shared/{locale}.json` PowerQuery documentation in JSON format.
* `/.github/scripts/generate-doc-output.ps1` generaties documentation in JSON format for specific locales, based on the `/process/dox.pbix` file.
* `/process/shared/_taxonomy.json` contains the taxonomy of Power Query functions .
* `/process/taxonomyGaps.js`, a Node.js script which identifies any functions lacking categorization.
* `/process/functionDocTemplate.ejs` is he EJS template that describes the format for generating markdown documentation.
* `/process/generateDocs.js` is a Node.js script that processes the JSON documentation and outputs the final Markdown files, completing the documentation pipeline. English (`en`) is written to `/docs`; every other locale is written to `/i18n/{locale}/docusaurus-plugin-content-docs/current/`. HTML embedded in the source strings (`<code>`, `<ul>`/`<li>`, `<table>`, …) is converted to Markdown with [Turndown](https://github.com/mixmark-io/turndown), and MDX-unsafe characters (`{`, `}`, `<`) are escaped.

### Usage

```bash
node process/generateDocs.js                 # every locale found under /i18n
node process/generateDocs.js de fr ja        # only the named locales
node process/generateDocs.js en              # English → /docs
node process/generateDocs.js --clean en      # English, removing stale .md first
node process/generateDocs.js --trim          # all i18n locales, with trimming
```

| Argument | Description |
| --- | --- |
| `<locale>…` | One or more locale codes to generate (e.g. `de fr ja`). Use `en` to (re)generate English into `/docs`. When no locale is given, every locale under `/i18n` is processed. |
| `--all` | Process every locale found under `/i18n`, in addition to any locales passed explicitly. |
| `--en` | Also (re)generate English into `/docs`. |
| `--clean` | Delete previously generated `.md` files in the target before writing, so renamed/removed functions don't linger as stale orphans. `readme.md`, `_category_.json` and hand-authored `.mdx` overrides are preserved. |
| `--trim` | After generating a locale, delete files whose content is byte-identical to the English version — Docusaurus falls back to the default locale for the missing entries (replaces the old `trimLocaleDocs.ps1`). |
| `--preserve-case` | Keep the original casing of output paths instead of lowercasing them. |

A typical end-to-end refresh after the JSON has been regenerated:

```bash
node process/generateDocs.js --clean en      # 1. English first
node process/generateDocs.js --trim          # 2. all i18n locales, trimmed against English
```

> The script depends on `ejs`, `turndown` and `turndown-plugin-gfm` (declared in `devDependencies`); run `npm install` first. Functions with a hand-authored `.mdx` page are skipped so manual pages are never overwritten.