const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Load taxonomy and documentation data
const taxonomyJson = require('./shared/_taxonomy.json');
const functionsData = require('./shared/en.json');

// Function to create mapping from function names to top-level categories
function createFunctionToCategoryMap(taxonomy) {
  const map = {};
  const extractFunctions = (entry, categoryName) => {
    if (typeof entry === 'object') {
      Object.keys(entry).forEach(key => {
        if (typeof entry[key] === 'string') { // Direct function mapping
          map[key] = categoryName;
        } else if (typeof entry[key] === 'object') { // Subcategory with more functions
          extractFunctions(entry[key], categoryName); // Use the same category name
        }
      });
    }
  };

  Object.entries(taxonomy).forEach(([category, functionsOrSubcategories]) => {
    extractFunctions(functionsOrSubcategories, category);
  });

  return map;
}

const functionToCategoryMap = createFunctionToCategoryMap(taxonomyJson);

// Ensure the output directory exists
// const outputDir = '../docs';
const outputDir = '../docs';
if (!fs.existsSync(outputDir)){
  fs.mkdirSync(outputDir, { recursive: true });
}

// Function to clean category names by removing specified suffixes
function cleanCategoryName(categoryName) {
  return categoryName.replace(/( functions| values| handling functions)$/i, '');
}

// Function to apply content cleaning rules
function cleanContent(content) {
  return content
  .replace(/\r\n/g, '') // Remove \r\n
  .replace(/\n\r/g,'') // problems with ca feed Odata.Feed
  .replace(/\\r\\n/g,'') // fix sv locale
  .replace(/\n/g,'') // problems with cs feed Number.Round
  .replace(/\r/g,'') // problems with cs feed Number.Round
  .replace(/<br>/g, '<br />') // Replace <br> with <br />
  .replace(/\*/g, '\\*') // Escape asterisk
  .replace(/\{/g, '\\{') // Escape curly braces
  .replace(/<p>/g,'') // Remove <p>
  .replace(/«|»/g,'"')
  .replace(/<\/p>/g,'<br />') // repalce </p> with <br />
  .replace(/<\/ul>>/g,'</ul>') // fix lv locale
  .replace(/\\<table>/g,'<table>') // fix nl locale
  .replace(/(?<!<\/li>\s*)<\/ul>\s*$/,'</li></ul>')// If the string ends with "</ul>" but not preceded by "</li>", replace
  .replace(/<li>  <li>/g,'<li>')// fix pl locale 
  .replace(/0< \/code>/g,'0</code>')// fix pl locale 
  .replace(/eins erhöht. <\/li>.<\/li><\/ul>/g,'eins erhöht. </li></ul>') // fix de locale
  .replace(/<code>list<\/code>.<\/li>.      <\/li><\/ul>/g,'<code>list</code>.      </li></ul>')// fix ru locale 
  .replace(/λογικής. <\/li>    <\/ul>/g,'λογικής.    </ul>'); //fix el feed
}

functionsData.functions.forEach(function(fn) {
  // Apply cleaning rules to LongDescription and Examples (if applicable)
  if (fn.Documentation['Documentation.LongDescription']) {
    fn.Documentation['Documentation.LongDescription'] = cleanContent(fn.Documentation['Documentation.LongDescription']);
  }
  //Apply cleaning rules to Description
  if (fn.Documentation['Documentation.Description']) {
    fn.Documentation['Documentation.Description'] = cleanContent(fn.Documentation['Documentation.Description']);
  }
  // Check if Documentation.Examples is an array before attempting to iterate
  if (Array.isArray(fn.Documentation['Documentation.Examples'])) {
    fn.Documentation['Documentation.Examples'].forEach(example => {
      if (example.Description) {
        example.Description = cleanContent(example.Description);
      }
    });
  } else {
    // Handle the case where Documentation.Examples is not an array
    // For example, log a warning or convert it into an array format as needed
    console.log(`Warning: Documentation.Examples is not an array for function ${fn.Name}`);
  }

  const rawCategory = functionToCategoryMap[fn.Name] || 'Uncategorized';
  const cleanedCategory = cleanCategoryName(rawCategory);

  // Determine if the function belongs to the "Accessing data functions" category
  let finalPath = outputDir;
  if (cleanedCategory === 'Accessing data') {
    // Extract namespace from the function name, if present
    const namespace = fn.Name.includes('.') ? fn.Name.split('.')[0] : '';
    if (namespace) {
      // Create a subfolder path with the namespace
      finalPath = path.join(outputDir, cleanedCategory, namespace);
    } else {
      // No namespace, so use the cleaned category as the folder
      finalPath = path.join(outputDir, cleanedCategory);
    }
  } else {
    // For other categories, use the cleaned category name as the folder
    finalPath = path.join(outputDir, cleanedCategory);
  }

  // Ensure the final directory exists
  fs.mkdirSync(finalPath, { recursive: true });

  const outputContent = ejs.render(fs.readFileSync('./functionDocTemplate.ejs', 'utf8'), {
    functionName: fn.Name,
    documentation: fn.Documentation,
    parameters: fn.Parameters,
    requiredParameters: fn.RequiredParameters,
    returnType: fn.ReturnType,
  });

  const outputPath = path.join(finalPath, `${fn.Name}.md`);
  fs.writeFileSync(outputPath, outputContent);
});

console.log('Documentation files have been generated.');
