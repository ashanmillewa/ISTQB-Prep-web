const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// Add import
if (!code.includes('import paperCQ38 from "../assets/images/paper-c-q38.png";')) {
  code = code.replace(
    /import paperCQ32 from "\.\.\/assets\/images\/paper-c-q32\.png";/,
    'import paperCQ32 from "../assets/images/paper-c-q32.png";\nimport paperCQ38 from "../assets/images/paper-c-q38.png";'
  );
}

const regex = /id:\s*118,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `Consider the following defect report for a web-based shopping application:|||What is the MOST important information that is missing from this defect report?`;

  code = code.replace(
    regex,
    `id: 118,\n      text: ${JSON.stringify(newText)},\n      image: paperCQ38,\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q38 to use image.');
} else {
  console.log('Could not find Q38 to update.');
}
