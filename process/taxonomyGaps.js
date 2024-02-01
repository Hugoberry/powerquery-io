const fs = require('fs');

// Assuming you've loaded the JSON files as before
const taxonomyJson = require('./shared/_taxonomy.json'); 
const docJson = require('./shared/en.json'); 

// Helper function to recursively collect function names from taxonomy
function collectFunctionNames(node, setName) {
    if (typeof node === 'object' && !Array.isArray(node)) {
        Object.keys(node).forEach(key => {
            // Check if the value is a string (function description) or an object (subcategory)
            if (typeof node[key] === 'string') {
                setName.add(key);
            } else if (typeof node[key] === 'object') {
                // Recurse into subcategories
                collectFunctionNames(node[key], setName);
            }
        });
    }
}

// Extract the names of functions from the taxonomy JSON object.
let taxonomyFunctionNames = new Set();
Object.values(taxonomyJson).forEach(category => {
    collectFunctionNames(category, taxonomyFunctionNames);
});

// Extract the names of functions from the documentation JSON object.
let docFunctionNames = new Set(docJson.functions.map(func => func.Name));

// Find the function names in the documentation that are not part of the taxonomy.
let functionsNotInTaxonomy = new Set([...docFunctionNames].filter(x => !taxonomyFunctionNames.has(x)));

console.log(Array.from(functionsNotInTaxonomy));
