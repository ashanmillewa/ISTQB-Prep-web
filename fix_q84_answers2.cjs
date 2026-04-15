const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// The previous script appended correctAnswers multiple times if we ran it multiple times
// Let's clean it up to ensure exactly one correctAnswers field per object
code = code.replace(/,\n\s*correctAnswers:\s*\[\s*1\s*,\s*4\s*\]/g, ''); // remove all

code = code.replace(
  /(id:\s*84,\s*text:[\s\S]*?options:\s*\[[\s\S]*?\],\s*category:\s*".*?")/g,
  '$1,\n      correctAnswers: [1, 4]'
);

fs.writeFileSync(path, code);
console.log("Cleaned up correctAnswers for Q84 in questions.ts");
