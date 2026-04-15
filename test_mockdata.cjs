require('ts-node').register();
// Just checking if we can verify the mock data
const fs = require('fs');
const content = fs.readFileSync('client/src/data/mockData.ts', 'utf8');
console.log(content.includes('answer.correctAnswers[0]'));
