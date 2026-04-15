const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// Ensure correctAnswers is set correctly for Q84
code = code.replace(
  /(id:\s*84,\s*text:[\s\S]*?options:\s*\[[\s\S]*?\],\s*category:\s*".*?")/g,
  '$1,\n      correctAnswers: [1, 4]'
);

fs.writeFileSync(path, code);
console.log("Updated correctAnswers for Q84 in questions.ts properly");

