const fs = require('fs');
const path = 'client/src/data/answers.ts';
let code = fs.readFileSync(path, 'utf8');

// The issue is a missing comma before "paper-d": [
code = code.replace(/    \]\n  "paper-d": \[/, '    ],\n  "paper-d": [');
code = code.replace(/    \]\n    "paper-d": \[/, '    ],\n    "paper-d": [');
code = code.replace(/    \}\n  \]\n  "paper-d": \[/, '    }\n  ],\n  "paper-d": [');
code = code.replace(/    \}\n  \]\n"paper-d": \[/, '    }\n  ],\n  "paper-d": [');

fs.writeFileSync(path, code);
console.log('Fixed syntax error in answers.ts');
