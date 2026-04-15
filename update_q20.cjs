const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// Add import
if (!code.includes('import paperCQ20 from "../assets/images/paper-c-q20.png";')) {
  code = code.replace(
    /import paperCQ17 from "\.\.\/assets\/images\/paper-c-q17\.png";/,
    'import paperCQ17 from "../assets/images/paper-c-q17.png";\nimport paperCQ20 from "../assets/images/paper-c-q20.png";'
  );
}

const regex = /id:\s*100,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `You are testing a PIN validator, which accepts valid PINs and rejects invalid PINs. A PIN is a sequence of digits. A PIN is valid if it consists of four digits, which are not all the same digit. You have identified the following valid equivalence partitions:|||Which of the following is the BEST set of input test data to cover the identified equivalence partitions?`;

  code = code.replace(
    regex,
    `id: 100,\n      text: ${JSON.stringify(newText)},\n      image: paperCQ20,\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q20 to use image.');
} else {
  console.log('Could not find Q20 to update.');
}
