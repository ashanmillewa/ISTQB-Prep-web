const fs = require('fs');
const text = fs.readFileSync('questions.txt', 'utf8');

const q1Index = text.indexOf('Question #1');
console.log(text.substring(q1Index, q1Index + 2000));
