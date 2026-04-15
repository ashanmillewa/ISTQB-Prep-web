const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// Fix Q84 specifically since it was asked before to be b and e (1 and 4)
code = code.replace(
  /(id:\s*84,\s*text:[\s\S]*?options:\s*\[[\s\S]*?\],\s*category:\s*".*?")(,\s*correctAnswers:\s*\[.*?\])*/g,
  '$1,\n      correctAnswers: [1, 4]'
);

fs.writeFileSync(path, code);
console.log("Ensured Q84 correctAnswers is [1, 4]");

