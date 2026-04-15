export interface AnswerData {
  questionId: number;
  correctAnswer?: number;
  correctAnswers?: number[];
  explanation: string;
}

export const answersData: Record<string, AnswerData[]> = {
  "paper-a": [
    {
      questionId: 1,
      correctAnswers: [2],
      explanation: "a) Is not correct. It is impossible to prove that there are no defects FL-1.1.1 K1 1 anymore in the system under test. See testing principle 1 b) Is not correct. See testing principle 7 c) Is correct. Testing finds defects and failures which reduces the level of risk and at the same time gives more confidence in the quality level of the test object d) Is not correct. It is impossible to test all combinations of inputs (see testing principle 2)"
    },
    {
      questionId: 2,
      correctAnswers: [0],
      explanation: "a) Is correct. It is important that testers are involved from the beginning of FL-1.2.1 K2 1 the software development lifecycle (SDLC). It will increase understanding of design decisions and will detect defects early. b) Is not correct. Both developers and testers will have more understanding of each other's work products and how to test the code c) Is not correct. End users will not help the testers in increasing the quality of defect reports; also, users usually do not participate in low-level testing levels like integration testing d) Is not correct. Being certified does not automatically mean that the tester will be better in test design Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 3,
      correctAnswers: [0],
      explanation: "a) Is correct. This principle means that if the same tests are repeated over FL-1.3.1 K2 1 and over again, eventually these tests no longer find any new defects. This is probably why the tests all passed in this release as well b) Is not correct. This principle says about the mistaken belief that just finding and fixing a large number of defects will ensure the success of a system c) Is not correct. This principle says that a small number of components usually contain most of the defects d) Is not correct. This principle states that testing all combinations of inputs and preconditions is not feasible"
    },
    {
      questionId: 4,
      correctAnswers: [1],
      explanation: "a) Is not correct. Estimating the test effort is part of test planning FL-1.4.1 K2 1 b) Is correct. This is an example of defining test conditions which is a part of test analysis c) Is not correct. Using test techniques to derive coverage items is a part of test design d) Is not correct. Reporting defects found during dynamic testing is a part of test execution Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 5,
      correctAnswers: [1],
      explanation: "ii. Is false. The number of defects detected in previous projects may have some influence, but this is not as significant as i, iii and iv iii. Is true. The identified product risks are one of the most important factors influencing the test approach iv. Is true. Regulatory requirements are important factors influencing the test approach v. Is false. The test environment has no significant influence on the test approach Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 6,
      correctAnswers: [0, 4],
      explanation: "a) Is correct. This is done by the testers FL-1.4.5 K2 1 b) Is not correct. The product backlog is built and maintained by the product owner c) Is not correct. This is done by the development team d) Is not correct. This is a managerial role e) Is correct. This is done by the testers since its technical task done as part of a test analysis. Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 7,
      correctAnswers: [1],
      explanation: "ii. Is false. This is a task of the business analyst together with the business representative iii. Is true. Being a good team player is an important skill iv. Is false. Planning and organizing the work of the team is a task of the test manager or, mostly in an Agile software development project, the whole team and not just the tester v. Is true. Critical thinking is one of the most important skills of testers Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 8,
      correctAnswers: [3],
      explanation: "a) Is not correct. The test automation approach is defined by testers with FL-1.5.2 K1 1 the help of developers and business representatives b) Is not correct. The test strategy is decided in collaboration with the developers c) Is not correct. Testers, developers, and business representatives are part of the whole team approach d) Is correct. Testers will work closely with business representatives to ensure that the desired quality levels are achieved. This includes supporting and collaborating with them to help them create suitable acceptance tests"
    },
    {
      questionId: 9,
      correctAnswers: [3],
      explanation: "a) Is not correct FL-2.1.2 K1 1 b) Is not correct c) Is not correct d) Is correct. This rule holds for all SDLC models Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 10,
      correctAnswers: [2],
      explanation: "a) Is not correct. It is more often used in behavior-driven development FL-2.1.3 K1 1 (BDD) b) Is not correct. It is the description of test-driven development (TDD) c) Is correct. In acceptance test-driven development (ATDD) tests are written from acceptance criteria as part of the design process d) Is not correct. It is used in BDD"
    },
    {
      questionId: 11,
      correctAnswers: [3],
      explanation: "a) Is not correct. Early review is an example of the shift-left approach FL-2.1.5 K2 1 b) Is not correct. TDD is an example of the shift-left approach c) Is not correct. Early non-functional testing is an example of the shift-left approach d) Is correct. Test scripts should be subject to configuration management, so it makes no sense to create the test scripts before this process is set up"
    },
    {
      questionId: 12,
      correctAnswers: [2],
      explanation: "a) Is not correct. Retrospectives are more useful for identifying FL-2.1.6 K2 1 improvement opportunities and have little importance for clients b) Is not correct. Retrospectives are not aimed to collect feedback about the product, but about the process. Additionally, retrospectives are internal activity for the team and should not include end user representatives c) Is correct. Regularly conducted retrospectives, when appropriate follow up activities occur, are critical to continual improvement of development and testing d) Is not correct. Courage and respect are values of Extreme Programming and are not closely related to retrospectives Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 13,
      correctAnswers: [0],
      explanation: "• The test basis for acceptance testing is the user’s business needs (1D) • Communication between components is tested during component integration testing (2B) • Failures in logic can be found during component testing (3A) • Business rules are the test basis for system testing (4C) Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 14,
      correctAnswers: [1],
      explanation: "(4) and test (6) are confirmation tests. Because TC2 and TC3 failed in Execution 2 (i.e., tests (5) and (6)), test (8) and test (9) are also confirmation tests. TC2 passed in Execution 1 (i.e., test (2)), so test (5) is a regression test. TC1 passed in the Execution 2 (i.e., test (4)), so test (7) is also a regression test. Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 15,
      correctAnswers: [0],
      explanation: "a) Is correct. Defect management is no less expensive. Finding and fixing FL-3.1.2 K2 1 defects later in the SDLC is more costly b) Is not correct. This is a benefit of static testing c) Is not correct. This is a benefit of static testing d) Is not correct. This is a benefit of static testing"
    },
    {
      questionId: 16,
      correctAnswers: [3],
      explanation: "a) Is not correct. Feedback can improve the test process, but if one only FL-3.2.1 K1 1 wants to improve future projects, the feedback does not need to come early or frequently b) Is not correct. Feedback is not used to prioritize requirements c) Is not correct. There is no one, recommended way to measure quality of changes. Also, this is not one of the benefits of early feedback that are mentioned in section 3.2.1 d) Is correct. Early and frequent feedback can prevent misunderstandings about requirements Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 17,
      correctAnswers: [1],
      explanation: "• Specified for walkthroughs, technical reviews, and inspections; thus, the reviews being performed cannot be informal reviews • The purpose of evaluating quality is one of the most important objectives of a walkthrough • This is not allowed for inspections and is typically not done in technical reviews. A moderator is needed in walkthroughs and is allowed for informal reviews • All types of reviews can include individual preparation (even informal reviews) • All types of reviews can produce a review report, although informal reviews do not require documentation Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 18,
      correctAnswers: [3],
      explanation: "a) Is not correct. Adequate time for individuals is a success factor FL-3.2.5 K1 1 b) Is not correct. Splitting work products into small adequate parts is a success factor c) Is not correct. Avoiding behaviors that might indicate boredom, exasperation, etc. is a success factor d) Is correct. During reviews one can find defects, not failures Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 19,
      correctAnswers: [2],
      explanation: "a) Is not correct. This is a common characteristic of white-box test FL-4.1.1 K2 1 techniques. Test conditions, test cases, and test data are derived from a test basis that may include code, software architecture, detailed design, or any other source of information regarding the structure of the software. b) Is not correct. This is a common characteristic of white-box test techniques. Coverage is measured based on the items tested within a selected structure and the test technique applied to the test basis c) Is correct. This is a common characteristic of experience-based test techniques. This knowledge and experience include expected use of the software, its environment, likely defects, and the distribution of those defects is used to define tests d) Is not correct. This is a common characteristic of black-box test techniques. Test cases may be used to detect gaps within requirements and the implementation of the requirements, as well as deviations from the requirements Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 20,
      correctAnswers: [1],
      explanation: "choice” coverage. “Small garden” and “large garden” can go only with “ground floor”, so we need two test cases with “ground floor” which cover these two “garden type” partitions. We need two more test cases to cover the two other “floor” partitions. The remaining ”garden type” partition of “no garden” is covered by these tests. We need a total of four test cases: TC1 (ground floor, small garden) TC2 (ground floor, large garden) TC3 (first floor, no garden) TC4 (second or higher floor, no garden) Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 21,
      correctAnswers: [0],
      explanation: "70, 71, 80, 81, 90, 91, and 100. The test cases cover six of them (TC1 – 91, TC2 – 50, TC3 – 81, TC4 – 60, TC5 – 70 and TC7 – 51). Therefore, the test cases cover 6/12 = 50%. Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 22,
      correctAnswers: [3],
      explanation: "a) Is not correct. A member without a missed deadline can get a discount FL-4.2.3 K3 1 and a gift T-Shirt after 15 bicycle rentals b) Is not correct. A member without a missed deadline can get a discount but no gift T-Shirt until they rented a bicycle 15 times c) Is not correct. Non-members cannot get a discount, even if they did not miss a deadline yet d) Is correct. No discount as a non-member that has also missed a deadline, but only members can receive a gift T-Shirt. Hence, the action is not correct Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 23,
      correctAnswers: [3],
      explanation: "Neither can both “done” transitions. This means we need at least three test cases to achieve transition coverage. For example: TC1: test, done TC2: run, error, done TC3: run, pause, resume, pause, done Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct"
    },
    {
      questionId: 24,
      correctAnswers: [0],
      explanation: "a) Is correct. Since 100% statement coverage is achieved, every FL-4.3.1 K2 1 statement, including the ones with defects, must have been executed and evaluated at least once b) Is not correct. Coverage depends on what is tested, not on the number of test cases. For example, for code “if (x==0) y=1”, one test case (x=0) achieves 100% statement coverage, but two test cases (x=1) and (x=2) together achieve only 50% statement coverage c) Is not correct. If there is a loop in the code there may be an infinite number of possible paths, so it is not possible to execute all the possible paths in the code d) Is not correct. Exhaustive testing is not possible (see the seven testing principles section in the syllabus). For example, for code “input x; print x” any single test with arbitrary x achieves 100% statement coverage, but covers one input value Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 25,
      correctAnswers: [3],
      explanation: "a) Is not correct. The fundamental strength of white-box test techniques is FL-4.3.3 K2 1 that the entire software implementation is taken into account during testing b) Is not correct. White-box coverage measures provide an objective measure of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage c) Is not correct. White-box test techniques can be used to perform reviews (static testing) d) Is correct. This is the weakness of the white-box test techniques. They are not able to identify the missing implementation, because they are based solely on the test object structure, not on the requirements specification"
    },
    {
      questionId: 26,
      correctAnswers: [0],
      explanation: "a) Is correct. The basic concept behind error guessing is that the tester FL-4.4.1 K2 1 tries to guess what errors may have been made by the developer and what defects may be in the test object based on past experience (and sometimes checklists) b) Is not correct. Although a tester who used to be a developer may use their personal experience to help them when performing error guessing, the test technique is not based on prior knowledge of development c) Is not correct. Error guessing is not a usability technique for guessing how users may fail to interact with the test object d) Is not correct. Duplicating the development task has several flaws that make it impractical, such as the tester having equivalent skills to the developer and the time involved to perform the development. It is not error guessing Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 27,
      correctAnswers: [2],
      explanation: "a) Is not correct. This is a new product. You probably do not have a FL-4.4.2 K2 1 checklist yet and test conditions might not be known due to missing requirements b) Is not correct. This is a new product. You probably do not have enough information to make correct error guesses c) Is correct. Exploratory testing is most useful when there are few known specifications and/or there is a pressing timeline for testing d) Is not correct. Branch testing is time-consuming, and your management is asking about some test results now. Also, branch testing does not involve domain knowledge"
    },
    {
      questionId: 28,
      correctAnswers: [1],
      explanation: "a) Is not correct. Retrospectives are used to capture lessons learned and FL-4.5.2 K2 1 to improve the development and testing process, not to document the acceptance criteria b) Is correct. This is the standard way to document acceptance criteria c) Is not correct. Verbal communication does not allow to physically document the acceptance criteria as part of a user story (”card” aspect in the 3C’s model) d) Is not correct. Acceptance criteria are related to a user story, not a test plan. Also, acceptance criteria are the conditions that have to be fulfilled to decide if the user story is complete. Risks are not such conditions"
    },
    {
      questionId: 29,
      correctAnswers: [0],
      explanation: "a) Is correct. This test covers two acceptance criteria: one about editing FL-4.5.3 K3 1 the document and one about saving changes b) Is not correct. Acceptance criteria cover the editor activities, not the content owner activities c) Is not correct. Scheduling the edited content for publication may be a nice feature, but it is not covered by the acceptance criteria d) Is not correct. Acceptance criteria state about reassigning from an editor to the content owner, not to another editor Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 30,
      correctAnswers: [2],
      explanation: "a) Is not correct. Priorities for user stories are determined by the business FL-5.1.2 K1 1 representative together with the development team b) Is not correct. Testers focus on both functional and non-functional aspects of the system to be tested c) Is correct. According to the syllabus, this is one of the ways testers add value to iteration and release planning d) Is not correct. Early test design is not part of release planning. Early test design does not automatically guarantee the release of quality software"
    },
    {
      questionId: 31,
      correctAnswers: [2, 4],
      explanation: "a) Is not correct. Test environment readiness is a resource availability FL-5.1.3 K2 1 criterion; hence it belongs to the entry criteria b) Is not correct. This is a resource availability criterion; hence it belongs to the entry criteria c) Is correct. Estimated defect density is a measure of diligence; hence it belongs to the exit criteria. d) Is not correct. Requirements translated into a given format result in testable requirements; hence it belongs to the entry criteria e) Is correct. Automation of regression tests is a completion criterion; hence it belongs to the exit criteria"
    },
    {
      questionId: 32,
      correctAnswers: [3],
      explanation: "E = (optimistic + 4*most likely + pessimistic)/6 E = (2+(4*11)+14)/6 = 10 Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 33,
      correctAnswers: [0],
      explanation: "Afterwards, TC 003 to satisfy priority and then TC 004, followed by TC 005. Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 34,
      correctAnswers: [0],
      explanation: "• Usability testing is in Q3 (1 – C) • Component testing is in Q1 (2 – A) • Functional testing is in Q2 (3 – B) • Reliability testing is in Q4 (4 – D) Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 35,
      correctAnswers: [2],
      explanation: "a) Is not correct. We do not accept the risk; concrete actions are proposed FL-5.2.4 K2 1 b) Is not correct. No contingency plans are proposed c) Is correct. The proposed actions are related to testing, which is a form of risk mitigation d) Is not correct. Risk is not transferred but mitigated Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 36,
      correctAnswers: [3],
      explanation: "a) Is not correct. Acceptance criteria are the conditions used to decide FL-5.3.3 K2 1 whether the user story is ready. They cannot show work progress b) Is not correct. Defect reports inform about the defects. They do not show work progress c) Is not correct. Test completion report can be created after the iteration is finished, so it will not show the progress continuously within an iteration d) Is correct. Burndown charts are a graphical representation of work left to do versus time remaining. They are updated daily, so they can continuously show the work progress"
    },
    {
      questionId: 37,
      correctAnswers: [2],
      explanation: "a) Is not correct. Traceability is the relationship between two or more work FL-5.4.1 K2 1 products, not between different versions of the same work product b) Is not correct. Maintenance testing is about testing changes; it is not related closely to versioning c) Is correct. To support testing, configuration management may involve the version control of all test items d) Is not correct. Requirements engineering is the elicitation, documentation, and management of requirements; it is not closely related to test script versioning Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 38,
      correctAnswers: [2],
      explanation: "a) Is not correct. The expected result is “the application should accept the FL-5.5.1 K3 1 provided input and create the user”. The actual result is “The application hangs up after entering “Test input. $ä””. b) Is not correct. There is a reference to the test case and to the related requirement and it states that the defect is rejected. Also, the defect status would not be very helpful for the developers c) Is correct. We do not know in which test environment the anomaly was detected, and we also do not know which application (and its version) is affected d) Is not correct. The defect report states that the anomaly is urgent, that it is a global issue (i.e., many, if not all, test administration accounts are affected) and states the impact is high for business stakeholders"
    },
    {
      questionId: 39,
      correctAnswers: [2],
      explanation: "a) Is not correct. Test monitoring involves the ongoing checking of all FL-6.1.1 K2 1 activities and comparison of actual progress against the test plan. Test control involves taking the actions necessary to meet the test objectives of the test plan. No test data are prepared during these activities. b) Is not correct. Test analysis includes analysis of the test basis to identify test conditions and prioritize them. Test data are not prepared during this activity. c) Is correct. Test design and implementation can both include the identification, creation or acquisition of the testware necessary for test execution (e.g., test data). d) Is not correct. Test completion activities occur at project milestones (e.g., release, end of iteration, test level completion), so it is too late for preparing test data. Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points"
    },
    {
      questionId: 40,
      correctAnswers: [1],
      explanation: "a) Is not correct. Test automation does not introduce unknown regressions FL-6.2.1 K1 1 in production b) Is correct. Wrong allocation of effort to maintain testware is a risk c) Is not correct. Test tools must be selected so that they and their testware can be relied upon d) Is not correct. The primary goal of test automation is to reduce manual testing. So, this is a benefit, not a risk Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Appendix: Answer Key for Additional Sample Questions Question Correct Answer LO K-Level Points Question Correct Answer LO K-Level Points Number (#) Number (#) Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Appendix: Answers to Additional Sample Questions Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points the causes of failures in a component or system b) Is not correct. Testing is the process concerned with planning, preparation and evaluation of a component or system and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects. It is not related to fixing causes of failures c) Is not correct. Requirement elicitation is the process of gathering, capturing, and consolidating requirements from available sources. It is not related to fixing causes of failures d) Is not correct. Defect management is the process of recognizing, recording, classifying, investigating, resolving, and disposing of defects. It is not related to fixing causes of failures Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points Testing and quality assurance are not the same. Testing is the process consisting of all software development lifecycle (SDLC) activities, both static and dynamic, concerned with planning, preparation and evaluation of a component or system and related work products to determine that they satisfy specified requirements, to demonstrate that they are fit for purpose and to detect defects. Quality assurance is focused on establishing, introducing, monitoring, improving, and adhering to the quality-related processes. Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct experienced while programming b) Is not correct. Accepting invalid inputs is a failure c) Is not correct. The error in thinking that put the defect in the code d) Is correct. The problem in the code is a defect Test charters are the output from test design Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points about completeness of tests. Analyzing the impact analysis of changes will help to select the right test cases for execution b) Is not correct. Traceability does not give information about the estimated level of residual risk if the test cases are not traced back to risks c) Is correct. Performing the impact analysis of the changes helps in selecting the test cases for the regression test d) Is not correct. Analyzing the traceability between the test basis, test objects and test cases does not help in selecting test data to achieve the assumed coverage of the test object. Selecting test data is more related to test analysis and test implementation, not traceability on the project and not the sole responsibility of the test team b) Is not correct. First, it is not a benefit if an external test team does not meet delivery deadlines, and second, there is no reason to believe that external test teams will feel they do not have to meet strict delivery deadlines c) Is not correct. It is bad practice for the test team to work in complete isolation, and we would expect an external test team to be concerned with changing project requirements and communicating well with developers d) Is correct. Specifications are never perfect, meaning that assumptions will have to be made by the developer. An independent tester is useful in that they can challenge and verify the assumptions and subsequent interpretation made by the developer Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points phases, so dynamic test execution cannot be performed early in the SDLC b) Is correct. In sequential development models, in the initial phases, testers participate in requirement reviews, which is a form of static testing. c) Is correct. Test planning could be performed early in the SDLC before the test project begins together with test analysis and test design. d) Is not correct. Acceptance test execution can be performed when there is a working product. In sequential SDLC models the working product is usually delivered later in the SDLC e) Is not correct. Maintenance testing when there is a working and deployed product, which is not done in the early phases of any SDLC. i. Is true. Faster product release and faster time to market is an advantage of DevOps ii. Is false. Typically, we need less effort for manual tests because of the use of test automation iii. Is true. Constant availability of executable software is an advantage iv. Is false. More regression tests are needed v. Is false. Not everything is automated and setting up a test automation framework is expensive Thus: a) Is not correct b) Is not correct c) It is correct d) Is not correct Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points performance comes directly from the client and that the performance is important from the business point of view (i.e., high priority) does not make these tests functional, because they do not check “what” the system does, but “how” (i.e., how fast the orders are processed) b) Is correct. This is an example of testing for performance efficiency, a type of non-functional testing c) Is not correct. From the scenario, we do not know if interacting with the user interface is a part of the test conditions. But even if we did, the main test objective of these tests is to check the performance, not the usability d) Is not correct. We do not need to know the internal structure of the code to perform the performance efficiency testing. One can execute performance efficiency tests without structural knowledge migration, which is a form of maintenance testing b) Is not correct. Regression testing verifies whether a fix accidentally affected the behavior of other parts of the code, but now we are talking about data migration to a new system c) Is not correct. Portability testing focuses on transferring the system to another environment d) Is not correct. Integration testing focuses on interactions between components and/or systems, not on data migration. Also, it is not a test type, but a test level. Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points Thus: a) Is not correct b) Is not correct c) It is correct d) Is not correct i. These behaviors are easily detectable while the software is running. Hence, dynamic testing shall be used to identify them ii. This is an example of deviations from standards, which is a typical defect that is easier found with static testing iii. If the software is executed during the test, it is dynamic testing iv. Identifying defects as early as possible is the test objective of both static testing and dynamic testing v. This is an example of gaps in the test basis traceability or coverage, which is a typical defect that is easier found with static testing Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct in informal ones b) Is correct. There are several activities during the formal review process c) Is not correct. Documentation to be reviewed should be distributed as early as possible d) Is not correct. Defects found during the review should be reported Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points b) Is correct. This is the task of the management in a formal review c) Is not correct. This is the task of the moderator d) Is not correct. This is the task of the scribe The boundary values are 11, 12 and 13. In the three-point boundary value analysis for each boundary, we need to test the boundary and both its neighbors, so: • for 11 we test 10, 11, 12 • for 12 we test 11, 12, 13 • for 13 we test 12, 13, 14 Altogether we need to test 10, 11, 12, 13, and 14 Thus: a) Is not correct b) Is not correct c) Is correct d) Is not correct least one (unconditional) branch to be covered b) Is not correct. Covering only unconditional branches does not imply covering all conditional branches c) Is not correct. 100% branch coverage implies 100% statement coverage, not otherwise. For example, for an IF decision without the ELSE, one test is enough to achieve 100% statement coverage, but it only achieves 50% branch coverage d) Is correct. Each decision outcome corresponds to a conditional branch, so 100% branch coverage implies 100% coverage of the decision outcomes Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points requirements document, a specification, or a set of use cases, user stories, or business processes b) Is not correct. While you could consider the list as a set of test charters, it more closely resembles the list of test conditions to be checked c) Is correct. The list of user interface best practices is the list of test conditions to be systematically checked d) Is not correct. The tests are not focused on failures that could occur, but rather on knowledge about what is important for the user, in terms of usability stakeholders create the user stories collaboratively, to obtain the shared vision b) Is correct. Collaborative user story writing means that all stakeholders create the user stories collaboratively, to obtain the shared vision c) Is not correct. Collaborative user story writing means that all stakeholders create the user stories collaboratively, to obtain the shared vision d) Is not correct. This is the list of properties that each user story should have, not the description of the collaboration-based approach exit criteria, which are part of the test approach b) Is not correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach c) Is not correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach d) Is correct. The paragraph contains information on test levels and exit criteria, which are part of the test approach Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points team member b) Is correct. If test estimates are not the same, but the variation in the results is small, applying rules like “accept the number with the most votes” can be applied c) Is not correct. There is no consensus yet as some say 13, others say 8 d) Is not correct. A feature should not be removed only because the team cannot agree on the test estimates at the lower test levels b) Is not correct. It is not true that a test on a lower level tests a larger piece of functionality. Tests are more atomic and oriented on a specific logic, so it is the opposite c) Is not correct. Test pyramid shows how the number of tests is distributed across test levels d) Is not correct. The test pyramid model supports the team in test automation b) Is not correct. Risk impact and risk likelihood are independent c) Is correct. Risk impact and risk likelihood are independent d) Is not correct. We need both factors to calculate risk level Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points i. It is a Project risk ii. It is a Product risk iii. It is a Product risk iv. It is a Project risk v. It is a Product risk Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct analysis b) Is not correct. This is an example of an architectural decision, not related with testing c) Is not correct. This is an example of performing a quantitative risk analysis and is not related to thoroughness or scope of testing d) Is correct. This shows how risk analysis impacts the thoroughness of testing (i.e., the level of detail) Certified Tester, Foundation Level Sample Exam set A Sample Exam – Answers Question Correct Explanation / Rationale Learning K-Level Number Number Answer Objective of (#) (LO) Points quality b) Is not correct. This is the measure of the test efficiency not the test object quality c) Is not correct. The number of test cases executed does not tell us anything about the quality; test results might do d) Is correct. defect density is related to the test object quality e) Is not correct. Time to repair is a process metric. It does not tell us anything about the product quality related, so this is an important piece of information for business stakeholders b) Is correct. Branch testing is a technical metric used by developers and technical test analysts. This information is of no interest to business representatives c) Is not correct. Test progress is project related, so it may be useful for business representatives d) Is not correct. Risks impact product quality, so it may be useful for business representatives"
    },
  ],
  "paper-b": [
    {
      questionId: 41,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 42,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 43,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 44,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 45,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 46,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 47,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 48,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 49,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 50,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 51,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 52,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 53,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 54,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 55,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 56,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 57,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 58,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 59,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 60,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 61,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 62,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 63,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 64,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 65,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 66,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 67,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 68,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 69,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 70,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 71,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 72,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 73,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 74,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 75,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 76,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 77,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 78,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 79,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
    {
      questionId: 80,
      correctAnswers: [0],
      explanation: "Refer to syllabus."
    },
  ],
  "paper-c": [
    {
      questionId: 81,
      correctAnswers: [1],
      explanation: "a) Is not correct. Validating that documented requirements are met is incorrect as validation is concerned with meeting user requirements and expectations, while verification is concerned with meeting specified requirements, so this would be correct if we replaced ‘validating’ with ‘verifying’ b) Is correct. Causing failures and identifying defects is probably the most common objective of dynamic testing c) Is not correct. Initiating errors and identifying root causes is incorrect because testers do not initiate errors, they try to cause failures. Errors are typically made by developers (and cannot really be initiated) and result in defects, which testers attempt to identify either directly through static testing or indirectly through failures with dynamic testing. Identifying root causes is useful but is part of debugging, which is a separate activity from testing d) Is not correct. Verifying the test object meets user expectations is incorrect as verification is concerned with checking specified (documented) requirements are met, while validation is concerned with meeting user requirements and expectations, so this would be correct if we replaced ‘verifying’ with ‘validating’ Learning Objective (LO)"
    },
    {
      questionId: 82,
      correctAnswers: [2],
      explanation: "a) Is not correct. Dynamic testing does cause failures (from which defects can then be located and fixed). However, debugging is concerned with locating defects and fixing these defects. Therefore, debugging does not fix failures b) Is not correct. Both testing and debugging contribute to improving the quality of the test object, so both should be considered positively. Debugging is generally considered to be a positive activity as it is fixing something. Dynamic testing does involve intentionally causing the test object to fail, which is why some people consider it a negative activity, but that is a very narrow view (and not one typically held by testers). Both positive and negative test cases are possible. Positive test cases check that the test object correctly performs what it is supposed to do, while negative testing checks that the test object does not do what it is not supposed to do c) Is correct. Testing determines that defects exist either directly through observation of the defect in reviews (or by a tool in static analysis), or indirectly by causing a failure in dynamic testing. Debugging is a separate activity from testing (normally performed by developers) and is concerned with locating defects (only for dynamic testing) and fixing the defects d) Is not correct. The causes of defects are typically human errors. Testing finds defects either directly through static testing, or indirectly by causing failures in dynamic testing, and debugging fixes defects. So, testing does not find the cause of defects and debugging does not fix the causes of defects Learning Objective (LO)"
    },
    {
      questionId: 83,
      correctAnswers: [1],
      explanation: "a) Is not correct. The ‘testing shows the presence, not the absence of defects’ principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness. Therefore, explaining that it is not possible for testing to show the absence of defects would partially address this principle, not the ‘absence-ofdefects’ fallacy b) Is correct. By supporting the end user to perform acceptance testing it should be possible to validate that the system meets users' needs and expectations c) Is not correct. It is not possible to ensure that no implementation defects remain in the delivered system as the ‘testing shows the presence, not the absence of defects’ principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness d) Is not correct. Modifying tests that cause no failures to ensure few defects remain is one way to address the ‘tests wear out’ principle. This principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. This will not validate that the system meets users' needs and expectations March 25, 2025 Certified Tester, Foundation Level"
    },
    {
      questionId: 84,
      correctAnswers: [1,4],
      explanation: "a) Is not correct. Test implementation is not likely to involve the use of test techniques as it is mostly concerned with assembling test cases into test procedures, while test techniques create test cases b) Is correct. Test design is likely to involve the use of test techniques to create test cases from test conditions and coverage items c) Is not correct. Test execution is not likely to involve the use of test techniques as it is mostly concerned with executing test procedures (and so test cases), while test techniques create test cases d) Is not correct. Test monitoring is not likely to involve the use of test techniques. Test monitoring is mostly concerned with ongoing checks to ensure the plan is being followed, while test techniques create test cases e) Is correct. Test analysis is likely to involve the use of test techniques to identify test conditions March 25, 2025 Certified Tester, Foundation Level"
    },
    {
      questionId: 85,
      correctAnswers: [0],
      explanation: "a) Is correct. The correct match is: 1B, 2D, 3C, 4A b) Is not correct c) Is not correct d) Is not correct March 25, 2025 Certified Tester, Foundation Level"
    },
    {
      questionId: 86,
      correctAnswers: [2],
      explanation: "a) Is not correct. Although it is correct to say that in Agile software development, some of the test management tasks may be handled by the Agile team itself, the testing role is not primarily the responsibility of a single individual from outside the team. Instead the testing is more likely to be performed by various team members following the wholeteam approach b) Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. So, although this statement is partially correct, it is wrong to say that the testing role is primarily responsible for test monitoring and test control c) Is correct. In Agile software development, some of the test management tasks may be handled by the Agile team itself. However, for test activities that span multiple teams within an organization, test managers outside of the development team may perform these tasks d) Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion, while the testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Thus the test management role is not normally responsible for test analysis and test design, although it is correct to say that the testing role is primarily responsible for test implementation and test execution Learning Objective (LO)"
    },
    {
      questionId: 87,
      correctAnswers: [1],
      explanation: "a) Is not correct. In the whole-team approach, testers play a vital role by sharing their testing expertise with the team and guiding product development. They collaborate with other team members to achieve the desired quality levels and work with business representatives to create acceptance tests. Testers also partner with developers to determine the optimal test strategy and test automation approaches b) Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a synergistic effect that benefits the entire project c) Is not correct. The whole-team approach allows any team member with the requisite skills and knowledge to undertake any task, thus specialist team members are not an advantage of this approach d) Is not correct. There is no specific guidance on the optimum size of teams using the whole-team approach, and there is no suggestion that larger teams are better Learning Objective (LO) a) Is correct. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias. However, the main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bottlenecks in the release process b) Is not correct. A developer’s familiarity with the code does not mean that they rarely find defects in it, instead this familiarity means they can efficiently find many defects in their own code. And, rather than developers and testers having a shared background, developers having a different background to testers is normally cited as the reason that testers and developers find different kinds of defects c) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization. In most projects, multiple levels of independence are utilized, with developers performing component testing and component integration testing, the test team performing system testing and system integration testing, and business representatives performing acceptance testing. So, testers can be in the developer’s team and do not need to come from outside the organization. Knowledge of the application domain will change from case to case and is not dependent on the level of independence d) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization, with testers from outside the developer’s team generally more independent than testers from within the team. However, there is more reason to believe that testers from outside the team are likely to be more isolated from the developers and so are more likely to be blamed for delays in product release K2 March 25, 2025 Certified Tester, Foundation Level"
    },
    {
      questionId: 88,
      correctAnswers: [0],
      explanation: "a) Is correct. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias. However, the main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bottlenecks in the release process b) Is not correct. A developer’s familiarity with the code does not mean that they rarely find defects in it, instead this familiarity means they can efficiently find many defects in their own code. And, rather than developers and testers having a shared background, developers having a different background to testers is normally cited as the reason that testers and developers find different kinds of defects c) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization. In most projects, multiple levels of independence are utilized, with developers performing component testing and component integration testing, the test team performing system testing and system integration testing, and business representatives performing acceptance testing. So, testers can be in the developer’s team and do not need to come from outside the organization. Knowledge of the application domain will change from case to case and is not dependent on the level of independence d) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization, with testers from outside the developer’s team generally more independent than testers from within the team. However, there is more reason to believe that testers from outside the team are likely to be more isolated from the developers and so are more likely to be blamed for delays in product release"
    },
    {
      questionId: 89,
      correctAnswers: [3],
      explanation: "a) Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, here we are attempting to equate test levels with development levels, and, although we know what is meant by ‘test levels’, there is no common understanding of the term ‘ development level’ b) Is not correct. Every software development activity has a corresponding test activity; however test objectives are quite different. For instance, there might be a test objective of ensuring that a test object adheres to a contractual requirement that a certain type of testing must be performed before delivery. In this case there is no reason for there to be a corresponding development objective c) Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, the same symmetry does not apply to testing and user activities. For instance, for some systems it is difficult to even identify the end users. Also, some test activities are focused on developers (e.g., testing for ease of maintainability), which has no user aspect to it d) Is correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity Learning Objective (LO)"
    },
    {
      questionId: 90,
      correctAnswers: [3],
      explanation: "a) Is not correct. Component Test-Driven Development is not a correct example of a test-first approach to development\nb) Is not correct. Integration Test-Driven Development is not a correct example of a test-first approach to development\nc) Is not correct. System Test-Driven Development is not a correct example of a test-first approach to development\nd) Is correct. Acceptance Test-Driven Development (ATDD) is a wellknown example of a test-first approach to development"
    },
    {
      questionId: 91,
      correctAnswers: [1],
      explanation: "a) Is not correct. Practices involved in shift left are aimed at implementing more test activities in the early phases of the software development life cycle (SDLC), portraying the SDLC as moving from left to right. There is no such thing as the left-hand side of the test process\nb) Is correct. Shift left emphasizes the importance of starting testing earlier in the SDLC. Implementing shift left testing necessitates additional training, and increased effort and costs during the early phases of the SDLC, nevertheless, overall savings should be higher\nc) Is not correct. Although automated component tests and component integration tests for regression testing are generally valuable, the creation of these tests is normally the responsibility of the developers, and if a continuous integration/continuous delivery (CI/CD) approach is followed, then these tests will have been submitted with the code. In some situations the tester may automate tests for regression testing, and sometimes even for component tests and component integration tests, however this is not part of shift left which moves testing earlier in the SDLC\nd) Is not correct. Training testers to perform tasks early in the SDLC would support a shift left approach by emphasizing the importance of starting testing earlier in the SDLC. However, automating more test activities to be performed later in the SDLC is not part of shift-left"
    },
    {
      questionId: 92,
      correctAnswers: [2],
      explanation: "a) Is not correct. One of the purposes of retrospectives is to identify potential process improvements, which, if put into practice, should result in the quality of future outputs of the development process (test objects) being higher. So, this is likely to occur as a result of a retrospective b) Is not correct. A benefit of retrospectives for testing includes increased test efficiency through process improvements. So, this is likely to occur as a result of a retrospective c) Is correct. Participants at retrospectives typically include testers, developers, architects, product owners, and business analysts, but end users are rarely invited or attend these meetings – and they are also unlikely to receive any reports from these meetings. So, it is very unlikely that they will learn and understand more about the development and test processes through retrospectives d) Is not correct. A benefit of retrospectives for testing includes improved quality of testware (including automated test scripts) through joint reviews with developers. So, this is likely to occur as a result of a retrospective Learning Objective (LO)"
    },
    {
      questionId: 93,
      correctAnswers: [3],
      explanation: "a) Is not correct. Component testing (also called unit testing) involves testing individual components in isolation and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing in their development environment b) Is not correct. Component integration testing involves testing the interfaces and interactions between components and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing c) Is not correct. System integration testing examines the interfaces with other systems and external services and is mostly verification against a specification, rather than validation against user needs. This type of testing is also most often performed by testers d) Is correct. Acceptance testing focuses on validating that the system meets the user's business needs and is ready for deployment. Ideally, this testing is carried out by the end users Learning Objective (LO)"
    },
    {
      questionId: 94,
      correctAnswers: [1],
      explanation: "a) Is not correct. Confirmation testing to check that the updates have resulted in a correct implementation is necessary, however, it would then be sensible to perform regression testing to ensure that no defects have been introduced or uncovered in unchanged areas of the system\nb) Is correct. Confirmation testing will check that the updates have resulted in a correct implementation, and then regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system\nc) Is not correct. Regression testing should be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system when the update was made, however it is also necessary to perform confirmation testing that will check that the updates have resulted in a correct implementation\nd) Is not correct. Confirmation testing will check that the updates have resulted in a correct implementation, and regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system. However, when performed (i.e., when an update needs to be tested), confirmation testing precedes regression testing"
    },
    {
      questionId: 95,
      correctAnswers: [3],
      explanation: "Considering each of the listed example defects:\ni. Two different parts of the design specification disagree due to the complexity of the design – this is an example of a specification defect, which includes inconsistencies, ambiguities, contradictions, omissions, inaccuracies, and duplications, which can most easily be found by static testing\nii. A response time is too long and so makes users lose patience – this is an example of a response time defect, which can only be detected in practice by executing the program and measuring the response time, which can most easily be found by dynamic testing\niii. A path in the code cannot be reached during execution - this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most easily be found by static testing\niv. A variable is declared but never subsequently used in the program - this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most easily be found by static testing\nv. The amount of memory needed by the program to generate a report is too high – this is an example of a performance defect, which can only be detected in practice by executing the program and measuring the memory used, which can most easily be found by dynamic testing\nThus:\na) Is not correct\nb) Is not correct\nc) Is not correct\nd) Is correct. The correct match for static testing is i, iii, and iv"
    },
    {
      questionId: 96,
      correctAnswers: [0],
      explanation: "a) Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner\nb) Is not correct. The feedback is from stakeholders, so providing feedback is unlikely to improve their understanding of their own user requirements\nc) Is not correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner. However, because changes in requirements can be understood and implemented sooner, it does not mean that unlimited changes to requirements are encouraged\nd) Is not correct. The feedback is from stakeholders and does not cover communication to them. Communications with end users could include telling them about which requirements will not be implemented prior to release, but ideally this should not happen at all"
    },
    {
      questionId: 97,
      correctAnswers: [1],
      explanation: "Explanation not found."
    },
    {
      questionId: 98,
      correctAnswers: [1],
      explanation: "Explanation not found."
    },
    {
      questionId: 99,
      correctAnswers: [2],
      explanation: "a) Is not correct. In most cases both black-box test techniques and experience-based test techniques can be used for the same test objects b) Is not correct. Both black-box test techniques and experience-based test techniques can be used at all test levels c) Is correct. Black-box test techniques (also known as specification-based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure. So, the test basis is usually a specification. Experience-based test techniques effectively use the knowledge and experience of testers for the design and implementation of test cases. This means that the tester, when designing tests, may not use the specification at all d) Is not correct. Experience-based test techniques can detect defects that may be missed using black-box (and white-box) test techniques. Hence, experience-based test techniques are complementary to black-box test techniques and white-box test techniques and both black-box test techniques and experience-based test techniques can be used in all SDLCs Learning Objective (LO)"
    },
    {
      questionId: 100,
      correctAnswers: [0],
      explanation: "a) Is correct. • Value “12” covers “length incorrect, too few digits” • Value “1111” covers “length correct” and “number of different digits incorrect • Value “1234” again covers “length correct” and “number of different digits correct” • Value “12345” covers “length incorrect, too many digits” b) Is not correct. All partitions are covered, however it only covers the lower side of “length incorrect” c) Is not correct. There are no value covering “correct PIN” d) Is not correct. There are no value covering “number of different digits” Learning Objective (LO)"
    },
    {
      questionId: 101,
      correctAnswers: [3],
      explanation: "a) Is not correct. Only 100 and 200 are valid coverage items for 2-value BVA, so we achieve 50% coverage b) Is not correct. Only 100 and 200 are valid coverage items for 2-value BVA, so we achieve 50% coverage c) Is not correct. Only 100 and 101 are valid coverage items for 2-value BVA, so we achieve 50% coverage d) Is correct. 101, 199 and 200 are valid coverage items for 2-value BVA, so we achieve 75% coverage a) Is not correct. The combination (T, T, F) does not match any rule. This is an example of omission, not a contradiction b) Is not correct. The combination (T, F, T) matches only one column, R2, so there is no contradiction c) Is not correct. Both combinations (T, T, T) and (F, T, T) match only one column, R1, so there is no contradiction d) Is correct. The combination (F, F, F) matches both R2 and R3, but R2 and R3 have different actions, so this shows a contradiction between R2 and R3. Learning Objective (LO)"
    },
    {
      questionId: 102,
      correctAnswers: [3],
      explanation: "Explanation not found."
    },
    {
      questionId: 103,
      correctAnswers: [0],
      explanation: "a) Is correct b) Is not correct c) Is not correct d) Is not correct In branch testing the coverage items are branches, which are represented by the edges of a control flow graph. There are 8 edges in the control flow graph. Learning Objective (LO) a) Is not correct b) Is not correct c) Is correct d) Is not correct March 25, 2025 Certified Tester, Foundation Level"
    },
    {
      questionId: 104,
      correctAnswers: [2],
      explanation: "Explanation not found."
    },
    {
      questionId: 105,
      correctAnswers: [0],
      explanation: "a) Is correct. Performing only black-box testing does not provide a measure of actual code coverage. White-box coverage measures provide an objective measurement of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage, and subsequently increase confidence in the code b) Is not correct. This statement is correct, but it has nothing to do with black-box testing c) Is not correct. In general there are no relationships between white-box test techniques and black-box test techniques d) Is not correct. White-box test techniques are used to design tests based on the test object itself, while black-box test techniques are used to design tests based on the specification. Therefore, there is no relation between coverage items derived from these two types of test techniques Learning Objective (LO)"
    },
    {
      questionId: 106,
      correctAnswers: [1],
      explanation: "a) Is not correct. Exploratory testing uses test charters, not a list of possible defects/failures. Although exploratory testing can incorporate the use of other test techniques, in this case a fault attack is the most likely option b) Is correct. This is a list of possible failures. Fault attacks are a methodical approach to the implementation of error guessing and require the tester to create or acquire a list of possible errors, defects and failures, and to design tests that will identify defects associated with the errors, expose the defects, or cause the failures c) Is not correct. The tester is using a checklist of items to support their testing. Both error guessing and checklist-based testing use such lists, however, the list here is of possible failures, not test conditions, and so the MOST PROBABLE test technique is fault attack, which focuses on errors, defects and failures d) Is not correct. BVA is based on an analysis of boundary values of equivalence partitions. The above list does not mention equivalence partitions or their boundaries Learning Objective (LO)"
    },
    {
      questionId: 107,
      correctAnswers: [3],
      explanation: "a) Is not correct. Although it is true that the tester can implement and execute detailed test cases based on the checklist, it does not explain how this would result in increased coverage b) Is not correct. Checklist items should not be automated. But even if they are, the automated test scripts always execute the tests in the same way, which usually does not result in increased coverage c) Is not correct. It is true that each checklist item should be tested separately and independently. But this impacts the test execution order and does not impact the achieved coverage, and so does not result in increased coverage d) Is correct. If the checklists are high-level, some variability in the actual testing is likely to occur, resulting in potentially greater coverage but less repeatability. If two testers follow a checklist of high-level items, each of them may use different test data, test steps, etc. This way, one tester will probably cover some areas not covered by the other tester and this will result in increased coverage Learning Objective (LO)"
    },
    {
      questionId: 108,
      correctAnswers: [1],
      explanation: "a) Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to (in this case, the right to be forgotten). This is an example of a rule-oriented acceptance criterion b) Is correct. This acceptance criterion describes an example scenario that must be realized by the system. This is an example of a scenariooriented acceptance criterion c) Is not correct. This sentence looks more like a line of code that implements some business rule. Acceptance criteria should be written in collaboration with business representatives, and therefore should be written in language they understand. This sentence will most likely be unintelligible to these stakeholders d) Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to and how compliance will be ensured. Therefore, this is an example of a rule-oriented acceptance criterion, not a scenario-based acceptance criterion a) Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user b) Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user c) Is not correct. There is no floor 5 described in the acceptance criteria. The test cases should not extend the scope of the user story. But even if we would like to perform negative testing, this test is not directly related to AC3 d) Is correct. This is the way we can check if a Special user can access floors which are accessible to a Regular user Learning Objective (LO)"
    },
    {
      questionId: 109,
      correctAnswers: [3],
      explanation: "Explanation not found."
    },
    {
      questionId: 110,
      correctAnswers: [0],
      explanation: "a) Is correct. The test plan may include test data requirements (as part of the test approach), but not the detailed test data for test cases. Test data is part of the test cases, not the test plan. Also, it is usually impossible to define such data when the test plan is created, because it is not exactly known what the components will look like b) Is not correct. One of the purposes of a test plan is to help ensure that test activities will meet the established criteria, by including entry criteria and exit criteria. The code coverage criteria are an example of such criteria for the component test level c) Is not correct. Documentation templates are typical content of a test plan. This helps to facilitate communication between the stakeholders by defining a standard way of communicating or reporting d) Is not correct. One of the purposes of a test plan is to demonstrate that testing will adhere to the existing test policy and test strategy, or to explain why the testing will deviate from them. This is an example of explaining the deviation, regarding the test levels that will be (or will not be) followed From the graph we have: A(4)=6 and A(3)=8 (the last two gray boxes). From the formula we obtain: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6.5 person-days. Learning Objective (LO) a) Is not correct b) Is not correct c) Is correct d) Is not correct March 25, 2025 Certified Tester, Foundation Level"
    },
    {
      questionId: 111,
      correctAnswers: [2],
      explanation: "Explanation not found."
    },
    {
      questionId: 112,
      correctAnswers: [0],
      explanation: "a) Is correct b) Is not correct c) Is not correct d) Is not correct a) Is not correct. The test pyramid model does not provide information about test priorities b) Is correct. The test pyramid model shows that different tests have different levels of granularity c) Is not correct. The test pyramid model is independent of coverage criteria d) Is not correct. Test pyramid model does not show any relations between different tests Learning Objective (LO) a) Is not correct. Testing quadrants group test levels and test types separately according to several criteria. They do not represent any combinations of test levels and test types and they are not related to any location within a software development lifecycle. Both test levels and test types are treated separately in the testing quadrants model b) Is not correct. Testing quadrants group test levels and test types according to several criteria. They do not describe the degree of granularity of individual test types performed at each test level. Such a model, regarding the test levels, is called the test pyramid c) Is not correct. The statement is wrong, because in general any test type can be performed at any test level d) Is correct. The testing quadrants group test levels, test types, test activities, test techniques and work products in Agile software development. In this model, tests can be business facing or technology facing. Tests can support the team (i.e., guide the development) or critique the product (i.e., measure its behavior against expectations). The combination of these two viewpoints determines the four quadrants a) Is not correct. Risk monitoring is part of risk control, not risk analysis b) Is not correct. Risk identification itself does not allow us to implement risk mitigation activities. The mitigating actions are defined during the risk control phase c) Is correct. This is an example of how risk analysis influences the thoroughness and scope of testing d) Is not correct. Coverage items are derived using test techniques, not through risk analysis Learning Objective (LO)"
    },
    {
      questionId: 113,
      correctAnswers: [1],
      explanation: "Explanation not found."
    },
    {
      questionId: 114,
      correctAnswers: [3],
      explanation: "a) Is not correct. Testing quadrants group test levels and test types separately according to several criteria. They do not represent any combinations of test levels and test types and they are not related to any location within a software development lifecycle. Both test levels and test types are treated separately in the testing quadrants model b) Is not correct. Testing quadrants group test levels and test types according to several criteria. They do not describe the degree of granularity of individual test types performed at each test level. Such a model, regarding the test levels, is called the test pyramid c) Is not correct. The statement is wrong, because in general any test type can be performed at any test level d) Is correct. The testing quadrants group test levels, test types, test activities, test techniques and work products in Agile software development. In this model, tests can be business facing or technology facing. Tests can support the team (i.e., guide the development) or critique the product (i.e., measure its behavior against expectations). The combination of these two viewpoints determines the four quadrants a) Is not correct. Risk monitoring is part of risk control, not risk analysis b) Is not correct. Risk identification itself does not allow us to implement risk mitigation activities. The mitigating actions are defined during the risk control phase c) Is correct. This is an example of how risk analysis influences the thoroughness and scope of testing d) Is not correct. Coverage items are derived using test techniques, not through risk analysis Learning Objective (LO)"
    },
    {
      questionId: 115,
      correctAnswers: [2],
      explanation: "Explanation not found."
    },
    {
      questionId: 116,
      correctAnswers: [1],
      explanation: "a) Is not correct. Test progress reports are mostly used during test monitoring and test control, and test completion, not during test design b) Is correct. A test completion report is prepared during test completion, when a project, test level, or test type is complete and when, ideally, its exit criteria have been met. This report uses information from test progress reports and other data c) Is not correct. Test progress reports are mostly used during test monitoring and test control, and test completion, not during test analysis d) Is not correct. Test progress reports are most used during test monitoring and test control, and test completion, not during test planning a) Is not correct. When a user reports a software failure, thanks to the unique identification of commits, it is possible to reassemble the files from the software version which was used by the user (as well as the corresponding versions of the test scripts) and thus reproduce the failure and locate the defect faster b) Is not correct. If a change to the test environment causes unexpected issues during testing, configuration management allows testers to roll back to a previous version of the environment. This ensures that testing can continue without being affected by the change c) Is not correct. Configuration management ensures that all identified documentation (e.g., requirement specifications) and software items are referenced unambiguously in test documentation (e.g., test plans) d) Is correct. This is ensured by defect management, not by the configuration management process Learning Objective (LO)"
    },
    {
      questionId: 117,
      correctAnswers: [3],
      explanation: "Explanation not found."
    },
    {
      questionId: 118,
      correctAnswers: [1],
      explanation: "a) Is not correct. This is important, but not as important as test environment elements b) Is correct. The important thing that is missing is the identification of the browser and device used for the testing. The browser and device information are important because such a defect can be browser- or device-specific. For example, a login button may work fine on one browser (or one version of a specific browser) but not on another. Therefore, the browser and device information can help the developers to reproduce the issue and find the root cause of the problem more quickly c) Is not correct. The test object is identified (WebShop v0.99) d) Is not correct. The impact is included – this is severity (high) a) Is not correct. Test execution and coverage tools facilitate the automated execution of test cases and the measurement of the coverage achieved by running those test cases. However, these tools do not help with the organization of defects and configuration management b) Is not correct. Test design and test implementation tools facilitate the generation of test cases, test data and test procedures, but they do not help with the organization of defects and configuration management c) Is not correct. Defect management tools are used to manage defects but are not testing tools and are not used to organize test cases or configuration management d) Is correct. Test management tools increase the test process efficiency by facilitating the management of the software development lifecycle (SDLC), requirements, tests, defects, and configuration management Learning Objective (LO)"
    },
    {
      questionId: 119,
      correctAnswers: [3],
      explanation: "Explanation not found."
    },
    {
      questionId: 120,
      correctAnswers: [3],
      explanation: "a) Is not correct. ‘The capability of generating test cases without access to the test basis’ is not possible. The generation of test cases by either testers or tools requires access to the test basis b) Is not correct. ‘The achievement of increased coverage through more objective assessment’ is not a direct benefit of test automation. Test automation will provide more objective assessment of coverage, however that objective assessment will not increase the coverage. Only by using the results of the coverage to write further test cases can the coverage possibly be increased c) Is not correct. ‘The increase in test execution times available with higher processing power’ is a contradictory statement as higher processing power would normally reduce execution times, and increased execution times are not a benefit as the testing would take longer d) Is correct. The prevention of human errors through greater consistency and repeatability is a benefit of test automation as test automation cannot suffer from human errors. For instance, it means that tests are consistently derived from requirements, test data is created in a systematic manner, and tests are executed by a tool in the same order with the same frequency Learning Objective (LO)"
    }
  ],
  "paper-d": [
    {
      questionId: 121,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 122,
      correctAnswers: [3],
      explanation: "a) Is not correct. The miscalculation of bonuses is a failure (the system produces incorrect output at runtime), not a defect. The defect is the missing exception handling in the code. b) Is not correct. The fine is a business/legal consequence of the failure, not a failure itself in ISTQB terms. A failure is when a component or system does not perform a required function within specified limits. c) Is not correct. Time pressure is a root cause, but 'the programmer working under time pressure' describes a human context — the root cause is the condition (time pressure), not the person. d) Is correct. An error is a human action that produces an incorrect result. The designer, due to tiredness, made an error which is embedded in the design of the user interface — the design does not suitably address disabled users."
    },
    {
      questionId: 123,
      correctAnswers: [0],
      explanation: "a) Is correct. 'Tests wear out' (also known as the pesticide paradox) states that if the same tests are repeated over and over, they will no longer find new defects. To overcome this, test cases should be regularly reviewed and revised, and new and different tests should be written to exercise different parts of the software. Varying test cases while keeping the same test conditions directly addresses this principle. b) The absence-of-defects fallacy is about fixing defects not necessarily producing a useful product. c) Early testing addresses cost efficiency of finding defects early. d) Defects cluster together relates to the distribution of defects, not test variation."
    },
    {
      questionId: 124,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 125,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 126,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 127,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 128,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 129,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 130,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 131,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 132,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 133,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 134,
      correctAnswers: [1],
      explanation: "a) Is not correct. Developers finding a system difficult to change is a maintainability concern, not a maintenance testing trigger. b) Is correct. The removal of the refund option because it produced incorrect results is a planned modification (deletion) to an operational system. This is a classic trigger for maintenance testing — the team must verify the removal and check for unintended impacts on other functionality. c) Is not correct. An agile team starting development of a new user story describes new feature development, not maintenance of an existing released system. d) Is not correct. Using the language support feature that already exists is normal operation, not a modification that would trigger maintenance testing."
    },
    {
      questionId: 135,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 136,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 137,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 138,
      correctAnswers: [1],
      explanation: "a) Is not correct. The manager decides on the execution of reviews and provides resources, but does not facilitate the meeting itself. b) Is correct. The moderator (facilitator) is responsible for ensuring review meetings run effectively. This includes ensuring that all participants can voice their opinions freely, managing the meeting dynamics, and keeping the review on track. c) Is not correct. 'Chairperson' is not a defined role in the ISTQB review process. d) Is not correct. The review leader plans and organises the review but the moderator facilitates the actual meeting sessions."
    },
    {
      questionId: 139,
      correctAnswers: [1],
      explanation: "a) Is not correct. White-box test techniques are based on the internal structure or code of the test object, not on external requirements or specifications. b) Is correct. Black-box test techniques are based on specifications, requirements, and expected behaviour without reference to internal code. REQ 05-017 is a clear business rule specification (input/output behaviour), making black-box techniques such as equivalence partitioning and boundary value analysis the most appropriate for designing test cases. c) Is not correct. Experience-based techniques are used when specifications are missing or incomplete, which is not the case here. d) Is not correct. Risk-based testing is a strategy for prioritising tests, not a technique for designing test cases from requirements."
    },
    {
      questionId: 140,
      correctAnswers: [1, 4],
      explanation: "The existing test suite already covers 'no discount' (BY=1990, CY=2020, D=30) and 'error message' (BY=2030, CY=2029, D=-1). To achieve full valid equivalence partitioning coverage, the two missing partitions are: student discount (0 ≤ D < 18) and pensioner discount (D ≥ 65). a) BY=2001, CY=2065: D=64 → no discount (already covered). b) Is correct. BY=1900, CY=1965: D=65 → pensioner discount (missing partition). c) BY=1965, CY=1900: D=–65 → error message (already covered). d) BY=2011, CY=2029: D=18 → no discount (already covered). e) Is correct. BY=2000, CY=2000: D=0 → student discount (missing partition). Therefore b and e together complete the valid equivalence partitioning coverage."
    },
    {
      questionId: 141,
      correctAnswers: [2],
      explanation: "Two-value boundary value analysis (BVA) tests the boundary value itself and the value just beyond the boundary. The system has two boundaries: the lower boundary at 0°C and the upper boundary at 2°C. a) –1, 3: tests one value just below each boundary but misses the actual boundary values (0 and 2). b) 0, 2: tests only the boundary values themselves but misses the values just outside each boundary (–1 and 3). c) –1, 0, 2, 3: Is correct. This covers both boundaries (0 and 2) AND the values just outside each boundary (–1 just below 0, and 3 just above 2), giving complete two-value BVA coverage. d) –2, 0, 2, 4: Tests boundary values (0 and 2) but the values –2 and 4 are two steps away from the boundaries, not the immediate adjacent values required for two-value BVA."
    },
    {
      questionId: 142,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 143,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 144,
      correctAnswers: [2],
      explanation: "a) Is not correct. 100% statement coverage means every statement was executed, but not every possible failure is guaranteed to be found — some defects only manifest under specific conditions that the test cases may not cover. b) Is not correct. 100% statement coverage does not imply 100% branch coverage; a statement can be executed without testing all possible decision outcomes. c) Is correct. By definition, 100% statement coverage means every executable statement in P has been run at least once. Therefore, any statement that contains a defect will also have been executed at least once. d) Is not correct. Although each test case achieves 50% coverage and they overlap, removing one of three test cases does not guarantee the remaining two still cover all statements — there may be statements only covered by the removed test case."
    },
    {
      questionId: 145,
      correctAnswers: [0],
      explanation: "a) Is correct. White-box test techniques derive tests from the internal structure (code) of the test object rather than from the specification. This means test cases can be created even when the specification is vague, outdated or incomplete, because the tester analyses the actual code paths, branches, and statements to be tested. b) Is not correct. While coverage measurement is an advantage of white-box testing, this does not explain why it works when the specification is poor. c) Is not correct. White-box techniques are actually poor at detecting omissions in requirements, since they rely on what is in the code, not what should be there. d) Is not correct. White-box techniques apply to dynamic testing and some static analysis, but this does not explain defect detection when specifications are incomplete."
    },
    {
      questionId: 146,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 147,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 148,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 149,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 150,
      correctAnswers: [1, 3],
      explanation: "Exit criteria define the conditions that allow testing to stop. a) 'Budget is approved' is an entry criterion (a precondition for testing to begin), not an exit criterion. b) Is correct. 'Budget runs out' is a valid exit criterion — when resources are exhausted, testing must stop regardless of completion. c) 'Test basis is available' is an entry criterion (testing cannot begin without it). d) Is correct. 'Test cases achieved at least 80% statement coverage' is a measurable exit criterion — achieving a defined coverage target is a common and valid condition for concluding testing. e) ISTQB certification of analysts is a project resource concern, not an exit criterion for testing activities."
    },
    {
      questionId: 151,
      correctAnswers: [0],
      explanation: "Using the three-point estimation formula: E = (O + 4M + P) / 6, where O = optimistic (best case) = 1h, M = most likely = 3h, P = pessimistic (worst case) = 8h. For one test case: E = (1 + 4×3 + 8) / 6 = (1 + 12 + 8) / 6 = 21 / 6 = 3.5 hours. For four test cases: 3.5 × 4 = 14 hours. b) 3.5 hours is the estimate for a single test case, not all four. c) 16 hours would result from simply multiplying the most likely estimate by 4 without applying the three-point formula correctly (4 × 4 = 16). d) 12 hours would result from 4 × 3 (most likely only), ignoring the weighted average formula."
    },
    {
      questionId: 152,
      correctAnswers: [1],
      explanation: "Additional coverage prioritization selects the test case that covers the most additional (previously uncovered) requirements in each round. TC1 covers Req1, Req3, Req4, Req7 (4 requirements) → executed first. After TC1, uncovered: Req2, Req5, Req6. TC3 covers Req5 and Req6 (2 new) → executed second. After TC3, uncovered: Req2. TC4 covers Req2 (1 new) → executed third. TC2 covers Req1, Req5, Req7 — all already covered (0 new) → executed last. Therefore TC2 should be executed last, as it provides no additional requirement coverage after the other three test cases have been executed."
    },
    {
      questionId: 153,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 154,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 155,
      correctAnswers: [1, 4],
      explanation: "Product risks relate to potential quality problems in the software itself (the product). Project risks relate to management, resources, or process issues. a) Scope creep is a project risk — it affects the project schedule and budget, not the product quality directly. b) Is correct. Poor architecture is a product risk — it directly affects the maintainability, performance, and reliability of the software product. c) Cost-cutting is a project risk — it affects project resources and decisions, not a quality characteristic of the product. d) Poor tool support is a project risk — it concerns the development or testing process, not the product itself. e) Is correct. Too long response time is a product risk — it is a performance quality characteristic of the product that could fail to meet user needs."
    },
    {
      questionId: 156,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 157,
      correctAnswers: [3],
      explanation: "a) Is not correct. Risk management identifies, analyses and mitigates risks to the project, but it does not enable the reassembly of specific software versions. b) Is not correct. Test monitoring and control tracks test progress and makes corrections, but does not manage software versions or file assemblies. c) Is not correct. The whole team approach encourages collaboration across all team members but is not responsible for version tracking and file assembly. d) Is correct. Configuration management is the discipline that maintains information about the version of work products (including software builds and releases). By recording the version number and the associated set of files, the team was able to reassemble the exact release — this is a fundamental outcome of effective configuration management."
    },
    {
      questionId: 158,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 159,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
    {
      questionId: 160,
      correctAnswers: [0],
      explanation: "Explanation not found."
    },
  ]
};
