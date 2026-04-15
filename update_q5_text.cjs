const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

// The current text
const regex = /id:\s*85,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `Given the following testware:\n\n1. Coverage items\n2. Change requests\n3. Test execution schedule\n4. Prioritized test conditions\nAnd the following test activities\nA. Test analysis\nB. Test design\nC. Test implementation\nD. Test completion\nWhich of the following BEST shows the testware produced by the activities?`;

  code = code.replace(
    regex,
    `id: 85,\n      text: ${JSON.stringify(newText)},\n      options:`
  );
  
  // Optionally remove the import if we want, but keeping it is harmless
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q5 to use text.');
} else {
  console.log('Could not find Q5 to update.');
}
