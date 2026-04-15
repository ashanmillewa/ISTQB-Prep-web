const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// 1. Add import
if (!code.includes('import paperCQ21 from "../assets/images/paper-c-q21.png";')) {
  code = code.replace(
    /import paperCQ17 from "\.\.\/assets\/images\/paper-c-q17\.png";/,
    'import paperCQ17 from "../assets/images/paper-c-q17.png";\nimport paperCQ21 from "../assets/images/paper-c-q21.png";'
  );
}

// 2. Update question text and add image
const regex = /id:\s*101,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `A developer was asked to implement the following business rule:|||You design the test cases using 2-value boundary value analysis.\nWhich of the following sets of test inputs achieves the greatest coverage?`;

  code = code.replace(
    regex,
    `id: 101,\n      text: ${JSON.stringify(newText)},\n      image: paperCQ21,\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q21 to use image.');
} else {
  console.log('Could not find Q21 to update.');
}
