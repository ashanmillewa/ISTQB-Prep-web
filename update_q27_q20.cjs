const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// Update Q20 (id: 100)
// Remove the text before "|||"
const regexQ20 = /id:\s*100,[\s\S]*?options:/m;
const matchQ20 = code.match(regexQ20);
if (matchQ20) {
  const newTextQ20 = `|||Which of the following is the BEST set of input test data to cover the identified equivalence partitions?`;
  code = code.replace(
    regexQ20,
    `id: 100,\n      text: ${JSON.stringify(newTextQ20)},\n      image: paperCQ20,\n      options:`
  );
  console.log('Updated Q20');
}

// Update Q27 (id: 107)
const regexQ27 = /id:\s*107,[\s\S]*?options:/m;
const matchQ27 = code.match(regexQ27);
if (matchQ27) {
  const newTextQ27 = `Which of the following BEST describes how using checklist-based testing can result in increased coverage?`;
  code = code.replace(
    regexQ27,
    `id: 107,\n      text: ${JSON.stringify(newTextQ27)},\n      options:`
  );
  console.log('Updated Q27');
}

fs.writeFileSync(path, code);
