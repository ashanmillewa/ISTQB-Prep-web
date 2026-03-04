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
      explanation: "Exit criteria define when testing can stop; reaching target defect density and having regression tests automated are valid exit criteria. (Note: Multi-select not fully supported in current UI, but c is correct)."
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
  ]
};
