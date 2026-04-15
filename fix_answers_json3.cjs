const fs = require('fs');
const path = 'client/src/data/answers.ts';
let code = fs.readFileSync(path, 'utf8');

// The issue is a missing comma after the paper-c array before "paper-d": [
code = code.replace(/    \},\n  \]\n  "paper-d": \[/g, '    }\n  ],\n  "paper-d": [');

fs.writeFileSync(path, code);
console.log('Fixed syntax error in answers.ts');
