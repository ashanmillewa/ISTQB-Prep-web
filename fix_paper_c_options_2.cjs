const fs = require('fs');

const path = 'client/src/data/questions.ts';
let code = fs.readFileSync(path, 'utf8');

const updates = {
  93: [
    "Component testing",
    "Component integration testing",
    "System integration testing",
    "Acceptance testing"
  ],
  94: [
    "Only confirmation testing",
    "Confirmation testing then regression testing",
    "Only regression testing",
    "Regression testing then confirmation testing"
  ],
  95: [
    "ii, v",
    "iii, v",
    "i, ii, iv",
    "i, iii, iv"
  ],
  96: [
    "Changes to requirements are understood and implemented earlier",
    "It ensures business stakeholders understand user requirements",
    "It allows product owners to change their requirements as often as they want",
    "End users are told which requirements will not be implemented prior to release"
  ],
  97: [
    "1A, 2B, 3C, 4D",
    "1A, 2D, 3C, 4B",
    "1B, 2C, 3D, 4A",
    "1C, 2D, 3A, 4B"
  ],
  98: [
    "Ensure management participate as reviewers",
    "Split large work products into smaller parts",
    "Set reviewer evaluation as an objective",
    "Plan to cover one document per review"
  ],
  99: [
    "The test object",
    "The test level at which the test technique is used",
    "The test basis",
    "The software development lifecycle (SDLC) in which the test technique can be used"
  ],
  100: [
    "12, 1111, 1234, 12345",
    "1, 123, 1111, 1234",
    "11, 12, 1111, 12345",
    "123, 1222, 12345"
  ],
  102: [
    "C1 = T, C2 = T, C3 = F",
    "C1 = T, C2 = F, C3 = T",
    "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T",
    "C1 = F, C2 = F, C3 = F"
  ],
  103: [
    "3",
    "2",
    "5",
    "6"
  ],
  104: [
    "2",
    "4",
    "8",
    "7"
  ],
  106: [
    "Exploratory testing",
    "Fault attack",
    "Checklist-based testing",
    "Boundary value analysis"
  ],
  109: [
    "Check that a Regular user can access floors 1 and 3",
    "Check that a Regular user cannot access floor 4",
    "Check that a Special user can access floor 5",
    "Check that a Special user can access floors 1, 2 and 3"
  ],
  111: [
    "10.5 person-days",
    "8.25 person-days",
    "6.5 person-days",
    "9.4 person-days"
  ],
  112: [
    "TC 3",
    "TC 5",
    "TC 6",
    "TC 2"
  ],
  113: [
    "That tests may have different priorities",
    "That tests may have different granularity",
    "That tests may require different coverage criteria",
    "That tests may depend on other tests"
  ],
  115: [
    "Continuous risk monitoring allows us to identify an emerging risk as soon as possible",
    "Risk identification allows us to implement risk mitigation activities and reduce the risk level",
    "The assessed risk level helps us to select the rigor of testing",
    "Risk analysis allows us to derive coverage items"
  ],
  116: [
    "Test design",
    "Test completion",
    "Test analysis",
    "Test planning"
  ],
  117: [
    "All commits to the repository are uniquely identified and version controlled",
    "All changes in the test environment elements are tracked",
    "All requirement specifications are referenced unambiguously in test plans",
    "All identified defects have an assigned status"
  ],
  118: [
    "Name of the tester and date",
    "Test environment elements and their version numbers",
    "Identification of the test object",
    "Impact on the interests of stakeholders"
  ],
  119: [
    "Test execution and coverage tools",
    "Test design and implementation tools",
    "Defect management tools",
    "Test management tools"
  ],
  120: [
    "The capability of generating test cases without access to the test basis",
    "The achievement of increased coverage through more objective assessment",
    "The increase in test execution times available with higher processing power",
    "The prevention of human errors through greater consistency and repeatability"
  ]
};

// Simple approach: we'll search for the block `id: XXX,` and replace its `options: [...]` array.
for (const [id, newOptions] of Object.entries(updates)) {
  const regex = new RegExp(`(id:\\s*${id},\\s*text:\\s*".*?",\\s*options:\\s*)\\[([\\s\\S]*?)\\]`, 'g');
  code = code.replace(regex, (match, p1, p2) => {
    return p1 + JSON.stringify(newOptions, null, 2).replace(/\n/g, '\n      ');
  });
}

fs.writeFileSync(path, code);
console.log("Updated questions.ts successfully for the rest of Paper C.");
