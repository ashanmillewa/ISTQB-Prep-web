const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// 1. Add import
if (!code.includes('import paperCQ23 from "../assets/images/paper-c-q23.png";')) {
  code = code.replace(
    /import paperCQ22 from "\.\.\/assets\/images\/paper-c-q22\.png";/,
    'import paperCQ22 from "../assets/images/paper-c-q22.png";\nimport paperCQ23 from "../assets/images/paper-c-q23.png";'
  );
}

// 2. Update question text and add image
const regex = /id:\s*103,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `You are designing test cases based on the following state transition diagram:|||What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?`;

  code = code.replace(
    regex,
    `id: 103,\n      text: ${JSON.stringify(newText)},\n      image: paperCQ23,\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q23 to use image.');
} else {
  console.log('Could not find Q23 to update.');
}
