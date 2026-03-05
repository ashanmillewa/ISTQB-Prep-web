export interface AnswerData {
  questionId: number;
  correctAnswer: number;
  explanation: string;
}

export const answersData: Record<string, AnswerData[]> = {
  "paper-a": [
    {
      questionId: 1,
      correctAnswer: 2,
      explanation: "Testing reduces risk and builds confidence; it cannot prove absence of defects or failures."
    },
    {
      questionId: 2,
      correctAnswer: 0,
      explanation: "Early tester involvement across the SDLC improves defect detection and overall quality."
    },
    {
      questionId: 3,
      correctAnswer: 0,
      explanation: "Unchanged tests may stop detecting defects over time, even when defects still exist."
    },
    {
      questionId: 4,
      correctAnswer: 1,
      explanation: "Test analysis focuses on deciding what should be tested."
    },
    {
      questionId: 5,
      correctAnswer: 1,
      explanation: "The SDLC, level of risk, and regulatory requirements significantly influence the test approach."
    },
    {
      questionId: 6,
      correctAnswer: 1,
      explanation: "Testing finds defects and failures; debugging is used to locate and fix the causes."
    },
    {
      questionId: 7,
      correctAnswer: 1,
      explanation: "The number of possible combinations is too large to test exhaustively."
    },
    {
      questionId: 8,
      correctAnswer: 2,
      explanation: "A failure is the observed incorrect behavior of the system during execution."
    },
    {
      questionId: 9,
      correctAnswer: 2,
      explanation: "ATDD uses acceptance criteria to create tests that guide development."
    },
    {
      questionId: 10,
      correctAnswer: 2,
      explanation: "Performance efficiency testing is not typically a shift-left activity."
    },
    {
      questionId: 11,
      correctAnswer: 2,
      explanation: "Retrospectives enable analysis of process issues and support continuous improvement."
    },
    {
      questionId: 12,
      correctAnswer: 3,
      explanation: "Different failure types align best with specific test levels based on scope."
    },
    {
      questionId: 13,
      correctAnswer: 1,
      explanation: "Regression testing ensures changes have not negatively impacted existing functionality."
    },
    {
      questionId: 14,
      correctAnswer: 0,
      explanation: "Confirmation testing verifies that a specific defect has been successfully fixed."
    },
    {
      questionId: 15,
      correctAnswer: 2,
      explanation: "Human errors can introduce defects in code, which may later cause failures during execution."
    },
    {
      questionId: 16,
      correctAnswer: 1,
      explanation: "Static testing (e.g., reviews) can identify defects without executing the code."
    },
    {
      questionId: 17,
      correctAnswer: 2,
      explanation: "Reviews can identify missing or unclear requirements early."
    },
    {
      questionId: 18,
      correctAnswer: 1,
      explanation: "Walkthroughs are informal reviews aimed at understanding and learning."
    },
    {
      questionId: 19,
      correctAnswer: 1,
      explanation: "The moderator facilitates the review and ensures adherence to the process."
    },
    {
      questionId: 20,
      correctAnswer: 1,
      explanation: "Early feedback helps uncover misunderstandings before they become costly defects."
    },
    {
      questionId: 21,
      correctAnswer: 2,
      explanation: "System testing evaluates the full system against specified requirements."
    },
    {
      questionId: 22,
      correctAnswer: 1,
      explanation: "Acceptance testing ensures the system meets user and business requirements."
    },
    {
      questionId: 23,
      correctAnswer: 3,
      explanation: "Functional testing verifies system functions against requirements."
    },
    {
      questionId: 24,
      correctAnswer: 2,
      explanation: "Non-functional testing focuses on quality attributes beyond functionality."
    },
    {
      questionId: 25,
      correctAnswer: 2,
      explanation: "Black-box techniques derive tests from requirements, not code structure."
    },
    {
      questionId: 26,
      correctAnswer: 1,
      explanation: "White-box testing uses knowledge of the internal code structure."
    },
    {
      questionId: 27,
      correctAnswer: 2,
      explanation: "Boundary value analysis focuses on values at the edges of partitions."
    },
    {
      questionId: 28,
      correctAnswer: 1,
      explanation: "Exploratory testing combines learning, design, and execution."
    },
    {
      questionId: 29,
      correctAnswer: 1,
      explanation: "Test automation supports testing activities using tools."
    },
    {
      questionId: 30,
      correctAnswer: 2,
      explanation: "Exit criteria define when testing can stop; reaching target defect density and having regression tests automated are valid exit criteria."
    },
    {
      questionId: 31,
      correctAnswer: 3,
      explanation: "Using three-point estimation (PERT), the calculated estimate rounds to 10 person-hours."
    },
    {
      questionId: 32,
      correctAnswer: 0,
      explanation: "The highest priority test case whose dependencies are satisfied should be executed first."
    },
    {
      questionId: 33,
      correctAnswer: 0,
      explanation: "Each test category aligns with the quadrant based on business vs technology focus and critique vs support."
    },
    {
      questionId: 34,
      correctAnswer: 2,
      explanation: "Performance testing and user testing are actions that reduce the likelihood or impact of the risk."
    },
    {
      questionId: 35,
      correctAnswer: 3,
      explanation: "A burndown chart visualizes completed work and remaining work over time."
    },
    {
      questionId: 36,
      correctAnswer: 2,
      explanation: "Configuration management controls versions and changes to testware."
    },
    {
      questionId: 37,
      correctAnswer: 2,
      explanation: "If developers cannot reproduce the issue, reproducibility information is insufficient."
    },
    {
      questionId: 38,
      correctAnswer: 2,
      explanation: "Data preparation tools support creating and managing test data during design and implementation."
    },
    {
      questionId: 39,
      correctAnswer: 1,
      explanation: "Automation requires ongoing maintenance; insufficient effort is a common risk."
    },
    {
      questionId: 40,
      correctAnswer: 2,
      explanation: "Automation improves the consistency of test execution by following the same steps every time."
    }
  ],
  "paper-b": [
    { questionId: 41, correctAnswer: 3, explanation: "Reviews increase the quality of requirements specifications and lead to fewer changes." },
    { questionId: 42, correctAnswer: 1, explanation: "Testing is performed as part of QC (Quality Control)." },
    { questionId: 43, correctAnswer: 3, explanation: "Using equivalence partitioning and boundary value analysis helps reduce the infinite test space." },
    { questionId: 44, correctAnswer: 0, explanation: "Test design involves working with test data requirements, test conditions, etc." },
    { questionId: 45, correctAnswer: 2, explanation: "The experience of the test team significantly impacts how testing is performed." },
    { questionId: 46, correctAnswer: 1, explanation: "Traceability between user requirements and test results provides a means of measuring coverage." },
    { questionId: 47, correctAnswer: 1, explanation: "Generic skills like domain knowledge (e.g., former pilot) help understand acceptance criteria." },
    { questionId: 48, correctAnswer: 3, explanation: "Whole-team approach generates team synergy that benefits the entire project." },
    { questionId: 49, correctAnswer: 1, explanation: "In sequential models, dynamic testing is typically restricted to later stages." },
    { questionId: 50, correctAnswer: 1, explanation: "Testers should review work products as soon as drafts are available (early testing)." },
    { questionId: 51, correctAnswer: 0, explanation: "Test-Driven Development (TDD) is a test-first approach." },
    { questionId: 52, correctAnswer: 1, explanation: "DevOps uses automated pipelines for frequent updates and releases." },
    { questionId: 53, correctAnswer: 0, explanation: "Security testing by an independent team is often part of system testing." },
    { questionId: 54, correctAnswer: 3, explanation: "Regression testing checks for side effects in unchanged code." },
    { questionId: 55, correctAnswer: 1, explanation: "Unreachable code can be found by static analysis but not by executing the code." },
    { questionId: 56, correctAnswer: 2, explanation: "Early feedback facilitates early communication of potential quality issues." },
    { questionId: 57, correctAnswer: 3, explanation: "1C (Planning selects exit criteria), 2B (Initiation gives access), 3A (Individual review identifies anomalies), 4D (Communication and analysis discusses anomalies)." },
    { questionId: 58, correctAnswer: 2, explanation: "1B (Scribe records), 2D (Review leader has overall responsibility), 3A (Facilitator ensures meeting runs well), 4C (Manager decides what to review)." },
    { questionId: 59, correctAnswer: 3, explanation: "Decision table testing (black-box) is independent of internal code structure, unlike branch testing." },
    { questionId: 60, correctAnswer: 0, explanation: "Values 19, 20, 30 cover various discount thresholds." },
    { questionId: 61, correctAnswer: 3, explanation: "3-value BVA includes values just outside, on the boundary, and just inside." },
    { questionId: 62, correctAnswer: 1, explanation: "Calculated based on the rules covered by the provided test cases." },
    { questionId: 63, correctAnswer: 2, explanation: "Sequence Add, Add, Add, Remove, Remove covers the most valid state transitions." },
    { questionId: 64, correctAnswer: 1, explanation: "Since 40% and 65% overlap significantly, at least some statements must be shared." },
    { questionId: 65, correctAnswer: 2, explanation: "X represents the number of branches exercised." },
    { questionId: 66, correctAnswer: 0, explanation: "Limited time for formal design is a prime reason for exploratory testing." },
    { questionId: 67, correctAnswer: 3, explanation: "Checklists focus on user-understandable error messages and other verifiable items." },
    { questionId: 68, correctAnswer: 1, explanation: "Given/When/Then is the scenario-oriented format." },
    { questionId: 69, correctAnswer: 3, explanation: "User registration is a different story than viewing previous orders." },
    { questionId: 70, correctAnswer: 0, explanation: "Static analysis passing is a good entry criterion for merging code." },
    { questionId: 71, correctAnswer: 1, explanation: "Calculated based on historical ratios." },
    { questionId: 72, correctAnswer: 1, explanation: "Based on dependencies and priorities provided." },
    { questionId: 73, correctAnswer: 3, explanation: "Component integration testing is technology facing and supports the team." },
    { questionId: 74, correctAnswer: 2, explanation: "1B (Response -> Performance), 2A (Preferences -> Acceptance), 3D (Flood -> Transfer), 4C (Reports -> BVA)." },
    { questionId: 75, correctAnswer: 0, explanation: "Mean time to failure is a direct measure of product quality (reliability)." },
    { questionId: 76, correctAnswer: 0, explanation: "Face-to-face is least effective for teams separated by an ocean." },
    { questionId: 77, correctAnswer: 0, explanation: "CM tools retrieve the correct environment versions for testing." },
    { questionId: 78, correctAnswer: 1, explanation: "The core issue identified was the failure to handle duplicate inputs." },
    { questionId: 79, correctAnswer: 2, explanation: "1C (DevOps tracking), 2D (Collaboration), 3B (Scalability/VMs), 4A (Static/Reviews)." },
    { questionId: 80, correctAnswer: 2, explanation: "The primary benefit of automation is reducing the manual execution time." }
  ],
  "paper-c": [
    { questionId: 81, correctAnswer: 1, explanation: "Causing failures and identifying defects is a typical objective of testing." },
    { questionId: 82, correctAnswer: 2, explanation: "Testing determines that defects exist while debugging removes defects." },
    { questionId: 83, correctAnswer: 1, explanation: "Supporting end users to perform acceptance testing helps address the 'absence-of-defects fallacy' by focusing on user needs." },
    { questionId: 84, correctAnswer: 1, explanation: "Test design is where techniques like BVA and EP are applied to create test cases." },
    { questionId: 85, correctAnswer: 0, explanation: "1B (Coverage items -> Design), 2D (Change requests -> Completion), 3C (Execution schedule -> Implementation), 4A (Prioritized conditions -> Analysis)." },
    { questionId: 86, correctAnswer: 2, explanation: "In Agile, test management activities that span multiple teams are common to ensure consistency." },
    { questionId: 87, correctAnswer: 1, explanation: "The whole-team approach improves team dynamics and shared responsibility." },
    { questionId: 88, correctAnswer: 0, explanation: "Independent testers find defects due to different technical perspectives." },
    { questionId: 89, correctAnswer: 3, explanation: "For every development activity, there should be a corresponding test activity." },
    { questionId: 90, correctAnswer: 3, explanation: "Acceptance Test-Driven Development (ATDD) is a test-first approach." },
    { questionId: 91, correctAnswer: 1, explanation: "Shift-left means moving test activities earlier in the SDLC." },
    { questionId: 92, correctAnswer: 2, explanation: "Improving end users' understanding is least likely compared to direct process/product improvements." },
    { questionId: 93, correctAnswer: 3, explanation: "Acceptance testing focuses on validation and is often performed by users." },
    { questionId: 94, correctAnswer: 1, explanation: "Confirmation testing verifies the fix, then regression testing checks for side effects." },
    { questionId: 95, correctAnswer: 3, explanation: "Static testing finds structural issues like unreachable paths or unused variables." },
    { questionId: 96, correctAnswer: 0, explanation: "Early feedback ensures changes to requirements are understood and implemented earlier." },
    { questionId: 97, correctAnswer: 1, explanation: "1A (Technical -> Consensus), 2D (Informal -> No formal output), 3C (Inspection -> Metrics), 4B (Walkthrough -> Educate)." },
    { questionId: 98, correctAnswer: 1, explanation: "Splitting large work products into smaller parts makes reviews more manageable and successful." },
    { questionId: 99, correctAnswer: 2, explanation: "The main difference is the test basis used to derive the tests." },
    { questionId: 100, correctAnswer: 0, explanation: "Covers all identified partitions (length, digits)." },
    { questionId: 101, correctAnswer: 3, explanation: "101, 150, 199, 200 are the critical boundary values for the specified rule." },
    { questionId: 102, correctAnswer: 3, explanation: "C1=F, C2=F, C3=F shows contradictory or missing rules for these conditions." },
    { questionId: 103, correctAnswer: 0, explanation: "Based on the transitions in the diagram, 3 test cases are needed for full coverage." },
    { questionId: 104, correctAnswer: 2, explanation: "The control flow graph shows 8 coverage items for full branch testing." },
    { questionId: 105, correctAnswer: 0, explanation: "White-box coverage evaluation helps assess the thoroughness of black-box tests." },
    { questionId: 106, correctAnswer: 1, explanation: "Fault attack involves using a list of common errors/failures to find defects." },
    { questionId: 107, correctAnswer: 3, explanation: "Multiple testers using the same checklist will likely find different bugs, increasing overall coverage." },
    { questionId: 108, correctAnswer: 1, explanation: "When/Then format is characteristic of scenario-oriented acceptance criteria." },
    { questionId: 109, correctAnswer: 3, explanation: "Testing that Special users can access Regular floors directly tests AC3." },
    { questionId: 110, correctAnswer: 0, explanation: "Defining detailed test data/results for specific tests is part of test design, not the high-level plan." },
    { questionId: 111, correctAnswer: 2, explanation: "Using the model [3*A(4)+A(3)], the estimate for #5 is 6.5." },
    { questionId: 112, correctAnswer: 0, explanation: "Based on the provided dependencies and priorities, TC 3 should be executed sixth." },
    { questionId: 113, correctAnswer: 1, explanation: "The test pyramid shows that tests vary in granularity and quantity." },
    { questionId: 114, correctAnswer: 3, explanation: "Quadrants group tests by criteria like target audience (business vs technology)." },
    { questionId: 115, correctAnswer: 2, explanation: "Assessed risk level directly determines the rigor and depth of testing required." },
    { questionId: 116, correctAnswer: 1, explanation: "Test completion makes most use of progress reports to decide if exit criteria are met." },
    { questionId: 117, correctAnswer: 3, explanation: "Defect status assignment is part of defect management, not core configuration management." },
    { questionId: 118, correctAnswer: 1, explanation: "Version numbers of the environment are critical for reproducing the defect." },
    { questionId: 119, correctAnswer: 3, explanation: "Test management tools organize test cases, defects, and version control integrations." },
    { questionId: 120, correctAnswer: 3, explanation: "Consistency and repeatability are key benefits of automating tests." }
  ],
  "paper-d": [
    { questionId: 121, correctAnswer: 3, explanation: "Building confidence in the quality of the test object is a typical objective of testing." },
    { questionId: 122, correctAnswer: 2, explanation: "In this scenario, the programmer working under severe time pressure is a root cause that led to the introduction of defects." },
    { questionId: 123, correctAnswer: 0, explanation: "The principle 'Tests wear out' suggests that repeating the same tests eventually stops finding new defects, so varying them is necessary." },
    { questionId: 124, correctAnswer: 1, explanation: "1B (Derive cases -> Design), 2D (Identify testware -> Completion), 3C (Organize procedures -> Implementation), 4A (Evaluate basis -> Analysis)." },
    { questionId: 125, correctAnswer: 0, explanation: "Test implementation results in executable testware like input/output data in databases and sequenced test cases." },
    { questionId: 126, correctAnswer: 3, explanation: "Test managers are responsible for high-level reporting, such as the test completion report." },
    { questionId: 127, correctAnswer: 0, explanation: "The whole-team approach is designed to improve communication and shared responsibility for quality." },
    { questionId: 128, correctAnswer: 1, explanation: "Independence benefits from different perspectives and questioning underlying assumptions." },
    { questionId: 129, correctAnswer: 0, explanation: "A universal good practice is that each test level has its own specific and distinct objectives." },
    { questionId: 130, correctAnswer: 0, explanation: "Behavior-Driven Development (BDD) is a well-known test-first approach." },
    { questionId: 131, correctAnswer: 3, explanation: "Automating the delivery pipeline is a significant technical and cultural challenge in DevOps." },
    { questionId: 132, correctAnswer: 1, explanation: "Retrospectives focus on identifying what went well to incorporate it into future work." },
    { questionId: 133, correctAnswer: 0, explanation: "Functional testing checks if the system does what it's supposed to do, like sorting correctly." },
    { questionId: 134, correctAnswer: 1, explanation: "Removing a feature (like a refund option) because it's broken is a major trigger for maintenance testing." },
    { questionId: 135, correctAnswer: 2, explanation: "Static testing requires reading the item; encrypted code cannot be read and analyzed without execution/decryption." },
    { questionId: 136, correctAnswer: 2, explanation: "Some structural or requirement defects found by static testing (like unused variables) are never detected by dynamic execution." },
    { questionId: 137, correctAnswer: 1, explanation: "Review process: Planning (4) -> Initiation (5) -> Individual Review (3) -> Communication (1) -> Fixing/Reporting (2)." },
    { questionId: 138, correctAnswer: 1, explanation: "The moderator (or facilitator) ensures the review meeting is effective and inclusive." },
    { questionId: 139, correctAnswer: 1, explanation: "Black-box techniques are used when designing tests based on specified requirements." },
    { questionId: 140, correctAnswer: 1, explanation: "The pensioner discount (D >= 65) is the missing valid partition from the existing suite." },
    { questionId: 141, correctAnswer: 2, explanation: "2-value BVA at boundaries 0 and 2 requires testing -1, 0 (lower) and 2, 3 (upper)." },
    { questionId: 142, correctAnswer: 0, explanation: "Adding a case for an unregistered 66-year-old (Category B) covers a rule not previously exercised." },
    { questionId: 143, correctAnswer: 1, explanation: "The sequence Available -> ChangeRoom -> NotAvailable -> Available -> Pay covers the most transitions." },
    { questionId: 144, correctAnswer: 2, explanation: "100% statement coverage guarantees every executable statement has been run at least once." },
    { questionId: 145, correctAnswer: 0, explanation: "White-box testing relies on the code structure, making it independent of the quality of the specification." },
    { questionId: 146, correctAnswer: 2, explanation: "Error guessing focuses on technical and logical mistakes, not the developer's personal schedule/seminars." },
    { questionId: 147, correctAnswer: 3, explanation: "Exploratory testing is highly flexible and often incorporates standard black-box techniques during execution." },
    { questionId: 148, correctAnswer: 3, explanation: "Face-to-face conversation is the most effective way to reach a shared understanding of user needs." },
    { questionId: 149, correctAnswer: 0, explanation: "Tests that a specific valid price range correctly filters the available products (A is in, B is out)." },
    { questionId: 150, correctAnswer: 1, explanation: "Exit criteria are the conditions that must be met to stop testing, like running out of budget or meeting coverage targets." },
    { questionId: 151, correctAnswer: 0, explanation: "Using PERT [(1 + 4*3 + 8)/6] = 3.5 hrs per case. 4 cases * 3.5 = 14 hours total." },
    { questionId: 152, correctAnswer: 1, explanation: "Based on additional coverage technique, TC2 provides the least new coverage relative to the others." },
    { questionId: 153, correctAnswer: 2, explanation: "Quadrants are excellent for communicating the 'what' and 'why' of testing to non-technical partners." },
    { questionId: 154, correctAnswer: 1, explanation: "Risk Level = Likelihood * Impact. $1,000 = 0.5 * Impact. Impact = $2,000." },
    { questionId: 155, correctAnswer: 1, explanation: "Product risks are direct threats to the quality of the software itself, like poor architecture." },
    { questionId: 156, correctAnswer: 2, explanation: "Steps to reproduce belong in a defect report, not in a summary test report." },
    { questionId: 157, correctAnswer: 3, explanation: "Configuration management allows for the precise recreation of specific environment and file states." },
    { questionId: 158, correctAnswer: 0, explanation: "Scope and context (which users/books) are the most critical pieces of info for quick reproduction." },
    { questionId: 159, correctAnswer: 1, explanation: "DevOps (deployment) and Non-functional (performance/load) tools directly involve executing the code." },
    { questionId: 160, correctAnswer: 3, explanation: "Automation's core strength is removing the 'human element' to ensure consistent, repeatable execution." }
  ]
};
