const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// 1. Add import
if (!code.includes('import paperCQ22 from "../assets/images/paper-c-q22.png";')) {
  code = code.replace(
    /import paperCQ21 from "\.\.\/assets\/images\/paper-c-q21\.png";/,
    'import paperCQ21 from "../assets/images/paper-c-q21.png";\nimport paperCQ22 from "../assets/images/paper-c-q22.png";'
  );
}

// 2. Update question text and add image
const regex = /id:\s*102,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table.|||What test data will show that there are contradictory rules in the decision table?`;

  code = code.replace(
    regex,
    `id: 102,\n      text: ${JSON.stringify(newText)},\n      image: paperCQ22,\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q22 to use image.');
} else {
  console.log('Could not find Q22 to update.');
}
