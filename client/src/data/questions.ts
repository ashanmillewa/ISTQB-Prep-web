export interface QuestionData {
  correctAnswers?: number[];
  id: number;
  text: string;
  options: string[];
  category: string;
  image?: string;
}
import paperCQ15 from "../assets/images/paper-c-q15.png";
import paperCQ17 from "../assets/images/paper-c-q17.png";
import paperCQ20 from "../assets/images/paper-c-q20.png";
import paperCQ21 from "../assets/images/paper-c-q21.png";
import paperCQ22 from "../assets/images/paper-c-q22.png";
import paperCQ23 from "../assets/images/paper-c-q23.png";
import paperCQ24 from "../assets/images/paper-c-q24.png";
import paperCQ29 from "../assets/images/paper-c-q29.png";
import paperCQ31 from "../assets/images/paper-c-q31.png";
import paperCQ32 from "../assets/images/paper-c-q32.png";
import paperCQ38 from "../assets/images/paper-c-q38.png";
import paperCQ5 from "../assets/images/paper-c-q5.png";

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
      category: "Fundamentals of Testing",
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
      category: "Fundamentals of Testing",
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
      category: "Fundamentals of Testing",
    },
    {
      id: 4,
      text: "You work in a team that develops a mobile application for food ordering. In the current iteration the team decided to implement the payment functionality.\n\nWhich of the following activities is a part of test analysis?",
      options: [
        "Estimating that testing the integration with the payment service will take 8 person-days",
        "Deciding that the team should test if it is possible to properly share payment between many users",
        "Using boundary value analysis (BVA) to derive the test data for the test cases that check the correct payment processing for the minimum allowed amount to be paid",
        "Analyzing the discrepancy between the actual result and expected result after executing a test case that checks the process of payment with a credit card, and reporting a defect"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 5,
      text: "Which of the following factors have a SIGNIFICANT influence on the test approach?\n\ni. The SDLC\nii. The number of defects detected in previous projects\niii. The identified product risks\niv. New regulatory requirements forcing formal white-box testing\nv. The test environment setup",
      options: [
        "i, ii have significant influence",
        "i, iii, iv have significant influence",
        "ii, iv, v have significant influence",
        "iii, v have significant influence"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 6,
      text: "Which TWO of the following tasks belong MAINLY to a testing role?",
      options: [
        "Configure test environments",
        "Maintain the product backlog",
        "Design solutions to new requirements",
        "Create the test plan",
        "Analyze the test basis"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 7,
      text: "Which of the following skills (i-v) are the MOST important skills of a tester?\n\ni. Having domain knowledge\nii. Creating a product vision\niii. Being a good team player\niv. Planning and organizing the work of the team\nv. Critical thinking",
      options: [
        "ii and iv are important",
        "i, iii and v are important",
        "i, ii and v are important",
        "iii and iv are important"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 8,
      text: "How is the whole team approach present in the interactions between testers and business representatives?",
      options: [
        "Business representatives decide on test automation approaches",
        "Testers help business representatives to define a test strategy",
        "Business representatives are not part of the whole team approach",
        "Testers help business representatives to create suitable acceptance tests"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 9,
      text: "Consider the following rule: “for every SDLC activity there is a corresponding test activity”. In which SDLC models does this rule hold?",
      options: [
        "Only in sequential development models",
        "Only in iterative development models",
        "Only in iterative and incremental development models",
        "In sequential, incremental, and iterative development models"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 10,
      text: "Which of the following statements BEST describes the acceptance test-driven development (ATDD) approach?",
      options: [
        "In ATDD, acceptance criteria are typically created based on the given/when/then format",
        "In ATDD, test cases are mainly created at component testing and are code-oriented",
        "In ATDD, tests are created, based on acceptance criteria to drive the development of the related software",
        "in ATDD, tests are based on the desired behavior of the software, which makes it easier for team members to understand them"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 11,
      text: "Which of the following is NOT an example of the shift-left approach?",
      options: [
        "Reviewing the user requirements before they are formally accepted by the stakeholders",
        "Writing a component test before the corresponding code is written",
        "Executing a performance efficiency test for a component during component testing",
        "Writing a test script before setting up the configuration management process"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 12,
      text: "Which of the arguments below would you use to convince your manager to organize retrospectives at the end of each release cycle?",
      options: [
        "Retrospectives are very popular these days and clients would appreciate it if we added them to our processes",
        "Organizing retrospectives will save the organization money because without them end user representatives do not provide immediate feedback about the product",
        "Process weaknesses identified during the retrospective can be analyzed and serve as a to do list for the organization’s continuous process improvement program",
        "Retrospectives embrace five values including courage and respect, which are crucial to maintain continuous improvement in the organization"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 13,
      text: "Which types of failures (1-4) fit which test levels (A-D) BEST?\n\n1. Failures in system behavior as it deviates from the user’s business needs\n2. Failures in communication between components\n3. Failures in logic in the code\n4. Failures in not correctly implemented business rules\n\nA. Component testing\nB. Component integration testing\nC. System testing\nD. Acceptance testing",
      options: [
        "1D, 2B, 3A, 4C",
        "1D, 2B, 3C, 4A",
        "1B, 2A, 3D, 4C",
        "1C, 2B, 3A, 4D"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 14,
      text: "You are testing a user story with three acceptance criteria: AC1, AC2 and AC3. AC1 is covered by test case TC1, AC2 by TC2, and AC3 by TC3. The test execution history had three test runs on three consecutive versions of the software as follows:|||Tests are repeated once you are informed that all defects found in the test run are corrected and a new version of the software is available.\n\nWhich of the above tests are executed as regression tests?",
      image: "/src/assets/images/paper-a-q14.png",
      options: [
        "Only 4, 7, 8, 9",
        "Only 5, 7",
        "Only 4, 6, 8, 9",
        "Only 5, 6"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 15,
      text: "Which of the following is NOT a benefit of static testing?",
      options: [
        "Having less expensive defect management due to the ease of detecting defects later in the SDLC",
        "Fixing defects found during static testing is generally much less expensive than fixing defects found during dynamic testing",
        "Finding coding defects that might not have been found by only performing dynamic testing",
        "Detecting gaps and inconsistencies in requirements"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 16,
      text: "Which of the following is a benefit of early and frequent feedback?",
      options: [
        "It improves the test process for future projects",
        "It forces customers to prioritize their requirements based on agreed risks",
        "It provides a measure for the quality of changes",
        "It helps avoid requirements misunderstandings"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 17,
      text: "The reviews being used in your organization have the following attributes:|||Which of the following review types is MOST likely being used?",
      image: "/src/assets/images/paper-a-q17.png",
      options: [
        "Informal review",
        "Walkthrough",
        "Technical review",
        "Inspection"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 18,
      text: "Which of these statements is NOT a factor that contributes to successful reviews?",
      options: [
        "Participants should dedicate adequate time for the review",
        "Splitting large work products into small parts to make the required effort less intense",
        "Participants should avoid behaviors that might indicate boredom, exasperation, or hostility to other participants",
        "Failures found should be acknowledged, appreciated, and handled objectively"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 19,
      text: "Which of the following is a characteristic of experience-based test techniques?",
      options: [
        "Test cases are created based on detailed design information",
        "Items tested within the interface code section are used to measure coverage",
        "The test techniques heavily rely on the tester’s knowledge of the software and the business domain",
        "The test cases are used to identify deviations from the requirements"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 20,
      text: "You are testing a simplified apartment search form which has only two search criteria:|||What is the minimal number of test cases to achieve 100% EP coverage for valid partitions?",
      image: "/src/assets/images/paper-a-q20.png",
      options: [
        "3",
        "4",
        "5",
        "6"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 21,
      text: "You are testing a system that calculates the final course grade for a given student.|||What is the 2-value boundary value analysis (BVA) coverage for the final result that is achieved with the existing test cases?",
      image: "/src/assets/images/paper-a-q21.png",
      options: [
        "50%",
        "60%",
        "33.3%",
        "100%"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 22,
      text: "Your favorite bicycle daily rental store has just introduced a new Customer Relationship Management system and asked you, one of their most loyal members, to test it.|||Based ONLY on the feature description of the Customer Relationship Management system, which of the above rules describes an impossible situation?",
      image: "/src/assets/images/paper-a-q22.png",
      options: [
        "R4",
        "R2",
        "R6",
        "R8"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 23,
      text: "You test a system whose lifecycle is modeled by the state transition diagram shown below. The system starts in the INIT state and ends its operation in the OFF state.|||What is the MINIMAL number of test cases to achieve valid transitions coverage?",
      image: "/src/assets/images/paper-a-q23.png",
      options: [
        "4",
        "2",
        "7",
        "3"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 24,
      text: "Your test suite achieved 100% statement coverage. What is the consequence of this fact?",
      options: [
        "Each instruction in the code that contains a defect has been executed at least once",
        "Any test suite containing more test cases than your test suite will also achieve 100% statement coverage",
        "Each path in the code has been executed at least once",
        "Every combination of input values has been tested at least once"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 25,
      text: "Which of the following is NOT true for white-box testing?",
      options: [
        "During white-box testing the entire software implementation is considered",
        "White-box coverage metrics can help identify additional tests to increase code coverage",
        "White-box test techniques can be used in static testing",
        "White-box testing can help identify gaps in requirements implementation"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 26,
      text: "Which of the following BEST describes the concept behind error guessing?",
      options: [
        "Error guessing involves using your knowledge and experience of defects found in the past and typical errors made by developers",
        "Error guessing involves using your personal experience of development and the errors you made as a developer",
        "Error guessing requires you to imagine that you are the user of the test object and to guess errors the user could make interacting with it",
        "Error guessing requires you to rapidly duplicate the development task to identify the sort of errors a developer might make"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 27,
      text: "In your project there has been a delay in the release of a brand-new application and test execution started late, but you have very detailed domain knowledge and good analytical skills. The full list of requirements has not yet been shared with the team, but management is asking for some test results to be presented.\n\nWhich test technique fits BEST in this situation?",
      options: [
        "Checklist-based testing",
        "Error guessing",
        "Exploratory testing",
        "Branch testing"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 28,
      text: "Which of the following BEST describes the way acceptance criteria can be documented?",
      options: [
        "Performing retrospectives to determine the actual needs of the stakeholders regarding a given user story",
        "Using the given/when/then format to describe an example test condition related to a given user story",
        "Using verbal communication to reduce the risk of misunderstanding the acceptance criteria by others",
        "Documenting risks related to a given user story in a test plan to facilitate the risk-based testing of a given user story"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 29,
      text: "Consider the following user story:|||Which of the following is the BEST example of an ATDD test for this user story?",
      image: "/src/assets/images/paper-a-q29.png",
      options: [
        "Test if the editor can save the document after edit the page content",
        "Test if the content owner can log in and make updates to the content",
        "Test if the editor can schedule the edited content for publication",
        "Test if the editor can reassign to another editor to make updates"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 30,
      text: "How do testers add value to iteration and release planning?",
      options: [
        "Testers determine the priority of the user stories to be developed",
        "Testers focus only on the functional aspects of the system to be tested",
        "Testers participate in the detailed risk identification and risk assessment of user stories",
        "Testers guarantee the release of high-quality software through early test design during the release planning"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 31,
      text: "Which TWO of the following options are the exit criteria for testing a system?",
      options: [
        "Test environment readiness",
        "The ability to log in to the test object by the tester",
        "Estimated defect density is reached",
        "Requirements are translated into given/when/then format",
        "Regression tests are automated"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 32,
      text: "Your team uses the three-point estimation technique to estimate the test effort for a new high-risk feature. The following estimates were made:|||What is the final estimate?",
      image: "/src/assets/images/paper-a-q32.png",
      options: [
        "9 person-hours",
        "14 person-hours",
        "11 person-hours",
        "10 person-hours"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 33,
      text: "You are testing a mobile application that allows users to find a nearby restaurant based on the type of food they want to eat. Consider the following list of test cases, priorities (i.e., a smaller number means a higher priority), and dependencies:|||Which of the following test cases should be executed as the third one?",
      image: "/src/assets/images/paper-a-q33.png",
      options: [
        "TC 003",
        "TC 005",
        "TC 002",
        "TC 001"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 34,
      text: "Consider the following test categories (1-4) and agile testing quadrants (A-D):|||How do the following test categories map onto the agile testing quadrants?",
      image: "/src/assets/images/paper-a-q34.png",
      options: [
        "1C, 2A, 3B, 4D",
        "1D, 2A, 3C, 4B",
        "1C, 2B, 3D, 4A",
        "1D, 2B, 3C, 4A"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 35,
      text: "During a risk analysis the following risk was identified and assessed:|||What measure is proposed to be taken in response to this analyzed risk?",
      image: "/src/assets/images/paper-a-q35.png",
      options: [
        "Risk acceptance",
        "Contingency plan",
        "Risk mitigation",
        "Risk transfer"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 36,
      text: "Which work product can be used by an agile team to show the amount of work that has been completed and the amount of total work remaining for a given iteration?",
      options: [
        "Acceptance criteria",
        "Defect report",
        "Test completion report",
        "Burndown chart"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 37,
      text: "You need to update one of the automated test scripts to be in line with a new requirement. Which process indicates that you create a new version of the test script in the test repository?",
      options: [
        "Traceability management",
        "Maintenance testing",
        "Configuration management",
        "Requirements engineering"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 38,
      text: "You received the following defect report from the developers stating that the anomaly described in this test report is not reproducible.|||What critical information is MISSING from this test report that would have been useful for the developers?",
      image: "/src/assets/images/paper-a-q38.png",
      options: [
        "Expected result and actual result",
        "References and defect status",
        "Test environment and test item",
        "Priority and severity"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 39,
      text: "Which test activity does a data preparation tool support?",
      options: [
        "Test monitoring and test control",
        "Test analysis",
        "Test design and test implementation",
        "Test completion"
      ],
      category: "Fundamentals of Testing",
    },
    {
      id: 40,
      text: "Which item correctly identifies a potential risk of performing test automation?",

      options: [
        "It may introduce unknown regressions in production",
        "Sufficient efforts to maintain testware may not be properly allocated",
        "Testing tools and associated testware may not be sufficiently relied upon",
        "It may reduce the time allocated for manual testing"
      ],
      category: "Test Tools"
    }
  ],
  "paper-b": [
    {
      id: 41,
      text: "Which of the following is an example of why testing is necessary?",
      options: [
        "Dynamic testing increases quality by causing test objects to fail in ways that could never be achieved by the users",
        "Static testing is used by developers to identify failures in their code earlier than can be achieved through dynamic testing",
        "Static analysis provides evidence to customers that the elements of the system that provide no outputs are fit for release",
        "Reviews increase the quality of requirements specifications and lead to fewer changes being needed in derived work products"
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
      text: "One of the ‘principles of testing’ states that exhaustive testing is impossible. Which of the following is an example of addressing this principle in practice?",
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
        "Traceability between the mitigated risks and test cases that passed provides a means of determining the level of residual risk",
        "Traceability between user requirements and test results provides a means of measuring project progress against business goals",
        "Traceability between testers and test cases that failed provides a means of determining the skill level of the testers",
        "Traceability between the identified risks and written test conditions provides a means of determining which risks are worth testing"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 47,
      text: "Which of the following is MOST likely to be an example of a tester using a generic skill when testing?",
      options: [
        "The tester’s deep knowledge of a variety of computer games meant that they got on well with one of the developers who was also into gaming",
        "The tester was a former pilot and was better able to understand the acceptance criteria for the helicopter control system",
        "The tester previously worked as a programmer and used their skills in this area to better communicate with the business analysts",
        "The tester was very careful not to make mistakes when they methodically generated test cases prior to starting their exploratory testing session"
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
        "If agile software development is used, automation of system tests replaces the need for regression testing",
        "If a sequential development model is used, then the dynamic testing is typically restricted to later in the lifecycle",
        "If an iterative development model is used, then component testing is typically performed manually by developers",
        "If an incremental development model is used, then static testing is done in early increments and dynamic testing in later increments"
      ],
      category: "Fundamentals of Testing"
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
      category: "Fundamentals of Testing"
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
      category: "Fundamentals of Testing"
    },
    {
      id: 52,
      text: "Which of the following statements about DevOps is CORRECT?",
      options: [
        "To speed up releases, continuous integration is used to encourage developers to submit code quickly without the need to complete component testing",
        "To be able to update and release systems on a more frequent basis, many automated regression tests are required to reduce the risk of regression",
        "To treat both developers and operations equally, the testers will allocate more effort to release testing by operations using a shift-right approach",
        "To create increased synergy between testers, developers and operations, the testing must become fully automated with no manual testing"
      ],
      category: "Fundamentals of Testing"
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
      category: "Fundamentals of Testing"
    },
    {
      id: 54,
      text: "Which of the following statements is CORRECT?",
      options: [
        "Regression tests increase in number as the project progresses, whereas the number of confirmation tests decreases as the project progresses",
        "Regression tests are created and run when the test object is fixed, whereas confirmation tests are run whenever the test object is enhanced",
        "Regression testing is concerned with checking that the operational environment remains unchanged, whereas confirmation testing is concerned with testing changes to the test object",
        "Regression testing is concerned with adverse effects in unchanged code, whereas confirmation testing is concerned with testing changed code"
      ],
      category: "Fundamentals of Testing"
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
      category: "Fundamentals of Testing"
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
      category: "Fundamentals of Testing"
    },
    {
      id: 57,
      text: "Given the following task descriptions:|||Which of the following BEST matches the task descriptions and activities?",
      image: "/src/assets/images/paper-b-q17.png",
      options: [
        "1B, 2C, 3D, 4A",
        "1B, 2D, 3C, 4A",
        "1C, 2A, 3B, 4D",
        "1C, 2B, 3A, 4D"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 58,
      text: "Given the following roles in reviews:|||Which of the following BEST matches the roles and responsibilities?",
      image: "/src/assets/images/paper-b-q18.png",
      options: [
        "1A, 2B, 3D, 4C",
        "1A, 2C, 3B, 4D",
        "1B, 2D, 3A, 4C",
        "1B, 2D, 3C, 4A"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 59,
      text: "Which of the following statements BEST describes the difference between decision table testing and branch testing?",
      options: [
        "In decision table testing, the test cases are derived from the decision statements in the code. In branch testing, the test cases are derived from knowledge of the control flow of the test object.",
        "In decision table testing, the test cases are derived from the specification that describes the business logic. In branch testing the test cases are based on anticipation of potential defects in the source code.",
        "In decision table testing, the test cases are derived from knowledge of the control flow of the test object. In branch testing, test cases are derived from the specification that describes the business logic.",
        "In decision table testing, the test cases are independent of how the software is implemented. In branch testing, test cases can be created only after the design or implementation of the code."
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 60,
      text: "",
      image: "/src/assets/images/paper-b-q20.png",
      options: [
        "19, 20, 30",
        "11, 12, 20",
        "1, 10, 50",
        "10, 29, 30, 31"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 61,
      text: "",
      image: "/src/assets/images/paper-b-q21.png",
      options: [
        "4, 5, 13, 14",
        "7, 11",
        "1, 5, 13",
        "1, 4, 7, 11, 14"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 62,
      text: "The following decision table contains the rules for determining the risk of atherosclerosis.|||What is the decision table coverage achieved by these test cases?",
      image: "/src/assets/images/paper-b-q22.png",
      options: [
        "40%",
        "60%",
        "80%",
        "100%"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 63,
      text: "A storage system can store up to three elements and is modeled by the following state transition diagram. The variable N represents the number of currently stored elements.|||Which of the following test cases, represented as sequences of events, achieves the highest level of valid transitions coverage?",
      image: "/src/assets/images/paper-b-q23.png",
      options: [
        "Add, Remove, Add, Add, Add",
        "Add, Add, Add, Add, Remove, Remove",
        "Add, Add, Add, Remove, Remove",
        "Add, Add, Add, Remove, Add"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 64,
      text: "You run two test cases, T1 and T2, on the same code. Test T1 achieved 40% statement coverage and test T2 achieved 65% statement coverage.\n\nWhich of the following sentences must be necessarily true?",
      options: [
        "The test suite composed of tests T1 and T2 achieves 105% statement coverage",
        "There exists at least one statement that must have been executed by both T1 and T2",
        "At least 5% of the statements in the code that was tested are non-executable",
        "The test suite composed of tests T1 and T2 achieves full branch coverage"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 65,
      text: "Let the branch coverage metric be defined as BCov = (X / Y) * 100%. What do X and Y represent in this formula?",
      options: [
        "X = number of decision outcomes exercised by the test cases Y = total number of decision outcomes in the code",
        "X = number of conditional branches exercised by the test cases Y = total number of branches in the code",
        "X = number of branches exercised by the test cases Y = total number of branches in the code",
        "X = number of conditional branches exercised by the test cases Y = total number of decision outcomes in the code"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 66,
      text: "Which TWO of the following statements provide the BEST rationale for using exploratory testing?",
      options: [
        "Testers have not been allocated enough time for test design and test execution",
        "The existing test strategy requires that testers use formal, black-box test techniques",
        "The specification is written in a formal language that can be processed by a tool",
        "Testers are the members of an agile team and have good programming skills",
        "Testers are experienced in the business domain and have good analytical skills"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 67,
      text: "Which of the following BEST fits as an element of the checklist used in checklist-based testing?",
      options: [
        "“The developer made an error when implementing the code”",
        "“The achieved statement coverage exceeds 85%”",
        "“The program works correctly regarding functional and non-functional requirements”",
        "“The error messages are written in language that the user can understand”"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 68,
      text: "Consider the following acceptance criteria for a user story written from the perspective of an online store owner.|||In what format is this acceptance criteria written?",
      image: "/src/assets/images/paper-b-q28.png",
      options: [
        "Rule-oriented",
        "Scenario-oriented",
        "Product-oriented",
        "Process-oriented"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 69,
      text: "Your team analyzes the following user story in order to define the acceptance criteria:|||Which of the following test cases will NOT be relevant for this user story?",
      image: "/src/assets/images/paper-b-q29.png",
      options: [
        "Input: the customer logs into their account on the website and clicks the “see order history” button Expected result: the system shows a list of all the customer’s previous orders, including the date, order number, and total cost",
        "Input: the customer clicks on an order from the order list Expected result: the system displays the individual items purchased, along with their prices and quantities",
        "Input: the customer clicks “Sort ascending” button on the order history screen Expected result: the system shows the order history sorted by order number in ascending order",
        "Input: an unregistered customer registers as a new customer with a valid e-mail address that does not already exist in the customer database Expected result: the system accepts the registration and creates the account"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 70,
      text: "Your team follows the process that uses the DevOps delivery pipeline. The first three steps of this process are:|||Which of the following is BEST suited to be the entry criterion for step (2) of this pipeline?",
      image: "/src/assets/images/paper-b-q30.png",
      options: [
        "Static analysis returns no high severity warnings for the submitted code",
        "System version control reports no conflicts when merging code into the “test” branch",
        "Component tests are compiled and ready to be executed",
        "Statement coverage is at least 80%"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 71,
      text: "You want to estimate the test effort for the new project using estimation based on ratios. You calculate the test-to-development effort ratio using averaged data for both development effort and test effort from four historical projects similar to the new one. The table shows this historical data.|||The estimated development effort for the new project is $800,000. What is your estimate of the test effort in this project?",
      image: "/src/assets/images/paper-b-q31.png",
      options: [
        "$40,000",
        "$80,000",
        "$81,250",
        "$82,500"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 72,
      text: "You are testing a web application that allows users to SEARCH for products, VIEW product details, ADD products to a shopping cart, and place an ORDER.|||Which test case should be executed as the fourth one?",
      image: "/src/assets/images/paper-b-q32.png",
      options: [
        "TC3",
        "TC1",
        "TC7",
        "TC2"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 73,
      text: "According to the testing quadrants model, which of the following falls into quadrant Q1 (“technology facing” and “support the team”)?",
      options: [
        "Usability testing",
        "Functional testing",
        "User acceptance testing",
        "Component integration testing"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 74,
      text: "|||Which of the following BEST matches the risks with the mitigation activities?",
      image: "/src/assets/images/paper-b-q34.png",
      options: [
        "1C, 2D, 3A, 4B",
        "1B, 2D, 3A, 4C",
        "1B, 2A, 3D, 4C",
        "1C, 2A, 3D, 4B"
      ],
      category: "Fundamentals of Testing"
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
      category: "Fundamentals of Testing"
    },
    {
      id: 76,
      text: "You are a member of a test team located in North America, developing a product for a client located in Europe. The team is agile and follows the DevOps approach and uses a continuous integration/continuous delivery pipeline.\n\nWhich of the following is the LEAST effective way to communicate test progress to the customer?",
      options: [
        "Face-to-face",
        "Dashboards",
        "Email",
        "Video conferencing"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 77,
      text: "Which of the following BEST describes an example of how configuration management (CM) supports testing?",
      options: [
        "Having the version number of the environment, the CM tool can retrieve the version numbers of libraries, stubs and drivers used in that environment",
        "Having a record of the values of the inputs, the CM tool can execute the test cases for these configurations and calculate the coverage",
        "Having data about the date of purchase of a software license, the CM tool automatically generates information about the fact that the product license is coming to an end",
        "Having the version number of the test case, the CM tool can automatically generate test data for this test case"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 78,
      text: "You are testing a sort function that gets a set of numbers as input and returns the same set of numbers sorted in ascending order. The log from the test execution looks as follows.|||Which of the following provides the BEST description of the failure that can be used in a defect report?",
      image: "/src/assets/images/paper-b-q38.png",
      options: [
        "The system fails to sort several sets of numbers. Reference: TC3, TC4, TC5.",
        "The system seems to disregard duplicates while sorting. Reference: TC3, TC4, TC5.",
        "The system fails to sort negative numbers. Reference: TC4, TC5.",
        "TC3, TC4 and TC5 have defects (duplicate input data) and should be corrected."
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 79,
      text: "",
      image: "/src/assets/images/paper-b-q39.png",
      options: [
        "1A, 2B, 3C, 4D",
        "1B, 2D, 3C, 4A",
        "1C, 2D, 3B, 4A",
        "1D, 2C, 3A, 4B"
      ],
      category: "Fundamentals of Testing"
    },
    {
      id: 80,
      text: "Which of the following is MOST likely to be a benefit of test automation?",
      options: [
        "It provides coverage measures that are too complicated for humans to derive",
        "It shares responsibility for the testing with the tool vendor",
        "It removes the need for critical thinking when analyzing test results",
        "It generates test cases from an analysis of the program code"
      ],
      category: "Fundamentals of Testing"
    },
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
      category: "Fundamentals of Testing",
      correctAnswers: [1]
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
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 83,
      text: "The ‘absence-of-defects fallacy’ is one of the principles of testing. Which of the following is an example of addressing this principle in practice?",
      options: [
        "Explaining that it is not possible for testing to show the absence of defects",
        "Supporting the end users to perform acceptance testing",
        "Ensuring that no implementation defects remain in the delivered system",
        "Modifying tests that cause no failures to ensure few defects remain"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 84,
      text: "Which of the following test activities are MOST likely to involve the application of boundary value analysis and equivalence partitioning?",
      options: [
        "Test implementation",
        "Test design",
        "Test execution",
        "Test monitoring",
        "Test analysis"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1, 4]
    },
    {
      id: 85,
      text: "Given the following testware:\n\n\t1. Coverage items\n\t2. Change requests\n\t3. Test execution schedule\n\t4. Prioritized test conditions\n\nAnd the following test activities\n\n\tA. Test analysis\n\tB. Test design\n\tC. Test implementation\n\tD. Test completion\n\nWhich of the following BEST shows the testware produced by the activities?",
      options: [
        "1B, 2D, 3C, 4A",
        "1B, 2D, 3A, 4C",
        "1D, 2C, 3A, 4B",
        "1D, 2C, 3B, 4A"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 86,
      text: "Which of the following statements about the different testing roles is MOST likely to be\nCORRECT?",
      options: [
        "In Agile software development, the test management role is the primary responsibility of the team, while the testing role is primarily the responsibility of a single individual from outside the team",
        "The testing role is primarily responsible for test monitoring and test control, while the test management role is primarily responsible for test planning and test completion",
        "In Agile software development, test management activities that span multiple teams are handled by a test manager outside the team, while some test management tasks are handled by the team itself",
        "The test management role is primarily responsible for test analysis and test design, while the testing role is primarily responsible for test implementation and test execution"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
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
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 88,
      text: "Which of the following statements about the independence of testing is CORRECT?",
      options: [
        "Independent testers will find defects due to their different technical perspective from developers, but their independence may lead to an adversarial relationship with the developers",
        "Developers’ familiarity with their own code means they only find a few defects in it, however their shared software background with testers means these defects would also be found by the testers",
        "Independent testing requires testers who are outside the developer’s team and ideally from outside the organization, however these testers find it difficult to understand the application domain",
        "Testers from outside the developer’s team are more independent than testers from within the team, but the testers from within the team are more likely to be blamed for delays in product release"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
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
      category: "Fundamentals of Testing",
      correctAnswers: [3]
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
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 91,
      text: "Which of the following provides the BEST description of shift-left?",
      options: [
        "When agreed by the developers, manual activities on the left-hand side of the test process are automated to support the principle of ‘early testing saves time and money’",
        "Where cost-effective, test activities are moved earlier in the software development lifecycle (SDLC) to reduce the total cost of quality by reducing the number of defects found later in the SDLC",
        "When they have spare time available, testers are required to automate tests for regression testing, starting with component tests and component integration tests",
        "When available, testers are trained to perform tasks early in the SDLC to allow more test activities to be automated later in the SDLC"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 92,
      text: "Which of the following is LEAST likely to occur as a result of a retrospective?",
      options: [
        "The quality of future test objects improves by identifying improvements in development practices",
        "Test efficiency improves by speeding up the configuration of test environments through automation",
        "End users’ understanding of the development and test processes is improved",
        "Automated test scripts are enhanced through feedback from developers"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 93,
      text: "Which of the following test levels is MOST likely being performed if the testing is focused on validation and is not being performed by testers?",
      options: [
        "Component testing",
        "Component integration testing",
        "System integration testing",
        "Acceptance testing"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 94,
      text: "The navigation system software has been updated due to it suggesting routes that break traffic laws, such as driving the wrong way down one-way streets. Which of the following BEST describes the testing that will be performed?",
      options: [
        "Only confirmation testing",
        "Confirmation testing then regression testing",
        "Only regression testing",
        "Regression testing then confirmation testing"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 95,
      text: "Given the following example defects:|||Which of the following BEST identifies example defects that could be found by static testing (rather than dynamic testing)?",
      image: paperCQ15,
      options: [
        "ii, v",
        "iii, v",
        "i, ii, iv",
        "i, iii, iv"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 96,
      text: "Which of the following is a benefit of early and frequent stakeholder feedback?",
      options: [
        "Changes to requirements are understood and implemented earlier",
        "It ensures business stakeholders understand user requirements",
        "It allows product owners to change their requirements as often as they want",
        "End users are told which requirements will not be implemented prior to release"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 97,
      text: "Given the following review types:|||Which of the following BEST matches the review types and the descriptions?",
      image: paperCQ17,
      options: [
        "1A, 2B, 3C, 4D",
        "1A, 2D, 3C, 4B",
        "1B, 2C, 3D, 4A",
        "1C, 2D, 3A, 4B"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
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
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 99,
      text: "What is the MAIN difference between black-box test techniques and experience-based test techniques?",
      options: [
        "The test object",
        "The test level at which the test technique is used",
        "The test basis",
        "The software development lifecycle (SDLC) in which the test technique can be used"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 100,
      text: "|||Which of the following is the BEST set of input test data to cover the identified equivalence partitions?",
      image: paperCQ20,
      options: [
        "12, 1111, 1234, 12345",
        "1, 123, 1111, 1234",
        "11, 12, 1111, 12345",
        "123, 1222, 12345"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 101,
      text: "A developer was asked to implement the following business rule:|||You design the test cases using 2-value boundary value analysis.\nWhich of the following sets of test inputs achieves the greatest coverage?",
      image: paperCQ21,
      options: [
        "100, 150, 200, 201",
        "99, 100, 200, 201",
        "98, 99, 100, 101",
        "101, 150, 199, 200 March 25, 2025"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 102,
      text: "You are working on a project to develop a system to analyze driving test results. You have been asked to design test cases based on the following decision table.|||What test data will show that there are contradictory rules in the decision table?",
      image: paperCQ22,
      options: [
        "C1 = T, C2 = T, C3 = F",
        "C1 = T, C2 = F, C3 = T",
        "C1 = T, C2 = T, C3 = T and C1 = F, C2 = T, C3 = T",
        "C1 = F, C2 = F, C3 = F"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 103,
      text: "You are designing test cases based on the following state transition diagram:|||What is the MINIMUM number of test cases required to achieve 100% valid transitions coverage?",
      image: paperCQ23,
      options: [
        "3",
        "2",
        "5",
        "6"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 104,
      text: "You want to apply branch testing to the code represented by the following control flow graph.|||How many coverage items do you need to test?",
      image: paperCQ24,
      options: [
        "2",
        "4",
        "8",
        "7"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 105,
      text: "How can white-box testing be useful in support of black-box testing?",
      options: [
        "White-box coverage measures can help testers evaluate black-box tests in terms of the code coverage achieved by these black-box tests",
        "White-box coverage analysis can help testers identify unreachable fragments of the source code",
        "Branch testing subsumes black-box test techniques, so achieving full branch coverage guarantees achieving full coverage of any black-box technique",
        "White-box test techniques can provide coverage items for black-box techniques March 25, 2025"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 106,
      text: "Consider the following list:\n\n\t• Correct input not accepted\n\t• Incorrect input accepted\n\t• Wrong output format\n\t• Division by zero\n\nWhat test technique is MOST PROBABLY used by the tester who uses this list when performing testing?",
      options: [
        "Exploratory testing",
        "Fault attack",
        "Checklist-based testing",
        "Boundary value analysis"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 107,
      text: "Which of the following BEST describes how using checklist-based testing can result in increased coverage?",
      options: [
        "Checklist items can be defined at a sufficiently low level of detail, so the tester can implement and execute detailed test cases based on these items",
        "Checklists can be automated, so each time an automated test execution covers the checklist items, it results in additional coverage",
        "Each checklist item should be tested separately and independently, so the elements cover different areas of the software",
        "Two testers designing and executing tests based on the same high-level checklist items will typically perform the testing in slightly different ways"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 108,
      text: "Which of the following provides the BEST example of a scenario-oriented acceptance criterion?",
      options: [
        "The application must allow users to delete their account and all associated data upon request",
        "When a customer adds an item to their cart and proceeds to checkout, they should be prompted to log in or create an account if they haven’t already done so",
        "IF (contain(product(23).Name, cart.products())) THEN return FALSE",
        "The website must comply with the ICT Accessibility 508 Standards and ensure that all content is accessible to users with disabilities March 25, 2025"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 109,
      text: "You are using acceptance test-driven development and designing test cases based on the following user story:|||Which test case is the MOST reasonable one to test AC3?",
      image: paperCQ29,
      options: [
        "Check that a Regular user can access floors 1 and 3",
        "Check that a Regular user cannot access floor 4",
        "Check that a Special user can access floor 5",
        "Check that a Special user can access floors 1, 2 and 3"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 110,
      text: "Which of the following is NOT a purpose of a test plan?",
      options: [
        "To define test data and expected results for component tests and component integration tests",
        "To define as exit criteria from the component test level that “100% statement coverage and 100% branch coverage must be achieved”",
        "To describe what fields the test progress report shall contain and what should be the form of this report",
        "To explain why system integration testing will be excluded from testing, although the test strategy requires this test level March 25, 2025"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 111,
      text: "|||What is the estimated amount of work for iteration #5?",
      image: paperCQ31,
      options: [
        "10.5 person-days",
        "8.25 person-days",
        "6.5 person-days",
        "9.4 person-days"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 112,
      text: "You are preparing a test execution schedule for executing seven test cases TC 1 to TC 7.|||Which test case should be executed sixth?",
      image: paperCQ32,
      options: [
        "TC 3",
        "TC 5",
        "TC 6",
        "TC 2"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
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
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 114,
      text: "What is the relationship between the testing quadrants, test levels and test types?",
      options: [
        "Testing quadrants represent particular combinations of test levels and test types, defining their location in the software development lifecycle",
        "Testing quadrants describe the degree of granularity of individual test types performed at each test level",
        "Testing quadrants assign the test types that can be performed to the test levels",
        "Testing quadrants group test levels and test types by several criteria such as targeting specific stakeholders March 25, 2025"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 115,
      text: "Which of the following is an example of how product risk analysis may influence the thoroughness and scope of testing?",
      options: [
        "Continuous risk monitoring allows us to identify an emerging risk as soon as possible",
        "Risk identification allows us to implement risk mitigation activities and reduce the risk level",
        "The assessed risk level helps us to select the rigor of testing",
        "Risk analysis allows us to derive coverage items"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 116,
      text: "Which of the following activities in the test process makes the MOST use of test progress reports?",
      options: [
        "Test design",
        "Test completion",
        "Test analysis",
        "Test planning"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 117,
      text: "Which of the following is NOT an example of how configuration management supports testing?",
      options: [
        "All commits to the repository are uniquely identified and version controlled",
        "All changes in the test environment elements are tracked",
        "All requirement specifications are referenced unambiguously in test plans",
        "All identified defects have an assigned status"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 118,
      text: "Consider the following defect report for a web-based shopping application:|||What is the MOST important information that is missing from this defect report?",
      image: paperCQ38,
      options: [
        "Name of the tester and date",
        "Test environment elements and their version numbers",
        "Identification of the test object",
        "Impact on the interests of stakeholders"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 119,
      text: "Tools from which of the following categories help with the organization of test cases, detected defects and configuration management?",
      options: [
        "Test execution and coverage tools",
        "Test design and implementation tools",
        "Defect management tools",
        "Test management tools"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 120,
      text: "Which of the following is MOST likely to be a benefit of test automation?",
      options: [
        "The capability of generating test cases without access to the test basis",
        "The achievement of increased coverage through more objective assessment",
        "The increase in test execution times available with higher processing power",
        "The prevention of human errors through greater consistency and repeatability"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
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
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 122,
      text: "A designer documents a design for a user interface that does not suitably address disabled users because the designer is tired. The programmer implements the user interface in line with the design but as they are working under severe time pressure, they do not include suitable exception handling in their program code for bonus calculations. When the operational system is used, complaints are made by some disabled users about the interface and the company is subsequently fined by the relevant regulatory authority. No one notices that bonus calculations are sometimes incorrect.\n\nWhich of the following statements is CORRECT?",
      options: [
        "The miscalculation of bonuses is a defect that occasionally occurs",
        "The fine received for failing to address some disabled users is a failure",
        "The programmer working under severe time pressure is a root cause",
        "The design of the user interface includes a designer error"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 123,
      text: "Test conditions are being used by testers to generate test cases and execute tests. Even though the test conditions remain the same, the test cases are varied each time. Which of the following ‘principles of testing’ is being addressed through the variation of test cases?",
      options: [
        "Tests wear out",
        "Absence-of-defects fallacy",
        "Early testing saves time and money",
        "Defects cluster together"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 124,
      text: "Given the following test tasks:\n1. Derive test cases from test conditions\n2. Identify reusable testware\n3. Organize test cases into test procedures\n4. Evaluate the test basis and the test object\n\nAnd the following test activities:\nA. Test analysis\nB. Test design\nC. Test implementation\nD. Test completion\n\nWhich of the following BEST matches the tasks with the activities?",
      options: [
        "1B, 2A, 3D, 4C",
        "1B, 2D, 3C, 4A",
        "1C, 2A, 3B, 4D",
        "1C, 2D, 3A, 4B"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 125,
      text: "Given the following testware:\ni.   Test completion report\nii.   Data held in a database used for test inputs and expected results\niii.   The list of elements needed to build the test environment\niv.    Documented sequences of test cases in execution order\nv.    Test cases\n\nWhich of the following BEST shows the testware produced as a result of performing test\nimplementation?",
      options: [
        "ii, iv",
        "iii, v",
        "i, ii, v",
        "i, iii, iv"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 126,
      text: "Which of the following is MOST likely to describe a task performed by someone in a test\nmanagement role?",
      options: [
        "Evaluate the test basis and the test object",
        "Define test environment requirements",
        "Assess testability of the test object",
        "Create the test completion report"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
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
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 128,
      text: "Given the following benefits and drawbacks of the independence of testing: ||| Which are MOST likely to be considered benefits?",
      options: [
        "i, iv",
        "ii, v",
        "i, iii, iv",
        "ii, iii, v"
      ],
      category: "Fundamentals of Testing",
      image: "/src/assets/images/paper-d-q8.png",
      correctAnswers: [1]
    },
    {
      id: 129,
      text: "Which of the following is a good testing practice that applies to all software development lifecycles?",
      options: [
        "Each test level has specific and distinct test objectives",
        "Test implementation and execution for a given test level should start during the corresponding development phase",
        "Testers should start test design as soon as drafts of the relevant work products become available",
        "Every dynamic testing activity has a corresponding static testing activity"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
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
      category: "Fundamentals of Testing",
      correctAnswers: [0]
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
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 132,
      text: "Which of the following BEST describes retrospectives?",
      options: [
        "Retrospectives allow team members to identify other team members who did not fully contribute to achieving quality as required by the whole team approach",
        "Retrospectives give testers an opportunity to identify activities that were successful so that these are retained when potential improvements are made in the future",
        "Retrospectives are where agile team members are allowed to voice their concerns about management and customers in a blameless environment",
        "Retrospectives give agile team members a forum where they focus on discussing the plan and technical decisions for the next iteration"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 133,
      text: "Which of the following tests is MOST likely to be performed as part of functional testing?",
      options: [
        "The test checks that the sort function puts the elements of the list or array in ascending order",
        "The test checks whether the sort function completes sorting within one second of starting",
        "The test checks how easily the sort function can be changed from sorting ascending to sorting descending",
        "The test checks that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 134,
      text: "Which of the following is MOST likely to be a trigger that leads to maintenance testing of a currency exchange system?",
      options: [
        "The developers reported that changing the currency exchange system was difficult and the testers decided to check if this was true",
        "The refund option of the currency exchange system was removed as it did not always repay the correct amount to customers",
        "The agile team has started developing a user story that adds a new customer loyalty feature to the currency exchange system",
        "The language support option of the currency exchange system was used to enable both English and local language currency transactions"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
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
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 136,
      text: "Which of the following statements about the value of static testing is CORRECT?",
      options: [
        "The defect types found by static testing are different from the defect types that can be found by dynamic testing",
        "Dynamic testing can detect the defect types that can be found by static testing plus some additional defect types",
        "Dynamic testing can identify some of the defects that can be found by static testing but not all of them",
        "Static testing can identify the defect types that can be found by dynamic testing as well as some extra defect types"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 137,
      text: "Given the following descriptions of review activities: ||| Which of the following is the CORRECT sequence in the review process of the activities that correspond to the descriptions?",
      options: [
        "4–3–5–2–1",
        "4–5–3–1–2",
        "5–4–1–3–2",
        "5–4–3–2–1"
      ],
      category: "Fundamentals of Testing",
      image: "/src/assets/images/paper-d-q17.png",
      correctAnswers: [1]
    },
    {
      id: 138,
      text: "Which participant in the review process is responsible for ensuring that the review meetings run effectively and that everyone at the meetings can voice their opinions freely?",
      options: [
        "Manager",
        "Moderator",
        "Chairperson",
        "Review Leader"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 139,
      text: "You perform system testing of an e-commerce web application and are provided with the following requirement:\n\nREQ 05-017. If the total cost of purchases exceeds $100, the customer gets a 5% discount on subsequent purchases. Otherwise, the customer does not receive a discount.\n\nWhich test techniques will be MOST helpful in designing test cases based on this requirement?",
      options: [
        "White-box test techniques",
        "Black-box test techniques",
        "Experience-based test techniques",
        "Risk-based test techniques"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 140,
      text: "The system for selling cinema tickets calculates the discount type based on the client's birth year (BY) and on the current year (CY) as follows: ||| Which of the following test data sets should be added to achieve full valid equivalence partitioning coverage for the discount type?",
      options: [
        "BY = 2001, CY = 2065",
        "BY = 1900, CY = 1965",
        "BY = 1965, CY = 1900",
        "BY = 2011, CY = 2029",
        "BY = 2000, CY = 2000"
      ],
      category: "Fundamentals of Testing",
      image: "/src/assets/images/paper-d-q20.png",
      correctAnswers: [1, 4]
    },
    {
      id: 141,
      text: "You are testing a temperature control system for a horticultural cold storage facility. The system receives the temperature (in full degrees Celsius) as the input. If the temperature is between 0 and 2 degrees inclusive, the system displays the message \"temperature OK\". For lower temperatures, the system displays the message \"temperature too low\" and for higher temperatures it displays the message \"temperature too high\".\n\nUsing two-value boundary value analysis, which of the following sets of test inputs provides the highest level of boundary value coverage?",
      options: [
        "–1, 3",
        "0, 2",
        "–1, 0, 2, 3",
        "–2, 0, 2, 4"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 142,
      text: "You are designing test cases based on the following decision table. ||| Which of the following test cases, when added to the existing set of test cases, will increase the decision table coverage?",
      options: [
        "66-year-old, unregistered man with no experience; expected result: category B",
        "55-year-old, unregistered woman with 2 years of experience; expected result: category A",
        "19-year-old, registered woman with 5 years of experience; expected result: category D",
        "No additional test case can increase the already achieved decision table coverage"
      ],
      category: "Fundamentals of Testing",
      image: "/src/assets/images/paper-d-q22.png",
      correctAnswers: [0]
    },
    {
      id: 143,
      text: "You are applying state transition testing to the hotel room reservation system modeled by the following state transition table, with 4 states and 5 different events: ||| Assuming all test cases start in the 'Requesting' state, which of the following test cases, represented as sequences of events, achieves the highest valid transitions coverage?",
      options: [
        "NotAvailable, Available, ChangeRoom, NotAvailable, Cancel",
        "Available, ChangeRoom, NotAvailable, Available, Pay",
        "Available, ChangeRoom, Available, ChangeRoom, NotAvailable",
        "NotAvailable, Cancel, ChangeRoom, Available, Pay"
      ],
      category: "Fundamentals of Testing",
      image: "/src/assets/images/paper-d-q23.png",
      correctAnswers: [1]
    },
    {
      id: 144,
      text: "Your test suite S for a program P achieves 100% statement coverage. It consists of three test cases, each of which achieves 50% statement coverage.\n\nWhich of the following statements is CORRECT?",
      options: [
        "Executing S will cause all possible failures in P",
        "S achieves 100% branch coverage for P",
        "Every executable statement in P containing a defect has been run at least once during the execution of S",
        "After removing one test case from S, the remaining two test cases will still achieve 100% statement coverage"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 145,
      text: "Why does white-box testing facilitate defect detection even when the software specification is vague, outdated or incomplete?",
      options: [
        "Test cases are designed based on the structure of the test object rather than the specification",
        "For each white-box test technique the coverage can be well-defined and easily measured",
        "White-box test techniques are very well designed to detect omissions in the requirements",
        "White-box test techniques can be used in both static testing and dynamic testing"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 146,
      text: "Which of the following is NOT anticipated by the tester while applying error guessing?",
      options: [
        "The developer misunderstood the formula in the user story for calculating the interest",
        "The developer wrote “FA = A*(1+IR^N)” instead of “FA = A*(1+IR)^N” in the source code",
        "The developer missed the seminar on new compound interest rate legislation",
        "The accuracy of the interest calculated by the system is not precise enough"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 147,
      text: "Which of the following is true about exploratory testing?",
      options: [
        "Test cases are designed before the exploratory testing session starts",
        "The tester can perform test execution, but cannot perform test design",
        "Exploratory testing results are good predictors of the number of remaining defects",
        "During exploratory testing the tester may use black-box test techniques"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 148,
      text: "Which collaborative user story writing practice enables the team to achieve a collective\nunderstanding of what needs to be delivered?",
      options: [
        "Planning poker, so that a team can achieve consensus on the effort needed to implement a user story",
        "Reviews, so that a team can detect inconsistencies and contradictions in a user story",
        "Iteration planning, so that user stories with the highest business value for a customer can be prioritized for implementation",
        "Conversation, so that team members can understand how the software will be used"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 149,
      text: "You have just started designing test cases for the following user story. ||| In all test cases the precondition is as follows: there are only two products available, products A and B. Product A costs $100 and product B costs $110.\n\nWhich of the following is the BEST example of a test case for this user story?",
      options: [
        "Enter webpage and set filter to show prices between $90 and $100. Expected result: results show product A only. Set maximum price to $110. Expected result: results now include both products A and B",
        "Enter webpage. Expected result: the default minimum and maximum prices are $100 and $110 respectively. Add product C to stock, with price $120. Refresh the client’s webpage. Expected result: the default maximum price changes to $120",
        "Enter webpage and set filter to show prices between $90 and $115. Expected result: results show both products A and B. Change currency from USD to EUR. Expected result: the filter range changes correctly to EUR values, according to the current exchange rate",
        "Enter webpage with three different browsers: Edge, Chrome and Opera. In each browser set filter between $90 and $110. Expected result: results include both products A and B and the results layout is the same in all three browsers"
      ],
      category: "Fundamentals of Testing",
      image: "/src/assets/images/paper-d-q29.png",
      correctAnswers: [0]
    },
    {
      id: 150,
      text: "Which of the following BEST define EXIT criteria in a testing project?",
      options: [
        "Budget is approved",
        "Budget runs out",
        "Test basis is available",
        "Test cases achieved at least 80% statement coverage",
        "All test analysts are ISTQB certified at the Foundation Level"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1, 3]
    },
    {
      id: 151,
      text: "The team wants to estimate the time needed for one tester to execute four test cases for a software component. The team has gathered the following measures of the effort used to execute a single test case:\n\u2022 Best-case scenario:       1 hour\n\u2022 Worst-case scenario:      8 hours\n\u2022 Most likely scenario:     3 hours\n\nGiven that the three-point estimation technique is being used, what is the final estimate of the time needed to execute all four test cases?",
      options: [
        "14 hours",
        "3.5 hours",
        "16 hours",
        "12 hours"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 152,
      text: "The table shows the traceability matrix from test cases to requirements. “X” means that a given test\ncase covers the corresponding requirement.\n\nReq1          Req2              Req3   Req4    Req5    Req6     Req7\nTC1             X                             X      X                        X\nTC2             X                                             X               X\nTC3                                                           X          X\nTC4                            X\nYou want to prioritize the test cases following the additional coverage prioritization technique.\n\nYou execute all four test cases.\n\nWhich test case should be executed as the LAST one?",
      options: [
        "TC1",
        "TC2",
        "TC3",
        "TC4"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 153,
      text: "How can the testing quadrants be beneficial for testing?",
      options: [
        "They help in test planning by dividing the test process into four phases, corresponding to the four basic test levels: component, integration, system, and acceptance testing",
        "They help in assessing the high-level coverage (e.g., requirements coverage) based on low-level coverage (e.g., code coverage)",
        "They help non-technical stakeholders to understand the different test types and that some test types are more relevant to certain test levels than others",
        "They help agile teams to develop a communication strategy based on classifying people according to four basic psychological types, and on modelling the relations between them Select ONE options."
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 154,
      text: "For a given risk, its risk level is $1,000 and its risk likelihood is estimated as 50%.\n\nWhat is the risk impact?",
      options: [
        "$500",
        "$2,000",
        "$50,000",
        "$200 Select ONE options."
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 155,
      text: "Which of the following are product risks?",
      options: [
        "Scope creep",
        "Poor architecture",
        "Cost-cutting",
        "Poor tool support",
        "Too long response time"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1, 4]
    },
    {
      id: 156,
      text: "Which of the following is NOT a valid purpose for a test report?",
      options: [
        "Tracking test progress and identifying areas that require further attention",
        "Providing information on the tests executed, their results, and defects found",
        "Providing information about each defect, such as the steps to reproduce it",
        "Providing information on testing planned for the next period Select ONE options."
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
    {
      id: 157,
      text: "The user reported a software failure. An engineer from the support team asked the user for the software version number where the failure was observed. Based on the version number, the team reassembled all the files that made up the release. This later allowed a developer to perform analysis, find the defect, and fix it.\n\nWhich of the following enabled the above activity to be performed by the team?",
      options: [
        "Risk management",
        "Test monitoring and control",
        "Whole team approach",
        "Configuration management"
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [3]
    },
    {
      id: 158,
      text: "Consider the following defect report for a Book Lending System.\n\nDefect ID: 001 | Title: Unable to Return a Book                     |\nSeverity: High | Priority:                                          |\nEnvironment: Windows 10, Google Chrome\n\nDescription: When attempting to return a book using the Book Return feature, the system does\nnot register the return and the book remains checked out to the user.\n\nSteps to Reproduce:\nLogin to the Book Lending System as a user who has checked out a book.\nClick on the \"Book Return\" button for the book that has been checked out.\nSystem does not register the return and the book remains checked out.\n\nExpected Result: The book should be returned and no longer appear as checked out to the user.\nActual Result: The book remains checked out to the user and is not registered as returned in the\nsystem.\n\nAttachments: [empty list]\n\nWhich of the following is MOST likely to help the developer reproduce the failure quickly?",
      options: [
        "Adding information about which users and which books the failure affects to the “Description” section",
        "Filling in the missing value for the “Priority” field",
        "Adding memory dumps and database snapshots taken after each step described in the “Steps to Reproduce” section to the “Attachments” section.",
        "Repeating the same test case for different environments and writing defect reports for each of them separately Select ONE options."
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [0]
    },
    {
      id: 159,
      text: "Given the following test tool categories:\ni.   Collaboration tools\nii.   DevOps tools\niii.   Management tools\niv.    Non-functional testing tools\nv.    Test design and implementation tools\nTools from which of the categories are MOST likely to facilitate test execution?",
      options: [
        "i, v",
        "ii, iv",
        "i, iii, v",
        "ii, iii, iv Select ONE options."
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [1]
    },
    {
      id: 160,
      text: "Which of the following is MOST likely to be a risk of test automation?",
      options: [
        "The detection of additional high-severity defects",
        "Providing measures that are too complicated for humans to derive",
        "Incompatibility with the development platform",
        "Substantially reduced test execution times Select ONE options."
      ],
      category: "Fundamentals of Testing",
      correctAnswers: [2]
    },
  ]
};
