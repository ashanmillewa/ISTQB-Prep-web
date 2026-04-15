const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

code = code.replace(
  'text: "TWO Which of the following test activities are MOST likely to involve the application of boundary value\\nanalysis and equivalence partitioning?"',
  'text: "TWO Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?"'
);

fs.writeFileSync(path, code);
console.log("Removed line break after 'value' in Q84 text");
