const fs = require('fs');
const text = fs.readFileSync('./client/src/data/questions.ts', 'utf8');

const regex = /id:\s*(\d+),\s*text:\s*"[^"]*TWO[^"]*"/g;
let match;
while ((match = regex.exec(text)) !== null) {
  console.log('Question ID with TWO:', match[1]);
}
