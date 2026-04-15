const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

const updates = {
  81: [
    "Validating that documented requirements are met",
    "Causing failures and identifying defects",
    "Initiating errors and identifying root causes",
    "Verifying the test object meets user expectations"
  ],
  82: [
    "Testing causes failures while debugging fixes failures",
    "Testing is a negative activity while debugging is a positive activity",
    "Testing determines that defects exist while debugging removes defects",
    "Testing finds the cause of defects while debugging fixes the cause of defects"
  ],
  83: [
    "Explaining that it is not possible for testing to show the absence of defects",
    "Supporting the end users to perform acceptance testing",
    "Ensuring that no implementation defects remain in the delivered system",
    "Modifying tests that cause no failures to ensure few defects remain"
  ],
  84: [
    "Test implementation",
    "Test design",
    "Test execution",
    "Test monitoring",
    "Test analysis"
  ],
  85: [
    "1B, 2D, 3C, 4A",
    "1B, 2D, 3A, 4C",
    "1D, 2C, 3A, 4B",
    "1D, 2C, 3B, 4A"
  ],
  87: [
    "Teams with no testers",
    "Improved team dynamics",
    "Specialist team members",
    "Larger team sizes"
  ],
  89: [
    "For each test level, there is a corresponding development level",
    "For each test objective, there is a corresponding development objective",
    "For every test activity, there is a corresponding user activity",
    "For every development activity, there is a corresponding test activity"
  ],
  90: [
    "Component Test-Driven Development",
    "Integration Test-Driven Development",
    "System Test-Driven Development",
    "Acceptance Test-Driven Development"
  ]
};

// Simple approach: we'll search for the block `id: 81,` and replace its `options: [...]` array.
for (const [id, newOptions] of Object.entries(updates)) {
  const regex = new RegExp(`(id:\\s*${id},\\s*text:\\s*".*?",\\s*options:\\s*)\\[([\\s\\S]*?)\\]`, 'g');
  code = code.replace(regex, (match, p1, p2) => {
    return p1 + JSON.stringify(newOptions, null, 2).replace(/\n/g, '\n      ');
  });
}

fs.writeFileSync(path, code);
console.log("Updated questions.ts successfully.");

