const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const functionsData = require('./path/to/your/jsonfile.json'); // Update the path

functionsData.functions.forEach(function(fn) {
  const outputContent = ejs.render(fs.readFileSync('./functionDocTemplate.ejs', 'utf8'), {
    functionName: fn.Name,
    documentation: fn.Documentation,
    parameters: fn.Parameters,
    returnType: fn.ReturnType,
  });

  const outputPath = path.join('./output', `${fn.Name}.md`); // Make sure the output directory exists
  fs.writeFileSync(outputPath, outputContent);
});

console.log('Documentation files have been generated.');