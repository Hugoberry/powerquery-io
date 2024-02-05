# Power Query M Reference
This repository hosts the automated scripts designed for constructing an up-to-date Markdown version of the Power Query M reference documentation. The source of this documentation is the #shared structure within the Power BI Desktop application, which is extracted and published to a Docusaurus site for improved accessibility and user experience. The documentation is readily accessible at https://www.powerquery.io/.

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
* `/process/generateDocs.js` is a Node.js script that processes the JSON documentation for specific locales, outputting the final Markdown files into the appropriate locale directory under `/i18n/{locale}/docusaurus-plugin-content-docs/current/`, completing the documentation pipeline.