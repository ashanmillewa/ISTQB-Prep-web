const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

const regex = /id:\s*85,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `Given the following testware:\n\n    1. Coverage items\n    2. Change requests\n    3. Test execution schedule\n    4. Prioritized test conditions\nAnd the following test activities\n    A. Test analysis\n    B. Test design\n    C. Test implementation\n    D. Test completion\nWhich of the following BEST shows the testware produced by the activities?`;

  code = code.replace(
    regex,
    `id: 85,\n      text: ${JSON.stringify(newText)},\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q5 to use spaces/tabs.');
} else {
  console.log('Could not find Q5 to update.');
}
