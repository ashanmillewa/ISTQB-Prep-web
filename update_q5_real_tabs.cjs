const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

const regex = /id:\s*85,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `Given the following testware:\n\n\t1. Coverage items\n\t2. Change requests\n\t3. Test execution schedule\n\t4. Prioritized test conditions\nAnd the following test activities\n\tA. Test analysis\n\tB. Test design\n\tC. Test implementation\n\tD. Test completion\nWhich of the following BEST shows the testware produced by the activities?`;

  code = code.replace(
    regex,
    `id: 85,\n      text: ${JSON.stringify(newText)},\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q5 to use actual tab characters.');
}
