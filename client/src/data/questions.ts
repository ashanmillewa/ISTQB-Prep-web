export interface QuestionData {
  id: number;
  text: string;
  options: string[];
  category: string;
}

export const questionsData: Record<string, QuestionData[]> = {
  "paper-a": [
    {
      id: 1,
      text: "Which of the following statements describe a valid test objective?",
      options: [
        "To prove that there are no unfixed defects in the system under test",
        "To prove that there will be no failures after the implementation of the system into production",
        "To reduce the risk level of the test object and to build confidence in the quality level",
        "To verify that there are no untested combinations of inputs"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 2,
      text: "Which of the following options shows an example of test activities that contribute to success?",
      options: [
        "Having testers involved during various software development lifecycle (SDLC) activities will help to detect defects in work products",
        "Testers try not to disturb the developers while coding, so that the developers write better code",
        "Testers collaborating with end users help to improve the quality of defect reports during component integration and system testing",
        "Certified testers will design much better test cases than non-certified testers"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 3,
      text: "You have been assigned as a tester to a team producing a new system incrementally. You have noticed that no changes have been made to the existing regression test cases for several iterations and no new regression defects were identified. Your manager is happy, but you are not. Which testing principle explains your skepticism?",
      options: [
        "Tests wear out",
        "Absence-of-defects fallacy",
        "Defects cluster together",
        "Exhaustive testing is impossible"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 4,
      text: "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality. Which of the following activities is a part of test analysis?",
      options: [
        "Estimating that testing the integration with the payment service will take 8 person-days",
        "Deciding that the team should test if it is possible to properly share payment between many users",
        "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid",
        "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 5,
      text: "Which of the following factors have a SIGNIFICANT influence on the test approach?",
      options: [
        "i and ii",
        "i, ii and iii",
        "ii and iii",
        "i, iii and iv"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 6,
      text: "Which of the following statements BEST describes the relationship between testing and debugging?",
      options: [
        "Testing and debugging are the same activity",
        "Testing is the process of finding defects, while debugging is the process of analyzing and fixing them",
        "Debugging identifies failures, and testing fixes them",
        "Testing is only done after debugging is completed"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 7,
      text: "Which of the following is a reason why exhaustive testing is impossible?",
      options: [
        "Time and budget are unlimited",
        "All combinations of inputs and preconditions cannot be tested",
        "Developers fix defects before testing starts",
        "Testing tools cannot be used"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 8,
      text: "Which of the following is an example of a failure?",
      options: [
        "An incorrect variable declaration in the code",
        "A defect found during a code review",
        "The system crashes when a user saves a file",
        "An error made by a developer"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 9,
      text: "Which of the following BEST describes acceptance test-driven development (ATDD)?",
      options: [
        "Acceptance criteria are created using the given/when/then format",
        "Test cases are created at component level and are code-oriented",
        "Tests are created based on acceptance criteria to drive the development of the software",
        "Tests are based on desired behavior to improve understanding"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 10,
      text: "Which of the following is NOT an example of the shift-left approach?",
      options: [
        "Reviewing user requirements before acceptance",
        "Writing a component test before the corresponding code is written",
        "Executing a performance efficiency test for a component during component testing",
        "Writing a test script before setting up configuration management"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 11,
      text: "Which argument BEST supports organizing retrospectives at the end of each release cycle?",
      options: [
        "They are popular and clients like them",
        "They save money by avoiding user feedback",
        "They help identify process weaknesses for continuous improvement",
        "They promote values like courage and respect"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 12,
      text: "Which types of failures fit which test levels BEST?",
      options: [
        "1D, 2B, 3A, 4C",
        "1D, 2B, 3C, 4A",
        "1B, 2A, 3D, 4C",
        "1C, 2B, 3A, 4D"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 13,
      text: "Which statement about regression testing is CORRECT?",
      options: [
        "It confirms that defects have been fixed",
        "It checks that changes have not caused unintended side effects",
        "It is only performed after system testing",
        "It is unnecessary if no defects are found"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 14,
      text: "Which of the following BEST describes confirmation testing?",
      options: [
        "Testing to ensure defects are fixed",
        "Testing to find new defects",
        "Testing to measure system performance",
        "Testing without requirements"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 15,
      text: "Which of the following BEST describes the relationship between errors, defects, and failures?",
      options: [
        "Errors cause failures which result in defects",
        "Defects cause errors which result in failures",
        "Errors may lead to defects which may cause failures",
        "Failures cause defects which lead to errors"
      ],
      category: "Static Testing"
    },
    {
      id: 16,
      text: "Which of the following statements about static testing is CORRECT?",
      options: [
        "Static testing requires executing the code",
        "Static testing can find defects early in the lifecycle",
        "Static testing can only be performed by developers",
        "Static testing replaces dynamic testing"
      ],
      category: "Static Testing"
    },
    {
      id: 17,
      text: "Which of the following is MOST likely to be detected by static testing?",
      options: [
        "Performance bottlenecks",
        "Incorrect business logic during execution",
        "Missing requirements",
        "Runtime memory leaks"
      ],
      category: "Static Testing"
    },
    {
      id: 18,
      text: "Which of the following BEST describes the purpose of a walkthrough?",
      options: [
        "To find as many defects as possible",
        "To evaluate work products and educate participants",
        "To formally approve documents",
        "To replace inspections"
      ],
      category: "Static Testing"
    },
    {
      id: 19,
      text: "Which review role is responsible for ensuring that the review process is followed?",
      options: [
        "Author",
        "Moderator",
        "Reviewer",
        "Manager"
      ],
      category: "Static Testing"
    },
    {
      id: 20,
      text: "Which of the following is a benefit of early and frequent stakeholder feedback?",
      options: [
        "Reduced need for documentation",
        "Earlier detection of misunderstandings",
        "Elimination of regression testing",
        "Reduced need for skilled testers"
      ],
      category: "Static Testing"
    },
    {
      id: 21,
      text: "Which test level focuses on verifying the complete, integrated system against requirements?",
      options: [
        "Component testing",
        "Component integration testing",
        "System testing",
        "Acceptance testing"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 22,
      text: "Which of the following BEST describes acceptance testing?",
      options: [
        "Testing performed by developers",
        "Testing to verify system behavior against business needs",
        "Testing individual components",
        "Testing interfaces between components"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 23,
      text: "Which of the following is an example of functional testing?",
      options: [
        "Usability testing",
        "Performance testing",
        "Security testing",
        "Testing a calculation according to business rules"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 24,
      text: "Which of the following BEST describes non-functional testing?",
      options: [
        "Testing system behavior under normal conditions",
        "Testing features described in requirements",
        "Testing quality characteristics such as performance and usability",
        "Testing individual code units"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 25,
      text: "Which of the following is an example of black-box testing?",
      options: [
        "Statement coverage",
        "Decision coverage",
        "Equivalence partitioning",
        "Code inspection"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 26,
      text: "Which of the following BEST describes white-box testing?",
      options: [
        "Testing based on system requirements",
        "Testing based on internal structure of the code",
        "Testing without knowing implementation",
        "Testing performed by users"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 27,
      text: "Which of the following test techniques is MOST suitable for testing boundary values?",
      options: [
        "Equivalence partitioning",
        "Decision table testing",
        "Boundary value analysis",
        "State transition testing"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 28,
      text: "Which of the following is an example of exploratory testing?",
      options: [
        "Executing predefined test cases",
        "Simultaneous learning, test design, and execution",
        "Testing only after documentation is complete",
        "Automated regression testing"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 29,
      text: "Which of the following BEST describes test automation?",
      options: [
        "Replacing all manual testing",
        "Using tools to support test activities",
        "Testing without human involvement",
        "Only executing tests automatically"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 30,
      text: "Which TWO of the following options are the exit criteria for testing a system?",
      options: [
        "Test environment readiness",
        "The ability to log in to the test object by the tester",
        "Estimated defect density is reached",
        "Requirements are translated into given/when/then format",
        "Regression tests are automated"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 31,
      text: "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made: Most optimistic estimation: 2 person-hours; Most likely estimation: 11 person-hours; Most pessimistic estimation: 14 person-hours. What is the final estimate?",
      options: [
        "9 person-hours",
        "14 person-hours",
        "11 person-hours",
        "10 person-hours"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 32,
      text: "You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities, and dependencies. Which test case should be executed first?",
      options: [
        "TC 003",
        "TC 002",
        "TC 001",
        "TC 004"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 33,
      text: "Consider the following test categories (1-4) and agile testing quadrants (A-D). How do the following test categories map onto the agile testing quadrants?",
      options: [
        "1C, 2A, 3B, 4D",
        "1D, 2A, 3C, 4B",
        "1C, 2B, 3D, 4A",
        "1D, 2B, 3C, 4A"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 34,
      text: "During a risk analysis the following risk was identified and assessed. What measure is proposed to be taken in response to this analyzed risk?",
      options: [
        "Risk acceptance",
        "Contingency plan",
        "Risk mitigation",
        "Risk transfer"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 35,
      text: "Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?",
      options: [
        "Acceptance criteria",
        "Defect report",
        "Test completion report",
        "Burndown chart"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 36,
      text: "You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
      options: [
        "Traceability management",
        "Maintenance testing",
        "Configuration management",
        "Requirements engineering"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 37,
      text: "You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible. Which quality characteristic of a good defect report is MOST clearly missing?",
      options: [
        "Accuracy",
        "Completeness",
        "Reproducibility",
        "Objectivity"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 38,
      text: "Which test activity does a data preparation tool support?",
      options: [
        "Test monitoring and test control",
        "Test analysis",
        "Test design and test implementation",
        "Test completion"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 39,
      text: "Which item correctly identifies a potential risk of performing test automation?",
      options: [
        "It may introduce unknown regressions in production",
        "Sufficient efforts to maintain testware may not be properly allocated",
        "Testing tools and associated testware may not be sufficiently relied upon",
        "It may reduce the time allocated for manual testing"
      ],
      category: "Test Tools"
    },
    {
      id: 40,
      text: "Which of the following is an example of a potential benefit of performing test automation?",
      options: [
        "It always finds more defects than manual testing",
        "It reduces the need for regression testing",
        "It improves the consistency of test execution",
        "It eliminates the need for test analysis"
      ],
      category: "Test Tools"
    }
  ],
  "paper-b": [
    {
      id: 41,
      text: "Which of the following is an example of why testing is necessary?",
      options: [
        "Dynamic testing increases quality by causing test objects to fail in ways that could never be",
        "Static testing is used by developers to identify failures in their code earlier than can be",
        "Static analysis provides evidence to customers that the elements of the system that provide",
        "Reviews increase the quality of requirements specifications and lead to fewer changes"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 42,
      text: "Which of the following statements about quality assurance (QA) and/or quality control (QC) is correct?",
      options: [
        "QA is performed as part of testing",
        "Testing is performed as part of QC",
        "Testing is another term for QC",
        "Testing is performed as part of QA"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 43,
      text: "One of the 'principles of testing' states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?",
      options: [
        "Creating test cases that cover every possible specified output",
        "Documenting all possible test input variations and prioritizing these based on importance",
        "Starting testing as early as possible with reviews and other static testing approaches",
        "Using equivalence partitioning and boundary value analysis to generate test cases"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 44,
      text: "Which test activity involves working with test data requirements, test conditions, test environment requirements and test cases?",
      options: [
        "Test design",
        "Test execution",
        "Test analysis",
        "Test implementation"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 45,
      text: "Which of the following is MOST likely to impact how testing is performed for a given test object?",
      options: [
        "The average level of experience of the organization's marketing team",
        "The knowledge of users that a new system is being developed for them",
        "The number of years' experience of the members of the test team",
        "The end user's organizational structure for a commercial music streaming application"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 46,
      text: "Which of the following statements is a CORRECT example of the value of traceability?",
      options: [
        "Traceability between the mitigated risks and test cases that passed provides a means of",
        "Traceability between user requirements and test results provides a means of measuring",
        "Traceability between testers and test cases that failed provides a means of determining the",
        "Traceability between the identified risks and written test conditions provides a means of"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 47,
      text: "Which of the following is MOST likely to be an example of a tester using a generic skill when testing?",
      options: [
        "The tester's deep knowledge of a variety of computer games meant that they got on well",
        "The tester was a former pilot and was better able to understand the acceptance criteria for",
        "The tester previously worked as a programmer and used their skills in this area to better",
        "The tester was very careful not to make mistakes when they methodically generated test"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 48,
      text: "Which of the following is an advantage of the whole-team approach?",
      options: [
        "It allows team members to take on any role at any time",
        "It only needs a single team to support the complete development project",
        "It embeds business representatives alongside developers in the same team",
        "It generates a team synergy that benefits the entire project"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 49,
      text: "Which of the following statements about the chosen software development lifecycle is CORRECT?",
      options: [
        "If agile software development is used, automation of system tests replaces the need for",
        "If a sequential development model is used, then the dynamic testing is typically restricted to",
        "If an iterative development model is used, then component testing is typically performed",
        "If an incremental development model is used, then static testing is done in early increments"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 50,
      text: "Which of the following is a good testing practice that applies to all software development lifecycles?",
      options: [
        "Testers should review work products as part of the next development phase",
        "Testers should review work products as soon as drafts are available",
        "Testers should review work products before test analysis and test design begin",
        "Testers should review work products immediately after they are published"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 51,
      text: "Which of the following is an example of a test-first approach to development?",
      options: [
        "Test-Driven Development",
        "Coverage-Driven Development",
        "Quality-Driven Development",
        "Feature-Driven Development"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 52,
      text: "Which of the following statements about DevOps is CORRECT?",
      options: [
        "To speed up releases, continuous integration is used to encourage developers to submit",
        "To be able to update and release systems on a more frequent basis, many automated",
        "To treat both developers and operations equally, the testers will allocate more effort to",
        "To create increased synergy between testers, developers and operations, the testing must"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 53,
      text: "Which of the following is MOST likely to be performed as part of system testing?",
      options: [
        "Security testing of a credit management system by an independent test team",
        "Testing the interface of a currency exchange system with an external banking system",
        "Beta testing of a remote learning system by courseware developers",
        "Testing interactions between the user interface and database of a human resources system"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 54,
      text: "Which of the following statements is CORRECT?",
      options: [
        "Regression tests increase in number as the project progresses, whereas the number of",
        "Regression tests are created and run when the test object is fixed, whereas confirmation",
        "Regression testing is concerned with checking that the operational environment remains",
        "Regression testing is concerned with adverse effects in unchanged code, whereas"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 55,
      text: "Which of the following is an example of a defect that can be found by static testing but NOT by dynamic testing?",
      options: [
        "Lack of usability provided through the user interface",
        "Code with no path that reaches it",
        "Poor response times for most of the expected users",
        "Required features that are not implemented in the code"
      ],
      category: "Static Testing"
    },
    {
      id: 56,
      text: "Which of the following is a benefit of early and frequent stakeholder feedback?",
      options: [
        "Managers are aware of which developers are less productive",
        "It allows project managers to prioritize their stakeholder interactions",
        "It facilitates early communication of potential quality issues",
        "End users better understand why the delivery of the work product is delayed"
      ],
      category: "Static Testing"
    },
    {
      id: 57,
      text: "Given the following task descriptions:\n1. The quality characteristics to be evaluated and the exit criteria are selected\n2. Everyone has access to the work product\n3. Anomalies are identified in the work product\n4. Anomalies are discussed\nAnd the following review activities\nA. Individual review\nB. Review initiation\nC. Planning\nD. Communication and analysis\nWhich of the following BEST matches the task descriptions and activities?",
      options: [
        "1B, 2C, 3D, 4A",
        "1B, 2D, 3C, 4A",
        "1C, 2A, 3B, 4D",
        "1C, 2B, 3A, 4D"
      ],
      category: "Static Testing"
    },
    {
      id: 58,
      text: "Given the following roles in reviews:\n1. Scribe\n2. Review leader\n3. Facilitator\n4. Manager\nAnd the following responsibilities in reviews:\nA. Ensures the effective running of review meetings and the setting up a safe review environment\nB. Records review information, such as decisions and new anomalies found during the review meeting\nC. Decides what is to be reviewed and provides resources, such as staff and time for the review\nD. Takes overall responsibility for the review such as organizing when and where the review will take place\nWhich of the following BEST matches the roles and responsibilities?",
      options: [
        "1A, 2B, 3D, 4C",
        "1A, 2C, 3B, 4D",
        "1B, 2D, 3A, 4C",
        "1B, 2D, 3C, 4A"
      ],
      category: "Static Testing"
    },
    {
      id: 59,
      text: "Which of the following statements BEST describes the difference between decision table testing and branch testing?",
      options: [
        "In decision table testing, the test cases are derived from the decision statements in the",
        "In decision table testing, the test cases are derived from the specification that describes the",
        "In decision table testing, the test cases are derived from knowledge of the control flow of",
        "In decision table testing, the test cases are independent of how the software is"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 60,
      text: "Customers of the TestWash car wash chain have cards with a record of the number of washes they have bought so far. The initial value is 0. After entering the car wash, the system increases the number on the card by one. This value represents the number of the current wash. Based on this number the system decides what discount the customer is entitled to.\nFor every tenth wash the system gives a 10% discount, and for every twentieth wash, the system gives a further 40% discount (i.e., a 50% discount in total).\nWhich of the following sets of input data (understood as the numbers of the current wash) achieves the highest equivalence partition coverage?",
      options: [
        "19, 20, 30",
        "11, 12, 20",
        "1, 10, 50",
        "10, 29, 30, 31"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 61,
      text: "You are testing a form that verifies the correctness of the length of the password given as input.\nThe form accepts a password with the correct length and rejects a password that is too short or too long. The password length is correct if it has between 6 and 12 characters inclusive. Otherwise, it is considered incorrect.\nAt first, the form is empty (password length = 0). You apply boundary value analysis to the 'password length' variable.\nYour set of test cases achieves 100% 2-value boundary value coverage. The team decided that due to the high risk of this component, test cases should be added to ensure 100% 3-value boundary value coverage.\nWhich additional password lengths should be tested to achieve this?",
      options: [
        "4, 5, 13, 14",
        "7, 11",
        "1, 5, 13",
        "1, 4, 7, 11, 14"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 62,
      text: "The following decision table contains the rules for determining the risk of atherosclerosis.\nRule 1 Rule 2 Rule 3 Rule 4 Rule 5\nConditions\nCholesterol (mg/dl) \u2264 124, 125-200, \u2264 124, 125-200, \u2265 201\nBlood pressure (mm Hg) \u2264 140, > 140, \u2264 140, > 140, -\nAction\nRisk level very low, low, medium, high, very high\nYou designed the test cases with the following input data:\nTC1: Cholesterol = 125 mg/dl Blood pressure = 141 mm Hg\nTC2: Cholesterol = 200 mg/dl Blood pressure = 201 mm Hg\nTC3: Cholesterol = 124 mg/dl Blood pressure = 201 mm Hg\nTC4: Cholesterol = 109 mg/dl Blood pressure = 200 mg/dl\nTC5: Cholesterol = 201 mg/dl Blood pressure = 140 mm Hg\nWhat is the decision table coverage achieved by these test cases?",
      options: [
        "40%",
        "60%",
        "80%",
        "100%"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 63,
      text: "A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements.\nWhich of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?",
      options: [
        "Add, Remove, Add, Add, Add",
        "Add, Add, Add, Add, Remove, Remove",
        "Add, Add, Add, Remove, Remove",
        "Add, Add, Add, Remove, Add"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 64,
      text: "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage.\nWhich of the following sentences must be necessarily true?",
      options: [
        "The test suite composed of tests T1 and T2 achieves 105% statement coverage",
        "There exists at least one statement that must have been executed by both T1 and T2",
        "At least 5% of the statements in the code that was tested are non-executable",
        "The test suite composed of tests T1 and T2 achieves full branch coverage"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 65,
      text: "Let the branch coverage metric be defined as BCov = (X / Y) * 100%.\nWhat do X and Y represent in this formula?",
      options: [
        "X = number of decision outcomes exercised by the test cases",
        "X = number of conditional branches exercised by the test cases",
        "X = number of branches exercised by the test cases",
        "X = number of conditional branches exercised by the test cases"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 66,
      text: "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
      options: [
        "Testers have not been allocated enough time for test design and test execution",
        "The existing test strategy requires that testers use formal, black-box test techniques",
        "The specification is written in a formal language that can be processed by a tool",
        "Testers are the members of an agile team and have good programming skills"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 67,
      text: "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
      options: [
        "\"The developer made an error when implementing the code\"",
        "\"The achieved statement coverage exceeds 85%\"",
        "\"The program works correctly regarding functional and non-functional requirements\"",
        "\"The error messages are written in language that the user can understand\""
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 68,
      text: "Consider the following acceptance criteria for a user story written from the perspective of an online store owner.\nGiven that the user is logged in and on the homepage,\nWhen the user clicks on the \"Add Item\" button,\nThen the \"Create Item\" form should appear,\nAnd the user should be able to input a name and price for the new item.\nIn what format is this acceptance criteria written?",
      options: [
        "Rule-oriented",
        "Scenario-oriented",
        "Product-oriented",
        "Process-oriented"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 69,
      text: "Your team analyzes the following user story in order to define the acceptance criteria:\nAs a registered customer, I want to be able to view my previous orders on the company's website, so that I can keep track of my purchases.\nWhich of the following test cases will NOT be relevant for this user story?",
      options: [
        "Input: the customer logs into their account on the website and clicks the \"see order history\"",
        "Input: the customer clicks on an order from the order list",
        "Input: the customer clicks \"Sort ascending\" button on the order history screen",
        "Input: an unregistered customer registers as a new customer with a valid e-mail address"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 70,
      text: "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are:\n(1) Code development\n(2) Submit code into a version control system and merge it into the \"test\" branch\n(3) Perform component testing for the submitted code\nWhich of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
      options: [
        "Static analysis returns no high severity warnings for the submitted code",
        "System version control reports no conflicts when merging code into the \"test\" branch",
        "Component tests are compiled and ready to be executed",
        "Statement coverage is at least 80%"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 71,
      text: "You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data from four historical projects. The table shows development effort and test effort for P1 ($800k, $40k), P2 ($1.2m, $130k), P3 ($600k, $70k), P4 ($1m, $120k). The estimated development effort for the new project is $800,000. What is your estimate of the test effort?",
      options: [
        "$40,000",
        "$80,000",
        "$81,250",
        "$82,500"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 72,
      text: "You are testing a web application (TC1 SEARCH, TC2 SEARCH, TC3 VIEW, TC4 VIEW, TC5 ADD, TC6 ADD, TC7 ORDER). Logical dependencies: SEARCH before VIEW, VIEW before ADD, ADD before ORDER. Which test case should be executed as the fourth one?",
      options: [
        "TC3",
        "TC1",
        "TC7",
        "TC2"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 73,
      text: "According to the testing quadrants model, which of the following falls into quadrant Q1 (\"technology facing\" and \"support the team\")?",
      options: [
        "Usability testing",
        "Functional testing",
        "User acceptance testing",
        "Component integration testing"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 74,
      text: "Match Risks (1. Long response, 2. Consumer preference, 3. Server flooding, 4. Inaccurate reports) with Mitigation (A. Acceptance, B. Performance testing, C. BVA, D. Risk transfer). Which BEST matches?",
      options: [
        "1C, 2D, 3A, 4B",
        "1B, 2D, 3A, 4C",
        "1B, 2A, 3D, 4C",
        "1C, 2A, 3D, 4B"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 75,
      text: "Which of the following is a product quality metric?",
      options: [
        "Mean time to failure",
        "Number of defects found",
        "Requirements coverage",
        "Defect detection percentage"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 76,
      text: " LEAST effective way to communicate test progress to a customer located in Europe from North America in an agile DevOps project?",
      options: [
        "Face-to-face",
        "Dashboards",
        "Email",
        "Video conferencing"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 77,
      text: "Which of the following BEST describes an example of how configuration management (CM) supports testing?",
      options: [
        "Having the version number of the environment, the CM tool can retrieve the version",
        "Having a record of the values of the inputs, the CM tool can execute the test cases",
        "Having data about the date of purchase of a software license",
        "Having the version number of the test case, the CM tool can automatically generate test"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 78,
      text: "Failure description in a sort function test report (TC3, TC4, TC5 failed when sorting duplicate inputs). Which is the BEST description?",
      options: [
        "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.",
        "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5.",
        "The system fails to sort negative numbers. Reference: TC4, TC5.",
        "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected."
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 79,
      text: "Match Descriptions (1. Workflow tracking, 2. Communication, 3. VMs, 4. Reviews) with categories (A. Static, B. Scalability/Deployment, C. DevOps, D. Collaboration). Which is BEST?",
      options: [
        "1A, 2B, 3C, 4D",
        "1B, 2D, 3C, 4A",
        "1C, 2D, 3B, 4A",
        "1D, 2C, 3A, 4B"
      ],
      category: "Test Tools"
    },
    {
      id: 80,
      text: "Which of the following is MOST likely to be a benefit of test automation?",
      options: [
        "It provides coverage measures that are too complicated for humans to derive",
        "It shares responsibility for the testing with the tool vendor",
        "It reduces the time required for manual test execution",
        "It eliminates the need for any manual testing"
      ],
      category: "Test Tools"
    }
  ],
  "paper-c": [
    {
      id: 81,
      text: "Which of the following is a typical test objective?",
      options: [
        "Validating that documented requirements are met",
        "Causing failures and identifying defects",
        "Initiating errors and identifying root causes",
        "Verifying the test object meets user expectations"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 82,
      text: "Which of the following statements BEST describes the difference between testing and debugging?",
      options: [
        "Testing causes failures while debugging fixes failures",
        "Testing is a negative activity while debugging is a positive activity",
        "Testing determines that defects exist while debugging removes defects",
        "Testing finds the cause of defects while debugging fixes the cause of defects"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 83,
      text: "The 'absence-of-defects fallacy' is one of the principles of testing. Which of the following is an example of addressing this principle in practice?",
      options: [
        "Explaining that it is not possible for testing to show the absence of defects",
        "Supporting the end users to perform acceptance testing",
        "Ensuring that no implementation defects remain in the delivered system",
        "Modifying tests that cause no failures to ensure few defects remain"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 84,
      text: "Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?",
      options: [
        "Test implementation",
        "Test design",
        "Test execution",
        "Test monitoring"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 85,
      text: "Given the following testware (Coverage items, Change requests, Test execution schedule, Prioritized test conditions) and activities (A. Analysis, B. Design, C. Implementation, D. Completion). Which BEST matches?",
      options: [
        "1B, 2D, 3C, 4A",
        "1B, 2D, 3A, 4C",
        "1D, 2C, 3A, 4B",
        "1D, 2C, 3B, 4A"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 86,
      text: "Which of the following statements about the different testing roles is MOST likely to be CORRECT?",
      options: [
        "In Agile, the test management role is the primary responsibility of the developer",
        "The testing role is primarily responsible for monitoring and control",
        "In Agile, test management activities that span multiple teams are common",
        "The test management role is primarily responsible for analysis and design"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 87,
      text: "Which of the following is an advantage of the whole-team approach?",
      options: [
        "Teams with no testers",
        "Improved team dynamics",
        "Specialist team members",
        "Larger team sizes"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 88,
      text: "Which of the following statements about the independence of testing is CORRECT?",
      options: [
        "Independent testers will find defects due to their different technical perspective",
        "Developers only find a few defects in their own code",
        "Independent testing requires testers outside the team",
        "Testers from outside the team are more independent than those inside"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 89,
      text: "Which of the following is a good testing practice that applies to all software development lifecycles?",
      options: [
        "For each test level, there is a corresponding development level",
        "For each test objective, there is a corresponding development objective",
        "For every test activity, there is a corresponding user activity",
        "For every development activity, there is a corresponding test activity"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 90,
      text: "Which of the following is an example of a test-first approach to development?",
      options: [
        "Component Test-Driven Development",
        "Integration Test-Driven Development",
        "System Test-Driven Development",
        "Acceptance Test-Driven Development"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 91,
      text: "Which of the following provides the BEST description of shift-left?",
      options: [
        "When agreed by developers, manual activities on the left side move to the right",
        "Where cost-effective, test activities are moved earlier in the software development lifecycle",
        "Testers are required to automate tests for regression",
        "Testers are trained to perform tasks early in the SDLC"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 92,
      text: "Which of the following is LEAST likely to occur as a result of a retrospective?",
      options: [
        "Quality of future test objects improves",
        "Test efficiency improves through automated environment setup",
        "End users' understanding of the development and test processes is improved",
        "Automated test scripts are enhanced"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 93,
      text: "Which of the following test levels is MOST likely being performed if testing is focused on validation and not performed by testers?",
      options: [
        "Component testing",
        "Component integration testing",
        "System integration testing",
        "Acceptance testing"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 94,
      text: "Navigation system software updated due to illegal route suggestions. Which describes the testing performed?",
      options: [
        "Only confirmation testing",
        "Confirmation testing then regression testing",
        "Only regression testing",
        "Regression testing then confirmation testing"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 95,
      text: "Example defects: (i. Design disagree, ii. Response time too long, iii. Unreachable path, iv. Unused variable, v. High memory). Which could be found by static testing rather than dynamic?",
      options: [
        "ii, v",
        "iii, v",
        "i, ii, iv",
        "i, iii, iv"
      ],
      category: "Static Testing"
    },
    {
      id: 96,
      text: "Which of the following is a benefit of early and frequent stakeholder feedback?",
      options: [
        "Changes to requirements are understood and implemented earlier",
        "Ensures business stakeholders understand user requirements",
        "Allows product owners to change requirements as often as they want",
        "End users are told which requirements will not be implemented"
      ],
      category: "Static Testing"
    },
    {
      id: 97,
      text: "Match Review Types (1. Technical, 2. Informal, 3. Inspection, 4. Walkthrough) with Descriptions (A. Gain consensus, B. Educate, C. Detect potential defects with metrics, D. Detect potential defects with no formal output). Which BEST matches?",
      options: [
        "1A, 2B, 3C, 4D",
        "1A, 2D, 3C, 4B",
        "1B, 2C, 3D, 4A",
        "1C, 2D, 3A, 4B"
      ],
      category: "Static Testing"
    },
    {
      id: 98,
      text: "Which of the following is a factor that contributes to a successful review?",
      options: [
        "Ensure management participate as reviewers",
        "Split large work products into smaller parts",
        "Set reviewer evaluation as an objective",
        "Plan to cover one document per review"
      ],
      category: "Static Testing"
    },
    {
      id: 99,
      text: "MAIN difference between black-box test techniques and experience-based test techniques?",
      options: [
        "The test object",
        "The test level",
        "The test basis",
        "The software development lifecycle (SDLC)"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 100,
      text: "PIN validator testing (4 digits, not all same). Which set covers length correct/incorrect and digits correct/incorrect partitions?",
      options: [
        "12, 1111, 1234, 12345",
        "1, 123, 1111, 1234",
        "11, 12, 1111, 12345",
        "123, 1222, 12345"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 101,
      text: "Business rule: IF (value \u2264 100 OR value \u2265 200) THEN \"incorrect\" ELSE \"OK\". Sets of test inputs for greatest 2-value BVA coverage?",
      options: [
        "100, 150, 200, 201",
        "99, 100, 200, 201",
        "98, 99, 100, 101",
        "101, 150, 199, 200"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 102,
      text: "Driving test decision table (C1. First attempt, C2. Theoretical passed, C3. Practical passed). Which data shows contradictory rules?",
      options: [
        "C1 = T, C2 = T, C3 = F",
        "C1 = T, C2 = F, C3 = T",
        "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T",
        "C1 = F, C2 = F, C3 = F"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 103,
      text: "Minimum number of test cases required to achieve 100% valid transitions coverage based on the provided state transition diagram?",
      options: [
        "3",
        "2",
        "5",
        "6"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 104,
      text: "Applying branch testing to a control flow graph. How many coverage items do you need to test?",
      options: [
        "2",
        "4",
        "8",
        "7"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 105,
      text: "How can white-box testing be useful in support of black-box testing?",
      options: [
        "Evaluate black-box tests in terms of the internal code they exercise",
        "Identify unreachable fragments of the source code",
        "Branch testing subsumes black-box techniques",
        "White-box techniques provide coverage items for black-box"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 106,
      text: "List: Correct input not accepted, Incorrect input accepted, Wrong output format, Division by zero. What technique is MOST PROBABLY used?",
      options: [
        "Exploratory testing",
        "Fault attack",
        "Checklist-based testing",
        "Boundary value analysis"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 107,
      text: "Which BEST describes how checklist-based testing results in increased coverage?",
      options: [
        "Checklist items defined at a low level of detail",
        "Checklists can be automated",
        "Each checklist item tested separately",
        "Two testers with the same high-level checklist will likely cover different aspects"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 108,
      text: "Which provides the BEST example of a scenario-oriented acceptance criterion?",
      options: [
        "Application must allow users to delete their account",
        "When a customer adds an item and proceeds to checkout, they should be prompted",
        "IF (contain(product(23).Name, cart.products())) THEN return FALSE",
        "Website must comply with ICT Accessibility 508 Standards"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 109,
      text: "User Story: Regular/Special user accesses floors (AC1: Regular 1-3, AC2: Floor 4 Special only, AC3: Special has Regular rights). Which test case is MOST reasonable to test AC3?",
      options: [
        "Check that a Regular user can access floors 1 and 3",
        "Check that a Regular user cannot access floor 4",
        "Check that a Special user can access floor 5",
        "Check that a Special user can access floors 1, 2 and 3"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 110,
      text: "Which of the following is NOT a purpose of a test plan?",
      options: [
        "To define test data and expected results for component tests",
        "To define exit criteria from the component test level",
        "To describe what fields the test progress report shall contain",
        "To explain why system integration testing will be excluded"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 111,
      text: "Agile iteration effort estimation based on extrapolation model [3*A(n-1)+A(n-2)]. If iteration #3 actual was 11 and #4 was 13, what is #5 estimated work?",
      options: [
        "10.5 person-days",
        "8.25 person-days",
        "6.5 person-days",
        "9.4 person-days"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 112,
      text: "Test execution schedule for seven test cases TC1 to TC7 with priorities and dependencies. Which test case should be executed sixth?",
      options: [
        "TC 3",
        "TC 5",
        "TC 6",
        "TC 2"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 113,
      text: "What does the test pyramid model show?",
      options: [
        "That tests may have different priorities",
        "That tests may have different granularity",
        "That tests may require different coverage criteria",
        "That tests may depend on other tests"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 114,
      text: "Relationship between testing quadrants, test levels and test types?",
      options: [
        "Represent particular combinations of levels and types",
        "Describe granularity of individual test types",
        "Assign test types to test levels",
        "Group test levels and test types by criteria such as target audience"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 115,
      text: "Which is an example of how product risk analysis may influence the thoroughness and scope of testing?",
      options: [
        "Continuous risk monitoring identifies emerging risks",
        "Risk identification allows implementation of mitigation",
        "The assessed risk level helps us to select the rigor of testing",
        "Risk analysis allows us to derive coverage items"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 116,
      text: "Which activity in the test process makes the MOST use of test progress reports?",
      options: [
        "Test design",
        "Test completion",
        "Test analysis",
        "Test planning"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 117,
      text: "Which of the following is NOT an example of how configuration management supports testing?",
      options: [
        "All commits uniquely identified and version controlled",
        "All changes in test environment elements are tracked",
        "All requirement specifications referenced unambiguously",
        "All identified defects have an assigned status"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 118,
      text: "WebShop login button not working defect report. Steps: Launch, Click Login button. Missing information?",
      options: [
        "Name of the tester and date",
        "Test environment elements and their version numbers",
        "Identification of the test object",
        "Impact on the interests of stakeholders"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 119,
      text: "Tools helping with organization of test cases, defects and configuration management belong to which category?",
      options: [
        "Test execution and coverage tools",
        "Test design and implementation tools",
        "Defect management tools",
        "Test management tools"
      ],
      category: "Test Tools"
    },
    {
      id: 120,
      text: "Which of the following is MOST likely to be a benefit of test automation?",
      options: [
        "Generation of test cases without test basis",
        "Increased coverage through objective assessment",
        "Increase in test execution times available",
        "Prevention of human errors through greater consistency"
      ],
      category: "Test Tools"
    }
  ],
  "paper-d": [
    {
      id: 121,
      text: "Which of the following is a typical test objective?",
      options: [
        "Finding and fixing defects in the test object",
        "Maintaining effective communications with developers",
        "Validating that legal requirements have been met",
        "Building confidence in the quality of the test object"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 122,
      text: "Which of the following statements about the cause/effect relationship is CORRECT based on the scenario of a UI designer, programmer, and operational system complaints?",
      options: [
        "The miscalculation of bonuses is a defect that occasionally occurs",
        "The fine received for failing to address some disabled users is a failure",
        "The programmer working under severe time pressure is a root cause",
        "The design of the user interface includes a designer error"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 123,
      text: "Test cases are varied each time despite test conditions remaining the same. Which testing principle is being addressed?",
      options: [
        "Tests wear out",
        "Absence-of-defects fallacy",
        "Early testing saves time and money",
        "Defects cluster together"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 124,
      text: "Match tasks (1. Derive cases, 2. Identify testware, 3. Organize procedures, 4. Evaluate basis) with activities (A. Analysis, B. Design, C. Implementation, D. Completion). Which BEST matches?",
      options: [
        "1B, 2A, 3D, 4C",
        "1B, 2D, 3C, 4A",
        "1C, 2A, 3B, 4D",
        "1C, 2D, 3A, 4B"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 125,
      text: "Which of the following BEST shows the testware produced as a result of performing test implementation?",
      options: [
        "Data in database for inputs/results, and documented sequences of test cases",
        "List of elements for environment, and test cases",
        "Test completion report, data in database, and test cases",
        "Test completion report, list of environment elements, and documented sequences"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 126,
      text: "Which of the following is MOST likely to describe a task performed by someone in a test management role?",
      options: [
        "Evaluate the test basis and the test object",
        "Define test environment requirements",
        "Assess testability of the test object",
        "Create the test completion report"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 127,
      text: "Which of the following is an advantage of the whole team approach?",
      options: [
        "Improved communication between team members",
        "Decreased individual accountability for quality",
        "Faster deployment of deliverables to the end users",
        "Reduced collaboration with external business users"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 128,
      text: "Which are MOST likely to be considered benefits of the independence of testing?",
      options: [
        "Testers in different location and developers mostly accountable for quality",
        "Testers questioning assumptions and having different biases",
        "Testers in different location and establish confrontational dynamic",
        "Testers questioning assumptions and establishing confrontational dynamic"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 129,
      text: "Which of the following is a good testing practice that applies to all software development lifecycles?",
      options: [
        "Each test level has specific and distinct test objectives",
        "Test implementation and execution should start during the requirements phase",
        "Testers should start test design as soon as drafts of work products become available",
        "Every dynamic testing activity has a corresponding static testing activity"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 130,
      text: "Which of the following is an example of a test-first approach to development?",
      options: [
        "Behavior-Driven Development",
        "Test Level Driven Development",
        "Function-Driven Development",
        "Performance-Driven Development"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 131,
      text: "Which of the following is MOST likely to be a challenge encountered when implementing DevOps?",
      options: [
        "Making sure that non-functional quality characteristics are not overlooked",
        "Managing continuously changing test environments",
        "The need for more manual testers with suitable experience",
        "Setting up the test automation as part of the delivery pipeline"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 132,
      text: "Which of the following BEST describes retrospectives?",
      options: [
        "Identify team members who did not fully contribute",
        "Opportunity to identify successful activities for future use",
        "Allow team members to voice concerns about workload",
        "Forum where members focus on discussing the plan for the next sprint"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 133,
      text: "Which of the following tests is MOST likely to be performed as part of functional testing?",
      options: [
        "Check that sort function puts elements in ascending order",
        "Check whether sort function completes within one second",
        "Check how easily sort function can be changed",
        "Check that sort function works when moved to 64-bit OS"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 134,
      text: "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?",
      options: [
        "Developers reported that changing the system was difficult",
        "The refund option was removed due to incorrect repayments",
        "Agile team started a story adding customer loyalty points",
        "Language support option used to enable multiple languages"
      ],
      category: "Testing Throughout the S D L C"
    },
    {
      id: 135,
      text: "Which of the following CANNOT be examined by static testing?",
      options: [
        "Contract",
        "Test plan",
        "Encrypted code",
        "Test charter"
      ],
      category: "Static Testing"
    },
    {
      id: 136,
      text: "Which of the following statements about the value of static testing is CORRECT?",
      options: [
        "Defect types found are different from dynamic testing",
        "Dynamic testing detects all static testing defects plus some more",
        "Dynamic testing can identify some static testing defects but not all",
        "Static testing identifies all dynamic testing defects plus more"
      ],
      category: "Static Testing"
    },
    {
      id: 137,
      text: "Sequence in the review process of the activities (Anomalies deliberated, updates addressed, reviewers employ techniques, objective established, access provided)?",
      options: [
        "4 – 3 – 5 – 2 – 1",
        "4 – 5 – 3 – 1 – 2",
        "5 – 4 – 1 – 3 – 2",
        "5 – 4 – 3 – 2 – 1"
      ],
      category: "Static Testing"
    },
    {
      id: 138,
      text: "Which participant in the review process is responsible for ensuring meetings run effectively and everyone can voice opinions freely?",
      options: [
        "Manager",
        "Moderator",
        "Chairperson",
        "Review Leader"
      ],
      category: "Static Testing"
    },
    {
      id: 139,
      text: "Requirement: Cost > $100 gets 5% discount on subsequent purchases. Which technique will be MOST helpful?",
      options: [
        "White-box test techniques",
        "Black-box test techniques",
        "Experience-based test techniques",
        "Risk-based test techniques"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 140,
      text: "Cinema tickets discount (D = CY - BY). D < 0 error, 0-17 student, 18-64 no discount, 65+ pensioner. Suite has (1990, 2020: no discount) and (2030, 2029: error). Add which data for full valid EP coverage?",
      options: [
        "BY = 2001, CY = 2065",
        "BY = 1900, CY = 1965",
        "BY = 1965, CY = 1900",
        "BY = 2011, CY = 2029"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 141,
      text: "Temperature control: 0-2 inclusive is \"OK\". Lower is \"too low\", higher is \"too high\". Using 2-value BVA, highest level of coverage set?",
      options: [
        "–1, 3",
        "0, 2",
        "–1, 0, 2, 3",
        "–2, 0, 2, 4"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 142,
      text: "Decision table coverage: Which added test case will increase coverage from existing TC1-TC4 (19-year unregistered no exp, 65-year unregistered 5yr exp, 66-year registered no exp, 65-year registered 4yr exp)?",
      options: [
        "66-year-old, unregistered man with no experience; expected result: category B",
        "55-year-old, unregistered woman with 2 years of experience; expected result: category A",
        "19-year-old, registered woman with 5 years of experience; expected result: category D",
        "No additional test case can increase the coverage"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 143,
      text: "Hotel reservation state transition: sequence of events achieving highest valid transitions coverage?",
      options: [
        "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel",
        "Available, ChangeRoom, NotAvailable, Available, Pay",
        "Available, ChangeRoom, Available, ChangeRoom, NotAvailable",
        "NotAvailable, Cancel, ChangeRoom, Available, Pay"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 144,
      text: "Test suite S for program P achieves 100% statement coverage with three cases (each 50% coverage). Which is CORRECT?",
      options: [
        "Executing S will cause all possible failures in P",
        "S achieves 100% branch coverage for P",
        "Every executable statement containing a defect has been run at least once",
        "After removing one case from S, the remaining two still achieve 100% coverage"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 145,
      text: "Why does white-box testing facilitate defect detection even with vague specifications?",
      options: [
        "Cases are based on structure rather than requirements",
        "Coverage can be well-defined and easily measured",
        "Techniques are designed to detect omissions in requirements",
        "Techniques can be used in both static and dynamic testing"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 146,
      text: "Which of the following is NOT anticipated by the tester while applying error guessing?",
      options: [
        "Developer misunderstood interest calculation formula",
        "Developer wrote IR^N instead of (1+IR)^N",
        "Developer missed the seminar on new legislation",
        "Interest calculated by the system is not precise enough"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 147,
      text: "Which of the following is true about exploratory testing?",
      options: [
        "Test cases are designed before the session starts",
        "The tester can perform execution but not design",
        "Results are good predictors of remaining defects",
        "During exploratory testing the tester may use black-box test techniques"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 148,
      text: "Which collaborative user story writing practice enables team collective understanding?",
      options: [
        "Planning poker",
        "Reviews to detect inconsistencies",
        "Iteration planning",
        "Conversation to understand software usage"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 149,
      text: "User Story: Filter search results by price range (Precondition: Product A $100, B $110). BEST example of a test case?",
      options: [
        "Set filter to $90-$100. Expected: results show Product A",
        "Expected result: default prices are $100 and $110",
        "Set filter to $90-$115. Expected: results show Product A and B",
        "Enter webpage with three different browsers"
      ],
      category: "Test Analysis and Design"
    },
    {
      id: 150,
      text: "Which of the following BEST define EXIT criteria in a testing project?",
      options: [
        "Budget is approved",
        "Budget runs out and test cases achieved 80% statement coverage",
        "Test basis is available",
        "Test plan is documented"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 151,
      text: "Final estimate of time to execute four test cases using three-point estimation (Best: 1hr, Worst: 8hr, Most likely: 3hr)?",
      options: [
        "14 hours",
        "3.5 hours",
        "16 hours",
        "12 hours"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 152,
      text: "Traceability matrix prioritization. Which test case should be executed LAST based on additional coverage technique?",
      options: [
        "TC1",
        "TC2",
        "TC3",
        "TC4"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 153,
      text: "How can the testing quadrants be beneficial for testing?",
      options: [
        "Dividing test process into four phases",
        "Assessing high-level coverage based on phases",
        "Help non-technical stakeholders understand different test types",
        "Develop communication strategy based on personality"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 154,
      text: "Risk level is $1,000 and likelihood is 50%. What is the risk impact?",
      options: [
        "$500",
        "$2,000",
        "$50,000",
        "$200"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 155,
      text: "Which of the following are product risks?",
      options: [
        "Scope creep",
        "Poor architecture and failing to address non-functional requirements",
        "Cost-cutting",
        "Poor tool support"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 156,
      text: "Which of the following is NOT a valid purpose for a test report?",
      options: [
        "Tracking test progress and identifying areas for attention",
        "Providing info on executed tests and results",
        "Providing steps to reproduce each defect",
        "Providing info on testing planned for next period"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 157,
      text: "Support reassembles release files based on version number to allow fix. What enabled this?",
      options: [
        "Risk management",
        "Test monitoring and control",
        "Whole team approach",
        "Configuration management"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 158,
      text: "Book Lending System defect report missing reproduction help. MOST likely to help reproduction quickly?",
      options: [
        "Adding info about which users and books the failure affects",
        "Filling in Priority field",
        "Adding memory dumps and database snapshots",
        "Repeating test for different environments"
      ],
      category: "Managing the Test Activities"
    },
    {
      id: 159,
      text: "Tools from which categories are MOST likely to facilitate test execution?",
      options: [
        "Collaboration and Design tools",
        "DevOps and Non-functional testing tools",
        "Collaboration and Management tools",
        "DevOps and Management tools"
      ],
      category: "Test Tools"
    },
    {
      id: 160,
      text: "Which of the following is MOST likely to be a benefit of test automation?",
      options: [
        "Generation of test cases without test basis",
        "Objective assessment of coverage",
        "Increase in execution times",
        "Prevention of human errors through consistency"
      ],
      category: "Test Tools"
    }
  ]
};
