const ejs = require('ejs');
const fs = require('fs');
const path = require('path');
const functionsData = require('./shared/uno.json'); // input doc file

functionsData.functions.forEach(function(fn) {
  const outputContent = ejs.render(fs.readFileSync('./functionDocTemplate.ejs', 'utf8'), {
    functionName: fn.Name,
    documentation: fn.Documentation,
    parameters: fn.Parameters,
    requiredParameters: fn.RequiredParameters,
    returnType: fn.ReturnType,
  });

  const outputPath = path.join('./output', `${fn.Name}.md`); // 
  fs.writeFileSync(outputPath, outputContent);
});

console.log('Documentation files have been generated.');