const fs = require('fs');
const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

const regex = /id:\s*111,[\s\S]*?options:/m;
const match = code.match(regex);

if (match) {
  const newText = `At the beginning of each iteration, the team estimates the amount of work (in person-days) they will need to complete during the iteration. Let E(n) be the estimated amount of work for iteration n, and let A(n) be the actual amount of work done in iteration n. From the third iteration, the team uses the following estimation model based on extrapolation:\n\nE(n) = (3 * A(n - 1) + A(n - 2)) / 4\n\nThe graph shows the estimated and actual amount of work for the first four iterations.\n\nEstimated and actual effort (in person-days)\n13\n12\n11\n10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n0\nIteration #1\nIteration #2\nEstimated\nIteration #3\nIteration #4\nActual\n\nWhat is the estimated amount of work for iteration #5?`;

  code = code.replace(
    regex,
    `id: 111,\n      text: ${JSON.stringify(newText)},\n      options:`
  );
  
  fs.writeFileSync(path, code);
  console.log('Successfully updated Q31 to use new formatted text.');
} else {
  console.log('Could not find Q31 to update.');
}
