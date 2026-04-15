const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

code = code.replace(
  'text: "Given the following testware:\\n1. Coverage items\\n2. Change requests\\n3. Test execution schedule\\n4. Prioritized test conditions\\nAnd the following test activities\\nA. Test analysis\\nB. Test design\\nC. Test implementation\\nD. Test completion\\nWhich of the following BEST shows the testware produced by the activities?"',
  'text: "Given the following testware:\\n\\t1. Coverage items\\n\\t2. Change requests\\n\\t3. Test execution schedule\\n\\t4. Prioritized test conditions\\nAnd the following test activities\\n\\tA. Test analysis\\n\\tB. Test design\\n\\tC. Test implementation\\n\\tD. Test completion\\nWhich of the following BEST shows the testware produced by the activities?"'
);

fs.writeFileSync(path, code);
console.log("Added tab spaces for Q85 options");
