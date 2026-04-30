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
      explanation: "a) Is not correct. It is impossible to prove that there are no defects anymore in the system under test. See testing principle 1 b) Is not correct. See testing principle 7 c) Is correct. Testing finds defects and failures which reduces the level of risk and at the same time gives more confidence in the quality level of the test object d) Is not correct. It is impossible to test all combinations of inputs (see testing principle 2)"
    },
    {
      questionId: 2,
      correctAnswers: [0],
      explanation: "a) Is correct. It is important that testers are involved from the beginning of the software development lifecycle (SDLC). It will increase understanding of design decisions and will detect defects early. b) Is not correct. Both developers and testers will have more understanding of each other's work products and how to test the code c) Is not correct. End users will not help the testers in increasing the quality of defect reports; also, users usually do not participate in low-level testing levels like integration testing d) Is not correct. Being certified does not automatically mean that the tester will be better in test design"
    },
    {
      questionId: 3,
      correctAnswers: [0],
      explanation: "a) Is correct. This principle means that if the same tests are repeated over and over again, eventually these tests no longer find any new defects. This is probably why the tests all passed in this release as well b) Is not correct. This principle says about the mistaken belief that just finding and fixing a large number of defects will ensure the success of a system c) Is not correct. This principle says that a small number of components usually contain most of the defects d) Is not correct. This principle states that testing all combinations of inputs and preconditions is not feasible"
    },
    {
      questionId: 4,
      correctAnswers: [1],
      explanation: "a) Is not correct. Estimating the test effort is part of test planning b) Is correct. This is an example of defining test conditions which is a part of test analysis c) Is not correct. Using test techniques to derive coverage items is a part of test design d) Is not correct. Reporting defects found during dynamic testing is a part of test execution"
    },
    {
      questionId: 5,
      correctAnswers: [1],
      explanation: "ii. Is false. The number of defects detected in previous projects may have some influence, but this is not as significant as i, iii and iv iii. Is true. The identified product risks are one of the most important factors influencing the test approach iv. Is true. Regulatory requirements are important factors influencing the test approach v. Is false. The test environment has no significant influence on the test approach Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 6,
      correctAnswers: [0, 4],
      explanation: "a) Is correct. This is done by the testers b) Is not correct. The product backlog is built and maintained by the product owner c) Is not correct. This is done by the development team d) Is not correct. This is a managerial role e) Is correct. This is done by the testers since its technical task done as part of a test analysis."
    },
    {
      questionId: 7,
      correctAnswers: [1],
      explanation: "ii. Is false. This is a task of the business analyst together with the business representative iii. Is true. Being a good team player is an important skill iv. Is false. Planning and organizing the work of the team is a task of the test manager or, mostly in an Agile software development project, the whole team and not just the tester v. Is true. Critical thinking is one of the most important skills of testers Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 8,
      correctAnswers: [3],
      explanation: "a) Is not correct. The test automation approach is defined by testers with the help of developers and business representatives b) Is not correct. The test strategy is decided in collaboration with the developers c) Is not correct. Testers, developers, and business representatives are part of the whole team approach d) Is correct. Testers will work closely with business representatives to ensure that the desired quality levels are achieved. This includes supporting and collaborating with them to help them create suitable acceptance tests"
    },
    {
      questionId: 9,
      correctAnswers: [3],
      explanation: "a) Is not correct b) Is not correct c) Is not correct d) Is correct. This rule holds for all SDLC models"
    },
    {
      questionId: 10,
      correctAnswers: [2],
      explanation: "a) Is not correct. It is more often used in behavior-driven development (BDD) b) Is not correct. It is the description of test-driven development (TDD) c) Is correct. In acceptance test-driven development (ATDD) tests are written from acceptance criteria as part of the design process d) Is not correct. It is used in BDD"
    },
    {
      questionId: 11,
      correctAnswers: [3],
      explanation: "a) Is not correct. Early review is an example of the shift-left approach b) Is not correct. TDD is an example of the shift-left approach c) Is not correct. Early non-functional testing is an example of the shift-left approach d) Is correct. Test scripts should be subject to configuration management, so it makes no sense to create the test scripts before this process is set up"
    },
    {
      questionId: 12,
      correctAnswers: [2],
      explanation: "a) Is not correct. Retrospectives are more useful for identifying improvement opportunities and have little importance for clients b) Is not correct. Retrospectives are not aimed to collect feedback about the product, but about the process. Additionally, retrospectives are internal activity for the team and should not include end user representatives c) Is correct. Regularly conducted retrospectives, when appropriate follow up activities occur, are critical to continual improvement of development and testing d) Is not correct. Courage and respect are values of Extreme Programming and are not closely related to retrospectives"
    },
    {
      questionId: 13,
      correctAnswers: [0],
      explanation: "• The test basis for acceptance testing is the user’s business needs (1D) • Communication between components is tested during component integration testing (2B) • Failures in logic can be found during component testing (3A) • Business rules are the test basis for system testing (4C) Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 14,
      correctAnswers: [1],
      explanation: "(4) and test (6) are confirmation tests. Because TC2 and TC3 failed in Execution 2 (i.e., tests (5) and (6)), test (8) and test (9) are also confirmation tests. TC2 passed in Execution 1 (i.e., test (2)), so test (5) is a regression test. TC1 passed in the Execution 2 (i.e., test (4)), so test (7) is also a regression test. Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 15,
      correctAnswers: [0],
      explanation: "a) Is correct. Defect management is no less expensive. Finding and fixing defects later in the SDLC is more costly b) Is not correct. This is a benefit of static testing c) Is not correct. This is a benefit of static testing d) Is not correct. This is a benefit of static testing"
    },
    {
      questionId: 16,
      correctAnswers: [3],
      explanation: "a) Is not correct. Feedback can improve the test process, but if one only wants to improve future projects, the feedback does not need to come early or frequently b) Is not correct. Feedback is not used to prioritize requirements c) Is not correct. There is no one, recommended way to measure quality of changes. Also, this is not one of the benefits of early feedback that are mentioned in section 3.2.1 d) Is correct. Early and frequent feedback can prevent misunderstandings about requirements"
    },
    {
      questionId: 17,
      correctAnswers: [1],
      explanation: "• Specified for walkthroughs, technical reviews, and inspections; thus, the reviews being performed cannot be informal reviews • The purpose of evaluating quality is one of the most important objectives of a walkthrough • This is not allowed for inspections and is typically not done in technical reviews. A moderator is needed in walkthroughs and is allowed for informal reviews • All types of reviews can include individual preparation (even informal reviews) • All types of reviews can produce a review report, although informal reviews do not require documentation Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 18,
      correctAnswers: [3],
      explanation: "a) Is not correct. Adequate time for individuals is a success factor b) Is not correct. Splitting work products into small adequate parts is a success factor c) Is not correct. Avoiding behaviors that might indicate boredom, exasperation, etc. is a success factor d) Is correct. During reviews one can find defects, not failures"
    },
    {
      questionId: 19,
      correctAnswers: [2],
      explanation: "a) Is not correct. This is a common characteristic of white-box test techniques. Test conditions, test cases, and test data are derived from a test basis that may include code, software architecture, detailed design, or any other source of information regarding the structure of the software. b) Is not correct. This is a common characteristic of white-box test techniques. Coverage is measured based on the items tested within a selected structure and the test technique applied to the test basis c) Is correct. This is a common characteristic of experience-based test techniques. This knowledge and experience include expected use of the software, its environment, likely defects, and the distribution of those defects is used to define tests d) Is not correct. This is a common characteristic of black-box test techniques. Test cases may be used to detect gaps within requirements and the implementation of the requirements, as well as deviations from the requirements"
    },
    {
      questionId: 20,
      correctAnswers: [1],
      explanation: "choice” coverage. “Small garden” and “large garden” can go only with “ground floor”, so we need two test cases with “ground floor” which cover these two “garden type” partitions. We need two more test cases to cover the two other “floor” partitions. The remaining ”garden type” partition of “no garden” is covered by these tests. We need a total of four test cases: TC1 (ground floor, small garden) TC2 (ground floor, large garden) TC3 (first floor, no garden) TC4 (second or higher floor, no garden) Thus: a) Is not correct b) Is correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 21,
      correctAnswers: [0],
      explanation: "70, 71, 80, 81, 90, 91, and 100. The test cases cover six of them (TC1 – 91, TC2 – 50, TC3 – 81, TC4 – 60, TC5 – 70 and TC7 – 51). Therefore, the test cases cover 6/12 = 50%. Thus: a) Is correct b) Is not correct c) Is not correct d) Is not correct"
    },
    {
      questionId: 22,
      correctAnswers: [3],
      explanation: "a) Is not correct. A member without a missed deadline can get a discount and a gift T-Shirt after 15 bicycle rentals b) Is not correct. A member without a missed deadline can get a discount but no gift T-Shirt until they rented a bicycle 15 times c) Is not correct. Non-members cannot get a discount, even if they did not miss a deadline yet d) Is correct. No discount as a non-member that has also missed a deadline, but only members can receive a gift T-Shirt. Hence, the action is not correct"
    },
    {
      questionId: 23,
      correctAnswers: [3],
      explanation: "Neither can both “done” transitions. This means we need at least three test cases to achieve transition coverage. For example: TC1: test, done TC2: run, error, done TC3: run, pause, resume, pause, done Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct"
    },
    {
      questionId: 24,
      correctAnswers: [0],
      explanation: "a) Is correct. Since 100% statement coverage is achieved, every statement, including the ones with defects, must have been executed and evaluated at least once b) Is not correct. Coverage depends on what is tested, not on the number of test cases. For example, for code “if (x==0) y=1”, one test case (x=0) achieves 100% statement coverage, but two test cases (x=1) and (x=2) together achieve only 50% statement coverage c) Is not correct. If there is a loop in the code there may be an infinite number of possible paths, so it is not possible to execute all the possible paths in the code d) Is not correct. Exhaustive testing is not possible (see the seven testing principles section in the syllabus). For example, for code “input x; print x” any single test with arbitrary x achieves 100% statement coverage, but covers one input value"
    },
    {
      questionId: 25,
      correctAnswers: [3],
      explanation: "a) Is not correct. The fundamental strength of white-box test techniques is that the entire software implementation is taken into account during testing b) Is not correct. White-box coverage measures provide an objective measure of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage c) Is not correct. White-box test techniques can be used to perform reviews (static testing) d) Is correct. This is the weakness of the white-box test techniques. They are not able to identify the missing implementation, because they are based solely on the test object structure, not on the requirements specification"
    },
    {
      questionId: 26,
      correctAnswers: [0],
      explanation: "a) Is correct. The basic concept behind error guessing is that the tester tries to guess what errors may have been made by the developer and what defects may be in the test object based on past experience (and sometimes checklists) b) Is not correct. Although a tester who used to be a developer may use their personal experience to help them when performing error guessing, the test technique is not based on prior knowledge of development c) Is not correct. Error guessing is not a usability technique for guessing how users may fail to interact with the test object d) Is not correct. Duplicating the development task has several flaws that make it impractical, such as the tester having equivalent skills to the developer and the time involved to perform the development. It is not error guessing"
    },
    {
      questionId: 27,
      correctAnswers: [2],
      explanation: "a) Is not correct. This is a new product. You probably do not have a checklist yet and test conditions might not be known due to missing requirements b) Is not correct. This is a new product. You probably do not have enough information to make correct error guesses c) Is correct. Exploratory testing is most useful when there are few known specifications and/or there is a pressing timeline for testing d) Is not correct. Branch testing is time-consuming, and your management is asking about some test results now. Also, branch testing does not involve domain knowledge"
    },
    {
      questionId: 28,
      correctAnswers: [1],
      explanation: "a) Is not correct. Retrospectives are used to capture lessons learned and to improve the development and testing process, not to document the acceptance criteria b) Is correct. This is the standard way to document acceptance criteria c) Is not correct. Verbal communication does not allow to physically document the acceptance criteria as part of a user story (”card” aspect in the 3C’s model) d) Is not correct. Acceptance criteria are related to a user story, not a test plan. Also, acceptance criteria are the conditions that have to be fulfilled to decide if the user story is complete. Risks are not such conditions"
    },
    {
      questionId: 29,
      correctAnswers: [0],
      explanation: "a) Is correct. This test covers two acceptance criteria: one about editing the document and one about saving changes b) Is not correct. Acceptance criteria cover the editor activities, not the content owner activities c) Is not correct. Scheduling the edited content for publication may be a nice feature, but it is not covered by the acceptance criteria d) Is not correct. Acceptance criteria state about reassigning from an editor to the content owner, not to another editor"
    },
    {
      questionId: 30,
      correctAnswers: [2],
      explanation: "a) Is not correct. Priorities for user stories are determined by the business representative together with the development team b) Is not correct. Testers focus on both functional and non-functional aspects of the system to be tested c) Is correct. According to the syllabus, this is one of the ways testers add value to iteration and release planning d) Is not correct. Early test design is not part of release planning. Early test design does not automatically guarantee the release of quality software"
    },
    {
      questionId: 31,
      correctAnswers: [2, 4],
      explanation: "a) Is not correct. Test environment readiness is a resource availability criterion; hence it belongs to the entry criteria b) Is not correct. This is a resource availability criterion; hence it belongs to the entry criteria c) Is correct. Estimated defect density is a measure of diligence; hence it belongs to the exit criteria. d) Is not correct. Requirements translated into a given format result in testable requirements; hence it belongs to the entry criteria e) Is correct. Automation of regression tests is a completion criterion; hence it belongs to the exit criteria"
    },
    {
      questionId: 32,
      correctAnswers: [3],
      explanation: "E = (optimistic + 4*most likely + pessimistic)/6 E = (2+(4*11)+14)/6 = 10 Thus: a) Is not correct b) Is not correct c) Is not correct d) Is correct"
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
      explanation: "a) Is not correct. We do not accept the risk; concrete actions are proposed b) Is not correct. No contingency plans are proposed c) Is correct. The proposed actions are related to testing, which is a form of risk mitigation d) Is not correct. Risk is not transferred but mitigated"
    },
    {
      questionId: 36,
      correctAnswers: [3],
      explanation: "a) Is not correct. Acceptance criteria are the conditions used to decide whether the user story is ready. They cannot show work progress b) Is not correct. Defect reports inform about the defects. They do not show work progress c) Is not correct. Test completion report can be created after the iteration is finished, so it will not show the progress continuously within an iteration d) Is correct. Burndown charts are a graphical representation of work left to do versus time remaining. They are updated daily, so they can continuously show the work progress"
    },
    {
      questionId: 37,
      correctAnswers: [2],
      explanation: "a) Is not correct. Traceability is the relationship between two or more work products, not between different versions of the same work product b) Is not correct. Maintenance testing is about testing changes; it is not related closely to versioning c) Is correct. To support testing, configuration management may involve the version control of all test items d) Is not correct. Requirements engineering is the elicitation, documentation, and management of requirements; it is not closely related to test script versioning"
    },
    {
      questionId: 38,
      correctAnswers: [2],
      explanation: "a) Is not correct. The expected result is “the application should accept the provided input and create the user”. The actual result is “The application hangs up after entering “Test input. $ä””. b) Is not correct. There is a reference to the test case and to the related requirement and it states that the defect is rejected. Also, the defect status would not be very helpful for the developers c) Is correct. We do not know in which test environment the anomaly was detected, and we also do not know which application (and its version) is affected d) Is not correct. The defect report states that the anomaly is urgent, that it is a global issue (i.e., many, if not all, test administration accounts are affected) and states the impact is high for business stakeholders"
    },
    {
      questionId: 39,
      correctAnswers: [2],
      explanation: "a) Is not correct. Test monitoring involves the ongoing checking of all activities and comparison of actual progress against the test plan. Test control involves taking the actions necessary to meet the test objectives of the test plan. No test data are prepared during these activities. b) Is not correct. Test analysis includes analysis of the test basis to identify test conditions and prioritize them. Test data are not prepared during this activity. c) Is correct. Test design and implementation can both include the identification, creation or acquisition of the testware necessary for test execution (e.g., test data). d) Is not correct. Test completion activities occur at project milestones (e.g., release, end of iteration, test level completion), so it is too late for preparing test data."
    },
    {
      questionId: 40,
      correctAnswers: [1],
      explanation: "a) Is not correct. Test automation does not introduce unknown regressions in production b) Is correct. Wrong allocation of effort to maintain testware is a risk c) Is not correct. Test tools must be selected so that they and their testware can be relied upon d) Is not correct. The primary goal of test automation is to reduce manual testing. So, this is a benefit, not a risk"
    },
  ],
  "paper-b": [
    {
      questionId: 41,
      correctAnswers: [0],
      explanation: "a) Is not correct. It is often possible to use dynamic testing to cause a test object to fail in ways that could never be achieved by the users, such as by using fault injection. However, if the failure can never occur with real end users, then identifying it is not especially valuable as testing is ultimately aimed at improving the work product for the end users. Spending time testing for failures that cannot occur with real users is not an efficient use of a tester's time. b) Is not correct. Static testing in the form of static analysis is used by developers to identify defects in their code earlier than can be achieved through dynamic testing. Note, however, that static testing (and static analysis) is used to detect defects, not failures, which are found by dynamic testing. Thus it is the use of the term 'failures' that makes this an incorrect option. c) Is not correct. Static analysis directly detects defects in code, and this is normally information for the developer, not the customer. d) Is correct. Reviews are a form of static testing that can be applied from the very start of the software development lifecycle and are used to find defects that can be removed before subsequent development activities waste effort on faulty requirements. If the defects are not detected and removed early on, then when the defect is found in derived work products, such as the design and code, the requirements will need to be changed."
    },
    {
      questionId: 42,
      correctAnswers: [0],
      explanation: "a) Is not correct. QA concentrates on process improvement and implementation, using a preventive approach to avoid errors and defects, while testing is a form of QC that is used to detect defects. b) Is correct. QC aims to achieve appropriate levels of quality by focusing on identifying and correcting product defects. Testing is a significant part of QC and helps to uncover these defects. c) Is not correct. Although testing is a significant part of QC and helps to uncover defects, other (non-testing) techniques utilized in QC include formal methods like model checking and proof of correctness, as well as simulation and prototyping. d) Is not correct. QA concentrates on process improvement and implementation, using a preventive approach to avoid errors and defects, while testing is a form of QC that is used to detect defects."
    },
    {
      questionId: 43,
      correctAnswers: [0],
      explanation: "The 'exhaustive testing is impossible' principle is concerned with the fact that it is not feasible to test every possible variation of inputs in all different circumstances, except in trivial cases. Instead, testing utilizes test techniques, test case prioritization, and risk-based testing to sample from the set of possibilities and focus test efforts. a) Is not correct. The principle states that it is not feasible to test everything except in trivial cases. Testing everything would require testing every possible variation of inputs in all different circumstances, which is generally infeasible as there will be a practically infinite number of possibilities. Testing every possible expected result will not address this problem as the relationship between inputs and expected results can be different for each test object. b) Is not correct. The principle states that it is not feasible to test every possible variation of inputs in all different circumstances. Because for non-trivial systems there is a practically infinite number, documenting all possible input variations would be impractical as it would take an infinite length of time. c) Is not correct. Starting testing as early as possible with reviews and other static testing approaches will not address the problem of there being too many possible test cases. The 'early testing saves time and money' principle is concerned with fixing defects early on to prevent the occurrence of subsequent defects in derived work products. d) Is correct. The use of equivalence partitioning and boundary value analysis to generate test cases is one way to address the principle as these test techniques provide a systematic way to derive a finite subset of all possible test cases."
    },
    {
      questionId: 44,
      correctAnswers: [0],
      explanation: "a) Is correct. Test design involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing. Test environment requirements are also specified, including the necessary infrastructure and tools. b) Is not correct. Test execution involves executing test cases (as part of test procedures), however it does not directly cover the other testware mentioned in the question, such as test data requirements, test environment requirements and test conditions. c) Is not correct. Test analysis is used to identify the features that require testing. The test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. While this activity involves working with test conditions, it does not cover the other testware mentioned in the question, such as test data requirements, test environment requirements and test cases. d) Is not correct. Test implementation includes the generation of test procedures, such as manual and automated test scripts, which are created from test cases and may be assembled into test suites. While this activity involves explicitly working with test cases, and may use test data requirements and test environment requirements, it does not cover test conditions."
    },
    {
      questionId: 45,
      correctAnswers: [0],
      explanation: "a) Is not correct. The organization's marketing team is unlikely to perform much testing, so their average level of experience is not likely to impact how testing is performed for a given test object. b) Is not correct. The level of knowledge of users that a new system is being built for them is unlikely to affect how testing is performed. c) Is correct. The number of years' experience of the members of the performance efficiency testing team will help to determine the capabilities and knowledge (e.g., of different tools and defect types) that the team members will apply when they are testing. d) Is not correct. The organizational structure of the different end users will change between users. So, it may not even be known when the application is being tested, and the end user's organizational structure can thus have little effect on how the testing is performed."
    },
    {
      questionId: 46,
      correctAnswers: [0],
      explanation: "a) Is not correct. Traceability between the mitigated risks and test cases that passed provides little information, because to be mitigated (by testing) the risks would need to have a corresponding test case that passed. To be able to assess residual risk, traceability between all risks and test results needs to be available, so that the risks that do not have a corresponding passing test can be identified as the residual risks. b) Is correct. Traceability between user requirements and test results provides an indication of which user requirements have been tested and so provides a means of measuring project progress (in the context of testing) against business goals. c) Is not correct. It is not clear that test cases that failed provide an indication of tester's skills any more than test cases that passed. It would partly depend on the test objective. Such measurement of testers based on test cases that passed and failed can be counter-productive as it could cause the testers to optimize their testing based on that metric rather than the test objective. d) Is not correct. Traceability between the identified risks and written test conditions provides a means of determining which further test conditions need to be written. Determining which risks are worth testing is part of risk management, and risk mitigation in particular."
    },
    {
      questionId: 47,
      correctAnswers: [0],
      explanation: "a) Is not correct. Strong communication skills, active listening, and teamwork abilities enable a tester to interact effectively with all stakeholders, however a deep knowledge of a variety of computer games that allowed them to get on well with one developer is not an example of a generic skill useful to testers. b) Is correct. Domain knowledge that can be used to understand and communicate with end-users and business representatives is one of the generic skills required by testers. A tester with experience as a pilot would make them better able to appreciate the acceptance criteria for the helicopter control system. c) Is not correct. Although programming skills could be considered as technical knowledge which can increase efficiency when utilizing some test tools, it is unlikely that these skills would improve their communication with business analysts. d) Is not correct. Although thoroughness, attention to detail, curiosity, and a methodical approach to identifying hard-to-find defects are all useful generic skills for testers, it is doubtful they would be generating test cases prior to starting exploratory testing. This is because one of the main tenets of exploratory testing is that the test cases are generated during the testing, not scripted in advance."
    },
    {
      questionId: 48,
      correctAnswers: [0],
      explanation: "a) Is not correct. The whole-team approach allows any team member with the requisite skills and knowledge to undertake any task, however that does not mean that team members can take on any role at any time. Typically, they only take on roles in which they are competent, and there is no suggestion that every team member can do every role. b) Is not correct. The whole-team approach applies to how a single team (typically in Agile software development) works; it does not cover how multiple teams are supposed to work on larger projects, and it does not suggest that only one 'whole' team is needed for a complete project. c) Is not correct. The whole-team approach does not expect every team member to be involved in every important decision. For instance, there is no need for the business representative (i.e., the Product Owner) to be involved in every technical decision that does not affect the business outcome. d) Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a team synergy that benefits the entire project."
    },
    {
      questionId: 49,
      correctAnswers: [0],
      explanation: "a) Is not correct. In agile software development, deliverables are produced in each iteration, and the frequent delivery of increments necessitates extensive regression testing. Although some (or all) of this regression testing may be automated, the regression testing (automated or not) cannot be replaced by automation of system tests. b) Is correct. If a sequential development model is used, then early in the software development lifecycle no code is available for execution, and so during this time static testing (e.g., reviews) is performed. Later in the lifecycle, when code is available for execution, dynamic testing is possible. Note, however, that preparation for dynamic testing will often occur early in any software development lifecycle. c) Is not correct. If an iterative development model, like agile software development, is used, then component tests may well be used for regression testing for each iteration. In which case, there is a strong argument for automating these component tests, which will have to be run frequently, and there is unlikely to be a strong argument for developers performing these component tests manually. d) Is not correct. In most incremental development models, deliverables are produced in each increment, requiring both static testing and dynamic testing at all test levels for each increment delivered."
    },
    {
      questionId: 50,
      correctAnswers: [0],
      explanation: "a) Is not correct. Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach. If they waited until the next development phase, then unnecessary development (and test) work could be started on unreviewed, flawed work products. b) Is correct. Testers should review work products as soon as drafts are available to enable early testing as part of a shift-left approach. c) Is not correct. Testers typically review work products that form the test basis as part of test analysis, not before test analysis and test design. d) Is not correct. Testers should review work products as soon as drafts are available to enable early testing as part of the shift-left approach. Waiting until they are published means that any defects that could be found by tester's review will be in the published document."
    },
    {
      questionId: 51,
      correctAnswers: [0],
      explanation: "a) Is correct. Test-Driven Development (TDD) is a well-known example of a test-first approach to development. b) Is not correct. Coverage-Driven Development is not a correct example of a test-first approach to development. c) Is not correct. Quality-Driven Development is not a correct example of a test-first approach to development. d) Is not correct. Feature-Driven Development is not an example of a test-first approach to development, but is, instead, an agile software development methodology based around delivering features (as opposed to user stories in Scrum)."
    },
    {
      questionId: 52,
      correctAnswers: [0],
      explanation: "a) Is not correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests. This is largely provided through continuous integration, where the developers submit component (unit) tests with their new code, which must pass for the code to be admitted to the build. Therefore, developers do need to complete component testing. b) Is correct. DevOps enhances testing in several ways, such as by providing fast feedback on code quality, automated regression testing that minimizes regression risk, and promoting a shift-left approach with high-quality code submission and component tests. c) Is not correct. DevOps enhances testing in several ways, but testers do not attempt to treat developers and operations equally by spending more time on release testing, although a shift-right approach to testing (testing in production) may well be used. d) Is not correct. Automated processes like continuous integration/continuous delivery (CI/CD) in DevOps facilitate stable test environments and reduce the need for manual testing, however, there is a risk of overlooking the importance of manual testing, especially from a user's perspective."
    },
    {
      questionId: 53,
      correctAnswers: [0],
      explanation: "a) Is correct. System testing examines the behavior and capabilities of the complete system and covers non-functional testing of quality characteristics, which includes security testing. This type of testing is often performed by an independent test team based on system specifications. b) Is not correct. System integration testing examines the interfaces with other systems and external services. c) Is not correct. Beta testing is a type of acceptance testing performed at an external site by roles outside the development organization. d) Is not correct. Component integration testing involves testing the (interfaces and) interactions between components of a system, such as the user interface and database."
    },
    {
      questionId: 54,
      correctAnswers: [0],
      explanation: "a) Is not correct. Regression tests increase in number as the project progresses, as new regression tests are typically required as changes are made to the system. Similarly, the number of confirmation tests also typically increases as the project progresses as new confirmation tests are needed for each fix made to a system. b) Is not correct. It is the other way round. Confirmation tests are created and run when the test object is fixed, and regression tests are (ideally) run whenever the test object is enhanced (changed). c) Is not correct. Confirmation testing verifies that a defect has been fixed correctly and so is concerned with testing changes to the test object. However, regression testing ensures that changes (including changes to the operational environment) do not have negative effects on unchanged software and so does not check that the operational environment remains unchanged. d) Is correct. Regression testing ensures that changes do not have negative effects on unchanged software. Confirmation testing verifies that a defect has been fixed — and so is concerned with changed code."
    },
    {
      questionId: 55,
      correctAnswers: [0],
      explanation: "a) Is not correct. A lack of usability provided through the user interface can be detected through a review using a suitable checklist, but the lack of usability can also be identified by getting several typical users to dynamically test the user interface and provide feedback on its usability. b) Is correct. A code review can detect code that cannot be reached by any path, however dynamic tests can only exercise reachable code and cannot determine that code cannot be reached without running every possible combination of inputs and input states, which is impractical for real code. c) Is not correct. Poor response times for most of the expected users are difficult to determine without executing the code (i.e., by static testing), so in this situation dynamic testing could find a defect, but static testing is unlikely to find it. d) Is not correct. A review of the code by someone who is aware of the required features could detect that the required features had not been implemented in the code, and dynamic testing could also be used to determine that these required features had not been implemented."
    },
    {
      questionId: 56,
      correctAnswers: [0],
      explanation: "a) Is not correct. The feedback is from stakeholders (e.g., business representatives and end users), not from developers, so this feedback is not likely to inform managers which developers are more or less productive. b) Is not correct. Early and frequent feedback from stakeholders is not used by project managers to prioritize how they interact with the different stakeholders. c) Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial as it facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner. d) Is not correct. Early and frequent feedback can prevent the development of a product that does not meet stakeholder needs, and results in costly rework and missed deadlines, so, ideally there should be no delay. Also, the feedback is from stakeholders (not to them), which includes the end users, so the end users providing feedback will not aid the end users' understanding."
    },
    {
      questionId: 57,
      correctAnswers: [0],
      explanation: "Considering each of the listed task descriptions: 1. The quality characteristics to be evaluated and the exit criteria are selected — Planning (C): Defining the review scope, purpose, work product to be reviewed, quality characteristics to be evaluated, areas of focus, exit criteria, supporting information such as standards, effort, and timeframes. 2. Everyone has access to the work product — Review initiation (B): Ensuring all participants have access to the work product and necessary resources, and clarifying their roles and responsibilities. 3. Anomalies are identified in the work product — Individual review (A): Evaluating the work product's quality, identifying and logging anomalies, recommendations, and questions using review techniques like checklist-based reviewing and scenario-based reviewing. 4. Anomalies are analyzed and discussed — Communication and analysis (D): Analyzing and discussing each anomaly, determining its status, ownership, and required actions, and making review decisions, normally in a meeting. a) Is not correct. b) Is not correct. c) Is not correct. d) Is correct. The correct match is: 1C, 2B, 3A, 4D."
    },
    {
      questionId: 58,
      correctAnswers: [0],
      explanation: "Considering each of the listed roles: 1. Scribe (or Recorder) — responsible for gathering feedback from reviewers and documenting review information, such as decisions made, and any new anomalies identified during the review meeting. (Records review information, such as decisions and new anomalies found during the review meeting — B). 2. Review Leader — responsible for overseeing the review process, such as selecting the review team members, scheduling review meetings, and ensuring that the review is completed successfully. (Takes overall responsibility for the review such as organizing when and where the review will take place — D). 3. Facilitator (or Moderator) — responsible for ensuring that the review meetings run effectively, including managing time, mediating discussions, and creating a safe environment where everyone can voice their opinions freely. (Ensures the effective running of review meetings and the setting up of a safe review environment — A). 4. Manager — responsible for deciding what needs to be reviewed and allocating resources, such as staff and time, for the review. (Decides what is to be reviewed and provides resources, such as staff and time for the review — C). a) Is not correct. b) Is not correct. c) Is correct. The correct match is: 1B, 2D, 3A, 4C. d) Is not correct."
    },
    {
      questionId: 59,
      correctAnswers: [0],
      explanation: "a) Is not correct. Decision table testing is a black-box test technique, not a white-box test technique — the test cases are not based on the decisions in the source code. In branch testing, the test cases are derived from knowledge of the control flow of the test object. b) Is not correct. Anticipation of potential defects is used in error guessing (an experience-based test technique), not in branch testing (a white-box test technique). In decision table testing, the test cases are derived from the specification that describes the business logic. c) Is not correct. If a test case is based on the knowledge of the control flow of the test object, it is a white-box test technique. Decision table testing is typically based on an analysis of business logic, so it is a black-box test technique. Branch testing is a white-box test technique, where test cases are derived based on the source code structure. d) Is correct. Decision table testing is a black-box test technique, so it is based on an analysis of the specified behavior of the test object without reference to its internal structure. Therefore, the test cases are independent of how the software is implemented. Branch testing is a white-box test technique, so test cases are based on an analysis of the test object's internal structure and processing. As the test cases are dependent on how the software is designed and coded, they can only be created after the design or implementation of the test object."
    },
    {
      questionId: 60,
      correctAnswers: [0],
      explanation: "a) Is correct. 19 covers the 'no discount' partition, 20 covers the '50% discount' partition, and 30 covers the '10% discount' partition. These three values cover all three of the valid equivalence partitions. b) Is not correct. 11 and 12 cover the 'no discount' partition, while 20 covers the '50% discount' partition, so covering two of the three valid equivalence partitions. c) Is not correct. 1 covers the 'no discount' partition, while 10 and 50 cover the '10% discount' partition. The '50% discount' partition is not covered, so overall two of the three valid equivalence partitions are covered. d) Is not correct. 29 and 31 cover the 'no discount' partition, while 10 and 30 cover the '10% discount' partition. The '50% discount' partition is not covered, so overall two of the three valid equivalence partitions are covered."
    },
    {
      questionId: 61,
      correctAnswers: [0],
      explanation: "The domain for the password length has three equivalence partitions: passwords too short {0, 1, ..., 4, 5}, passwords OK {6, 7, ..., 11, 12}, passwords too long {13, 14, ...}. To achieve full coverage for 3-value BVA we need to test the following values: 0, 1, 4, 5, 6, 7, 11, 12, 13, 14. Since 2-value BVA is already covered, this means that we have already tested the passwords of length: 0, 5, 6, 12 and 13. This means that the additional lengths that need to be covered to move from 2-value to 3-value are: 1, 4, 7, 11 and 14. a) Is not correct. b) Is not correct. c) Is not correct. d) Is correct."
    },
    {
      questionId: 62,
      correctAnswers: [0],
      explanation: "There are five columns in the decision table. Each test case covers one of them. TC1 and TC2 both cover Rule 4. TC3 and TC4 both cover Rule 2. TC5 covers Rule 5. So, these five test cases cover three out of five columns, achieving a coverage of (3/5)*100% = 60%. a) Is not correct. b) Is correct. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 63,
      correctAnswers: [0],
      explanation: "Let us refer to the transitions with E1, ..., E5 as in the picture. The variable N denotes the number of elements currently stored. Each 'Add' event increases it by 1, and each 'Remove' event decreases it by 1. Notice, that when the 'Add' event occurs while being in the NOT FULL state, the state changes to FULL only if N=2. If N<2, the system stays in the NOT FULL state. If N=0, no 'Remove' action is possible. Similarly, if N=3, no 'Add' action is possible. Test a) can be written as E1, E3, E3, E2, E4 (so covers 4 out of 5 valid transitions, achieving 80% valid transitions coverage). Test b) is infeasible, because after the first three 'Add' actions the system is in the FULL state and there is no valid transition going from FULL triggered by the 'Add' event. After the first three transitions only 60% of valid transitions coverage is achieved. Test c) can be written as E1, E2, E4, E5, E3 (so covers 5 out of 5 valid transitions, achieving 100% valid transitions coverage). Test d) can be written as E1, E2, E4, E5, E4 (so covers 4 out of 5 valid transitions, achieving 80% valid transitions coverage). a) Is not correct. b) Is not correct. c) Is correct. d) Is not correct."
    },
    {
      questionId: 64,
      correctAnswers: [0],
      explanation: "a) Is not correct. Coverage is always defined as the percentage of the covered elements. Therefore, it cannot exceed 100%. b) Is correct. If the statements executed by T1 and T2 were disjoint, the coverage of the test suite {T1, T2} would be 105%, which is impossible. Therefore, at least 5% of executable statements must have been executed by both T1 and T2. c) Is not correct. Statement coverage does not tell us anything about the number of non-executable statements in the code. d) Is not correct. Even if a test suite achieves full statement coverage, this does not imply achieving full branch coverage."
    },
    {
      questionId: 65,
      correctAnswers: [0],
      explanation: "Branch testing is a white-box test technique in which the coverage items are branches. A branch is a transfer of control between two nodes in the control flow graph, which shows the possible sequences in which source code statements are executed in the test object. Each transfer of control can be either unconditional (i.e., straight-line code) or conditional (i.e., a decision outcome). Coverage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage. a) Is not correct. A decision outcome is a conditional branch. For branch testing, X counts not only conditional, but also unconditional branches. b) Is not correct. Branch coverage counts not only conditional, but also unconditional branches. c) Is correct. Branch coverage is measured as the number of branches exercised by the test cases divided by the total number of branches, and is expressed as a percentage. d) Is not correct. Both X and Y count only conditional branches and do not take into account the unconditional branches."
    },
    {
      questionId: 66,
      correctAnswers: [0, 4],
      explanation: "Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing. Exploratory testing is also useful to complement other more formal test techniques. Exploratory testing will be more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness. a) Is correct. Exploratory testing is useful when there are few or inadequate specifications or there is significant time pressure on the testing. b) Is not correct. Exploratory testing is not a black-box test technique. c) Is not correct. Exploratory testing is useful when the specifications are poorly written. d) Is not correct. Programming skills have nothing to do with exploratory testing in principle. e) Is correct. Exploratory testing will be more effective if the tester is experienced, has domain knowledge and has a high degree of essential skills, like analytical skills, curiosity and creativeness."
    },
    {
      questionId: 67,
      correctAnswers: [0],
      explanation: "a) Is not correct. Checklists should contain test conditions to be verified. This is an example of an error, not a test condition; even if the tester was able to deduce some potential test conditions from the examples of errors, this error description is too general. b) Is not correct. Checklists should not contain items that are better suited as exit criteria. This is an example of an exit criterion. c) Is not correct. Checklists should not contain items that are too general. This is a very general item, which practically describes a test objective. d) Is correct. This is an example of a test condition that can be checked by a human."
    },
    {
      questionId: 68,
      correctAnswers: [0],
      explanation: "a) Is not correct. The rule-oriented format includes formats like bullet point verification lists or tabulated forms of input-output mappings, explicitly showing the rules to be followed. Given/When/Then is a scenario-oriented format because it describes a scenario to be verified. b) Is correct. This is a Given/When/Then format, which is scenario-oriented. c) Is not correct. There is no 'product-oriented' format of acceptance criteria. d) Is not correct. There is no 'process-oriented' format of acceptance criteria."
    },
    {
      questionId: 69,
      correctAnswers: [0],
      explanation: "a) Is not correct. The test case is related to viewing previous orders in the order history. b) Is not correct. The test case is related to viewing previous orders. c) Is not correct. The test case is related to viewing previous orders in the order history. d) Is correct. The test case is related to the registration process, which is not discussed in the user story. The user story is about viewing previous orders."
    },
    {
      questionId: 70,
      correctAnswers: [0],
      explanation: "a) Is correct. This is something that can (and should) be checked before the code is submitted to version control. b) Is not correct. This is something that can be checked after step (2) is performed, because merge conflict reporting can be done after the code is submitted and merged. c) Is not correct. This fits better as the entry criterion for step (3). d) Is not correct. This fits better as the exit criterion for step (3)."
    },
    {
      questionId: 71,
      correctAnswers: [0],
      explanation: "The average development effort is $900,000 and the average test effort is $90,000 (calculated from the four projects). The average test-to-development effort ratio is 1:10 ($90,000 : $900,000), which means that historically, on average, the test effort is 10% of the development effort. So if the development effort is estimated to be $800,000, the estimated test effort is estimated as: 10% * $800,000 = 0.1 * $800,000 = $80,000. a) Is not correct. b) Is correct. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 72,
      correctAnswers: [0],
      explanation: "The logical dependencies mean that for each product you have to run SEARCH → VIEW → ADD before running ORDER. You can add more products (using the same flow), before you run ORDER. Based on this, TC1 or TC2 must be executed first, otherwise no progress can be made. The first priority should be given to VIEW and ADD product B, as its test cases (TC6, TC4) are assigned with higher priority. So, the first 3 tests to execute are TC2 → TC4 → TC6. Now we need to consider whether to run TC7 and then the entire flow for product A or run the TCs for product A first. If TC7 has lower priority than the other tests, they should be tested first. Therefore, the entire flow should be: TC2 → TC4 → TC6 → TC1 → TC3 → TC5 → TC7. a) Is not correct. TC1 must be executed before TC3. b) Is correct. c) Is not correct. As shown above, TC7 is the last to be executed. d) Is not correct. Product B must be executed before product A."
    },
    {
      questionId: 73,
      correctAnswers: [0],
      explanation: "a) Is not correct. Usability testing is business facing testing that critiques the product (Q3). b) Is not correct. Functional testing is business facing testing (Q2). c) Is not correct. User acceptance testing is business facing testing that critiques the product (Q3). d) Is correct. Component integration testing is technology facing testing that supports the team (guides the development) (Q1)."
    },
    {
      questionId: 74,
      correctAnswers: [0],
      explanation: "Considering each of the listed risks and their mitigations: 1. Long system responses (1) can be tested in performance testing (B). 2. Changes in consumers' preferences (2) are usually out of our control, so usually we accept this risk (A). 3. Flooding of the server room (3) can cause significant loss, so we should transfer the risk, e.g., by buying an insurance policy (D). 4. That patients above a certain age receive inaccurate reports (4) suggests a potential boundary problem, which can be effectively detected with test techniques like BVA (C). a) Is not correct. b) Is not correct. c) Is correct. The correct combinations of risk and mitigation are: 1B, 2A, 3D and 4C. d) Is not correct."
    },
    {
      questionId: 75,
      correctAnswers: [0],
      explanation: "a) Is correct. Product quality metrics measure quality characteristics. Mean time to failure measures maturity, so it is a product quality metric. b) Is not correct. This is an example of a defect metric, not a product quality metric. c) Is not correct. This is an example of a coverage metric, not a product quality metric. d) Is not correct. This is an example of a defect metric, not a product quality metric."
    },
    {
      questionId: 76,
      correctAnswers: [0],
      explanation: "a) Is correct. The client is in a different location and time zone, so it may be difficult to communicate face-to-face. b) Is not correct. Dashboards are usually available to any user at any time, so the difference in time zones will not be as much of a hindrance to communication as verbal, face-to-face communication. c) Is not correct. Although the time difference between Europe and America is several hours, and this may cause some inconvenience, it's certainly not as great as with communicating face-to-face. d) Is not correct. Video conferencing tools are a convenient means of communication. Although communication between Europe and America during working hours usually requires one party to connect in the very early or very late hours, this is not as much of an inconvenience as verbal, face-to-face communication."
    },
    {
      questionId: 77,
      correctAnswers: [0],
      explanation: "a) Is correct. For a complex configuration item (e.g., a test environment), configuration management (CM) records the items it consists of, their relationships, and versions. b) Is not correct. CM tools do not execute test cases and do not calculate coverage. c) Is not correct. A CM tool is not a licensed management tool. d) Is not correct. CM tools do not generate test data."
    },
    {
      questionId: 78,
      correctAnswers: [0],
      explanation: "a) Is not correct. While the sentence is true, it does not provide much value for the developer. b) Is correct. From the test results it seems that the system ignores duplicates and sorts the list disregarding the repetitions. This is probably the cause of failures in TC3, TC4, TC5. Such information may help the developer to find the defect and fix it more efficiently. c) Is not correct. The system does not fail in sorting negative numbers. The problem is rather in disregarding duplicates. d) Is not correct. The test cases TC3, TC4 and TC5 fail, but we aren't aware that the test cases have any defects."
    },
    {
      questionId: 79,
      correctAnswers: [0],
      explanation: "Considering each of the listed tool categories and their descriptions: A. Static testing tools — support the tester in performing reviews and static analysis (4). B. Tools supporting scalability and deployment standardization — For example, virtual machines, containerization tools (3). C. DevOps tools — support the DevOps delivery pipeline, workflow tracking, automated build process(es), continuous integration/continuous delivery (CI/CD) (1). D. Collaboration tools — facilitate communication (2). a) Is not correct. b) Is not correct. c) Is correct. The correct match is: 1C, 2D, 3B, 4A. d) Is not correct."
    },
    {
      questionId: 80,
      correctAnswers: [0],
      explanation: "a) Is correct. Test automation can provide measures that are too complicated for humans to derive, such as white-box testing coverage measures for all but the most trivial code. b) Is not correct. By using test tools, the responsibility for the testing is NOT shared with the tool vendor as the vendor is not involved in the testing, and it is the tester's responsibility. The only possible responsibility that could be assigned to the tool vendor is if the tool fails to work as expected and provides incorrect test results. c) Is not correct. Testers still need to apply critical thinking when analyzing anomalies in the test results to determine their likely cause. d) Is not correct. Neither testers nor tools can generate test cases simply from an analysis of the program code as the code is the implementation and provides no information on the expected results, which will need to come from another part of the test basis, such as the design specification."
    },
  ],
  "paper-c": [
    {
      questionId: 81,
      correctAnswers: [1],
      explanation: "a) Is not correct. Validating that documented requirements are met is incorrect as validation is concerned with meeting user requirements and expectations, while verification is concerned with meeting specified requirements, so this would be correct if we replaced 'validating' with 'verifying'. b) Is correct. Causing failures and identifying defects is probably the most common objective of dynamic testing. c) Is not correct. Initiating errors and identifying root causes is incorrect because testers do not initiate errors, they try to cause failures. Errors are typically made by developers (and cannot really be initiated) and result in defects, which testers attempt to identify either directly through static testing or indirectly through failures with dynamic testing. Identifying root causes is useful but is part of debugging, which is a separate activity from testing. d) Is not correct. Verifying the test object meets user expectations is incorrect as verification is concerned with checking specified (documented) requirements are met, while validation is concerned with meeting user requirements and expectations, so this would be correct if we replaced 'verifying' with 'validating'."
    },
    {
      questionId: 82,
      correctAnswers: [2],
      explanation: "a) Is not correct. Dynamic testing does cause failures (from which defects can then be located and fixed). However, debugging is concerned with locating defects and fixing these defects. Therefore, debugging does not fix failures. b) Is not correct. Both testing and debugging contribute to improving the quality of the test object, so both should be considered positively. Debugging is generally considered to be a positive activity as it is fixing something. Dynamic testing does involve intentionally causing the test object to fail, which is why some people consider it a negative activity, but that is a very narrow view. Both positive and negative test cases are possible. Positive test cases check that the test object correctly performs what it is supposed to do, while negative testing checks that the test object does not do what it is not supposed to do. c) Is correct. Testing determines that defects exist either directly through observation of the defect in reviews (or by a tool in static analysis), or indirectly by causing a failure in dynamic testing. Debugging is a separate activity from testing (normally performed by developers) and is concerned with locating defects (only for dynamic testing) and fixing the defects. d) Is not correct. The causes of defects are typically human errors. Testing finds defects either directly through static testing, or indirectly by causing failures in dynamic testing, and debugging fixes defects. So, testing does not find the cause of defects and debugging does not fix the causes of defects."
    },
    {
      questionId: 83,
      correctAnswers: [1],
      explanation: "The 'absence-of-defects fallacy' is concerned with the idea that ensuring correctness in accordance with the requirements (i.e., verifying the absence of implementation defects) does not guarantee user satisfaction with the system. To address this it is also necessary to validate that the system meets users' needs and expectations, fulfills business objectives, and outperforms competing systems. a) Is not correct. The 'testing shows the presence, not the absence of defects' principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness. Therefore, explaining that it is not possible for testing to show the absence of defects would partially address this principle, not the 'absence-of-defects' fallacy. b) Is correct. By supporting the end user to perform acceptance testing it should be possible to validate that the system meets users' needs and expectations. c) Is not correct. It is not possible to ensure that no implementation defects remain in the delivered system as the 'testing shows the presence, not the absence of defects' principle explains that while testing can detect the existence of defects in the test object, it is not possible to demonstrate that there are no defects and, therefore, guarantee its correctness. d) Is not correct. Modifying tests that cause no failures to ensure few defects remain is one way to address the 'tests wear out' principle. This principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. This will not validate that the system meets users' needs and expectations."
    },
    {
      questionId: 84,
      correctAnswers: [1,4],
      explanation: "Given the following description of test analysis: To identify the features that require testing, the test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. The systematic identification of test conditions as coverage items often involves using test techniques both during test analysis and as part of the test design activity. From the above description, it can be seen that test techniques are often used in the test analysis and test design activities. Boundary value analysis and equivalence partitioning are test techniques. a) Is not correct. Test implementation is not likely to involve the use of test techniques as it is mostly concerned with assembling test cases into test procedures, while test techniques create test cases. b) Is correct. Test design is likely to involve the use of test techniques to create test cases from test conditions and coverage items. c) Is not correct. Test execution is not likely to involve the use of test techniques as it is mostly concerned with executing test procedures (and so test cases), while test techniques create test cases. d) Is not correct. Test monitoring is not likely to involve the use of test techniques. Test monitoring is mostly concerned with ongoing checks to ensure the plan is being followed, while test techniques create test cases. e) Is correct. Test analysis is likely to involve the use of test techniques to identify test conditions."
    },
    {
      questionId: 85,
      correctAnswers: [0],
      explanation: "Considering each of the listed test activities and their output testware: A. Test analysis - prioritized test conditions (4) (e.g., acceptance criteria), and defect reports for defects identified in the test basis. B. Test design - prioritized test cases, test charters, coverage items (1), test data requirements, and test environment requirements. C. Test implementation - test procedures, automated test scripts, test suites, test data, test execution schedule (3), and test environment elements such as stubs, drivers, simulators, and service virtualizations. D. Test completion - test completion report, documented lessons learned, action items for improvement, and change requests (2) (as product backlog items). a) Is correct. The correct match is: 1B, 2D, 3C, 4A. b) Is not correct. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 86,
      correctAnswers: [2],
      explanation: "a) Is not correct. Although it is correct to say that in Agile software development, some of the test management tasks may be handled by the Agile team itself, the testing role is not primarily the responsibility of a single individual from outside the team. Instead the testing is more likely to be performed by various team members following the whole-team approach. b) Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. So, although this statement is partially correct, it is wrong to say that the testing role is primarily responsible for test monitoring and test control. c) Is correct. In Agile software development, some of the test management tasks may be handled by the Agile team itself. However, for test activities that span multiple teams within an organization, test managers outside of the development team may perform these tasks. d) Is not correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion, while the testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Thus the test management role is not normally responsible for test analysis and test design, although it is correct to say that the testing role is primarily responsible for test implementation and test execution."
    },
    {
      questionId: 87,
      correctAnswers: [1],
      explanation: "a) Is not correct. In the whole-team approach, testers play a vital role by sharing their testing expertise with the team and guiding product development. They collaborate with other team members to achieve the desired quality levels and work with business representatives to create acceptance tests. Testers also partner with developers to determine the optimal test strategy and test automation approaches. b) Is correct. By leveraging the diverse skill sets of each team member most effectively, the whole-team approach fosters superior team dynamics, promotes robust communication and collaboration, and generates a synergistic effect that benefits the entire project. c) Is not correct. The whole-team approach allows any team member with the requisite skills and knowledge to undertake any task, thus specialist team members are not an advantage of this approach. d) Is not correct. There is no specific guidance on the optimum size of teams using the whole-team approach, and there is no suggestion that larger teams are better."
    },
    {
      questionId: 88,
      correctAnswers: [0],
      explanation: "a) Is correct. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases, including cognitive bias. However, the main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship, with testers being blamed for delays and bottlenecks in the release process. b) Is not correct. A developer's familiarity with the code does not mean that they rarely find defects in it, instead this familiarity means they can efficiently find many defects in their own code. And, rather than developers and testers having a shared background, developers having a different background to testers is normally cited as the reason that testers and developers find different kinds of defects. c) Is not correct. Testing can be performed at different levels of independence, ranging from no independence for the author to very high independence for testers from outside the organization. In most projects, multiple levels of independence are utilized. Testers can be in the developer's team and do not need to come from outside the organization. d) Is not correct. Testing can be performed at different levels of independence, however, there is more reason to believe that testers from outside the team are likely to be more isolated from the developers and so are more likely to be blamed for delays in product release."
    },
    {
      questionId: 89,
      correctAnswers: [3],
      explanation: "a) Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, here we are attempting to equate test levels with development levels, and, although we know what is meant by 'test levels', there is no common understanding of the term 'development level'. b) Is not correct. Every software development activity has a corresponding test activity; however test objectives are quite different. For instance, there might be a test objective of ensuring that a test object adheres to a contractual requirement that a certain type of testing must be performed before delivery. c) Is not correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity. However, the same symmetry does not apply to testing and user activities. For instance, for some systems it is difficult to even identify the end users. d) Is correct. Quality control applies to all development activities, meaning that every software development activity has a corresponding test activity."
    },
    {
      questionId: 90,
      correctAnswers: [3],
      explanation: "a) Is not correct. Component Test-Driven Development is not a correct example of a test-first approach to development. b) Is not correct. Integration Test-Driven Development is not a correct example of a test-first approach to development. c) Is not correct. System Test-Driven Development is not a correct example of a test-first approach to development. d) Is correct. Acceptance Test-Driven Development (ATDD) is a well-known example of a test-first approach to development."
    },
    {
      questionId: 91,
      correctAnswers: [1],
      explanation: "a) Is not correct. Practices involved in shift left are aimed at implementing more test activities in the early phases of the software development life cycle (SDLC), portraying the SDLC as moving from left to right. There is no such thing as the left-hand side of the test process. b) Is correct. Shift left emphasizes the importance of starting testing earlier in the SDLC. Implementing shift left testing necessitates additional training, and increased effort and costs during the early phases of the SDLC, nevertheless, overall savings should be higher. c) Is not correct. Although automated component tests and component integration tests for regression testing are generally valuable, the creation of these tests is normally the responsibility of the developers, and this is not part of shift left which moves testing earlier in the SDLC. d) Is not correct. Training testers to perform tasks early in the SDLC would support a shift left approach by emphasizing the importance of starting testing earlier in the SDLC. However, automating more test activities to be performed later in the SDLC is not part of shift-left."
    },
    {
      questionId: 92,
      correctAnswers: [2],
      explanation: "a) Is not correct. One of the purposes of retrospectives is to identify potential process improvements, which, if put into practice, should result in the quality of future outputs of the development process (test objects) being higher. So, this is likely to occur as a result of a retrospective. b) Is not correct. A benefit of retrospectives for testing includes increased test efficiency through process improvements. So, this is likely to occur as a result of a retrospective. c) Is correct. Participants at retrospectives typically include testers, developers, architects, product owners, and business analysts, but end users are rarely invited or attend these meetings — and they are also unlikely to receive any reports from these meetings. So, it is very unlikely that they will learn and understand more about the development and test processes through retrospectives. d) Is not correct. A benefit of retrospectives for testing includes improved quality of testware (including automated test scripts) through joint reviews with developers. So, this is likely to occur as a result of a retrospective."
    },
    {
      questionId: 93,
      correctAnswers: [3],
      explanation: "a) Is not correct. Component testing (also called unit testing) involves testing individual components in isolation and is mostly verification against a specification, rather than validation against user needs. However, this testing is not normally performed by testers, as developers usually carry out this testing in their development environment. b) Is not correct. Component integration testing involves testing the interfaces and interactions between components and is mostly verification against a specification, rather than validation against user needs. This testing is not normally performed by testers, as developers usually carry out this testing. c) Is not correct. System integration testing examines the interfaces with other systems and external services and is mostly verification against a specification, rather than validation against user needs. d) Is correct. Acceptance testing focuses on validating that the system meets the user's business needs and is ready for deployment. Ideally, this testing is carried out by the end users."
    },
    {
      questionId: 94,
      correctAnswers: [1],
      explanation: "a) Is not correct. Confirmation testing to check that the updates have resulted in a correct implementation is necessary, however, it would then be sensible to perform regression testing to ensure that no defects have been introduced or uncovered in unchanged areas of the system. b) Is correct. Confirmation testing will check that the updates have resulted in a correct implementation, and then regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system. c) Is not correct. Regression testing should be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system when the update was made, however it is also necessary to perform confirmation testing that will check that the updates have resulted in a correct implementation. d) Is not correct. Confirmation testing will check that the updates have resulted in a correct implementation, and regression testing will be used to ensure that no defects have been introduced or uncovered in unchanged areas of the system. However, when performed, confirmation testing precedes regression testing."
    },
    {
      questionId: 95,
      correctAnswers: [3],
      explanation: "Considering each of the listed example defects: i. Two different parts of the design specification disagree due to the complexity of the design — this is an example of a specification defect, which includes inconsistencies, ambiguities, contradictions, omissions, inaccuracies, and duplications, which can most easily be found by static testing. ii. A response time is too long and so makes users lose patience — this is an example of a response time defect, which can only be detected in practice by executing the program and measuring the response time, which can most easily be found by dynamic testing. iii. A path in the code cannot be reached during execution — this is an example of a coding defect, which includes variables with undefined values, undeclared variables, duplicated or unreachable code, and excessive code complexity, which can most easily be found by static testing. iv. A variable is declared but never subsequently used in the program — this is an example of a coding defect which can most easily be found by static testing. v. The amount of memory needed by the program to generate a report is too high — this is an example of a performance defect, which can only be detected in practice by executing the program and measuring the memory used, which can most easily be found by dynamic testing. a) Is not correct. b) Is not correct. c) Is not correct. d) Is correct. The correct match for static testing is i, iii, and iv."
    },
    {
      questionId: 96,
      correctAnswers: [0],
      explanation: "a) Is correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. It facilitates early communication of potential quality issues, can prevent misunderstandings about requirements, and ensures that any changes in stakeholder requirements are understood and implemented sooner. b) Is not correct. The feedback is from stakeholders, so providing feedback is unlikely to improve their understanding of their own user requirements. c) Is not correct. Obtaining feedback from stakeholders early and often in the software development process can be highly beneficial. However, because changes in requirements can be understood and implemented sooner, it does not mean that unlimited changes to requirements are encouraged. d) Is not correct. The feedback is from stakeholders and does not cover communication to them."
    },
    {
      questionId: 97,
      correctAnswers: [1],
      explanation: "Considering each of the listed review types: 1. Technical review — This type of review is performed by technically qualified reviewers and led by a moderator. The objectives are to gain consensus and make decisions on technical problems while also evaluating quality and building confidence in the work product, generating new ideas, motivating and enabling authors to improve, and detecting anomalies. 2. Informal review — The main objective is to detect anomalies. The process is not defined and does not require formal documented output. 3. Inspection — This is the most formal review type, and it follows the complete generic review process. The primary objective is to find the most anomalies. The author cannot act as the review leader or scribe. 4. Walkthrough — Led by the author, this type of review serves various objectives such as evaluating quality and building confidence in the work product, educating reviewers, gaining consensus, generating new ideas, motivating and enabling authors to improve, and detecting anomalies. A. Includes objectives such as gaining consensus, generating new ideas, and motivating authors to improve (Technical review - 1). B. Includes objectives such as educating reviewers, gaining consensus, generating new ideas and detecting anomalies (Walkthrough - 4). C. The main objective is detecting anomalies and it requires metrics collection to support process improvement (Inspection - 3). D. The main objective is detecting anomalies and it generates no formal documented output (Informal review - 2). a) Is not correct. b) Is correct. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 98,
      correctAnswers: [1],
      explanation: "a) Is not correct. To ensure successful reviews, it is important to secure management's support for the review process. However that does not mean that they should participate as reviewers. b) Is correct. To ensure successful reviews, it's important to break the work product into parts that are small enough to be reviewed in a reasonable timescale to prevent reviewers from losing focus during individual reviews or review meetings. c) Is not correct. To ensure successful reviews, it's important to clearly define objectives and measurable exit criteria, without evaluating participants. d) Is not correct. To ensure successful reviews, it's important to break down the review into smaller chunks to prevent reviewers from losing focus during individual reviews or review meetings. So you should not plan to cover one document per review."
    },
    {
      questionId: 99,
      correctAnswers: [2],
      explanation: "a) Is not correct. In most cases both black-box test techniques and experience-based test techniques can be used for the same test objects. b) Is not correct. Both black-box test techniques and experience-based test techniques can be used at all test levels. c) Is correct. Black-box test techniques (also known as specification-based techniques) are based on an analysis of the specified behavior of the test object without reference to its internal structure. So, the test basis is usually a specification. Experience-based test techniques effectively use the knowledge and experience of testers for the design and implementation of test cases. This means that the tester, when designing tests, may not use the specification at all. d) Is not correct. Experience-based test techniques can detect defects that may be missed using black-box (and white-box) test techniques. Hence, experience-based test techniques are complementary to black-box test techniques and white-box test techniques and both can be used in all SDLCs."
    },
    {
      questionId: 100,
      correctAnswers: [0],
      explanation: "a) Is correct. Value '12' covers 'length incorrect, too few digits'. Value '1111' covers 'length correct' and 'number of different digits incorrect'. Value '1234' again covers 'length correct' and 'number of different digits correct'. Value '12345' covers 'length incorrect, too many digits'. b) Is not correct. All partitions are covered, however it only covers the lower side of 'length incorrect'. c) Is not correct. There are no values covering 'correct PIN'. d) Is not correct. There are no values covering 'number of different digits'."
    },
    {
      questionId: 101,
      correctAnswers: [3],
      explanation: "The equivalence partitions are: {..., 99, 100}, {101, 102, ..., 198, 199}, {200, 201, ...}. Thus, there are 4 boundary values, which are: 100, 101, 199 and 200. In 2-value BVA, for each boundary value there are two coverage items (the boundary value and its closest neighbor belonging to the adjacent partition). As the closest neighbors are also boundary values in the adjacent partition, then there are just four coverage items. a) Is not correct. Only 100 and 200 are valid coverage items for 2-value BVA, so we achieve 50% coverage. b) Is not correct. Only 100 and 200 are valid coverage items for 2-value BVA, so we achieve 50% coverage. c) Is not correct. Only 100 and 101 are valid coverage items for 2-value BVA, so we achieve 50% coverage. d) Is correct. 101, 199 and 200 are valid coverage items for 2-value BVA, so we achieve 75% coverage."
    },
    {
      questionId: 102,
      correctAnswers: [3],
      explanation: "a) Is not correct. The combination (T, T, F) does not match any rule. This is an example of omission, not a contradiction. b) Is not correct. The combination (T, F, T) matches only one column, R2, so there is no contradiction. c) Is not correct. Both combinations (T, T, T) and (F, T, T) match only one column, R1, so there is no contradiction. d) Is correct. The combination (F, F, F) matches both R2 and R3, but R2 and R3 have different actions, so this shows a contradiction between R2 and R3."
    },
    {
      questionId: 103,
      correctAnswers: [0],
      explanation: "[img:paper-c-q23-exp.png] The following three transitions: \"REQUESTING → CONFIRMED\", \"WAITING LIST → CONFIRMED\", \"WAITING LIST → END\" cannot appear in the same test case, which suggests that at least three test cases are required. All the other transitions can appear in combination with one or more of these three transitions, so we need a minimum of three test cases. In fact, only three sequences are possible: TC1: START (Room request) → REQUESTING (Available) → CONFIRMED (Pay) → END. TC2: START (Room request) → REQUESTING (Not available) → WAITING LIST (Available) → CONFIRMED (Pay) → END. TC3: START (Room request) → REQUESTING (Not available) → WAITING LIST (Cancel) → END. a) Is correct. b) Is not correct. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 104,
      correctAnswers: [2],
      explanation: "In branch testing the coverage items are branches, which are represented by the edges of a control flow graph. There are 8 edges in the control flow graph. a) Is not correct. b) Is not correct. c) Is correct. d) Is not correct."
    },
    {
      questionId: 105,
      correctAnswers: [0],
      explanation: "a) Is correct. Performing only black-box testing does not provide a measure of actual code coverage. White-box coverage measures provide an objective measurement of coverage and provide the necessary information to allow additional tests to be generated to increase this coverage, and subsequently increase confidence in the code. b) Is not correct. This statement is correct, but it has nothing to do with black-box testing. c) Is not correct. In general there are no relationships between white-box test techniques and black-box test techniques. d) Is not correct. White-box test techniques are used to design tests based on the test object itself, while black-box test techniques are used to design tests based on the specification. Therefore, there is no relation between coverage items derived from these two types of test techniques."
    },
    {
      questionId: 106,
      correctAnswers: [1],
      explanation: "a) Is not correct. Exploratory testing uses test charters, not a list of possible defects/failures. Although exploratory testing can incorporate the use of other test techniques, in this case a fault attack is the most likely option. b) Is correct. This is a list of possible failures. Fault attacks are a methodical approach to the implementation of error guessing and require the tester to create or acquire a list of possible errors, defects and failures, and to design tests that will identify defects associated with the errors, expose the defects, or cause the failures. c) Is not correct. The tester is using a checklist of items to support their testing. Both error guessing and checklist-based testing use such lists, however, the list here is of possible failures, not test conditions, and so the MOST PROBABLE test technique is fault attack, which focuses on errors, defects and failures. d) Is not correct. BVA is based on an analysis of boundary values of equivalence partitions. The above list does not mention equivalence partitions or their boundaries."
    },
    {
      questionId: 107,
      correctAnswers: [3],
      explanation: "a) Is not correct. Although it is true that the tester can implement and execute detailed test cases based on the checklist, it does not explain how this would result in increased coverage. b) Is not correct. Checklist items should not be automated. But even if they are, the automated test scripts always execute the tests in the same way, which usually does not result in increased coverage. c) Is not correct. It is true that each checklist item should be tested separately and independently. But this impacts the test execution order and does not impact the achieved coverage, and so does not result in increased coverage. d) Is correct. If the checklists are high-level, some variability in the actual testing is likely to occur, resulting in potentially greater coverage but less repeatability. If two testers follow a checklist of high-level items, each of them may use different test data, test steps, etc. This way, one tester will probably cover some areas not covered by the other tester and this will result in increased coverage."
    },
    {
      questionId: 108,
      correctAnswers: [1],
      explanation: "a) Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to (in this case, the right to be forgotten). This is an example of a rule-oriented acceptance criterion. b) Is correct. This acceptance criterion describes an example scenario that must be realized by the system. This is an example of a scenario-oriented acceptance criterion. c) Is not correct. This sentence looks more like a line of code that implements some business rule. Acceptance criteria should be written in collaboration with business representatives, and therefore should be written in language they understand. This sentence will most likely be unintelligible to these stakeholders. d) Is not correct. This acceptance criterion describes what rules or regulations the system must adhere to and how compliance will be ensured. Therefore, this is an example of a rule-oriented acceptance criterion, not a scenario-based acceptance criterion."
    },
    {
      questionId: 109,
      correctAnswers: [3],
      explanation: "a) Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user. b) Is not correct. We want to check that Special users have the rights of Regular users, so we need to test access rights for a Special user, not for a Regular user. c) Is not correct. There is no floor 5 described in the acceptance criteria. The test cases should not extend the scope of the user story. But even if we would like to perform negative testing, this test is not directly related to AC3. d) Is correct. This is the way we can check if a Special user can access floors which are accessible to a Regular user."
    },
    {
      questionId: 110,
      correctAnswers: [0],
      explanation: "a) Is correct. The test plan may include test data requirements (as part of the test approach), but not the detailed test data for test cases. Test data is part of the test cases, not the test plan. Also, it is usually impossible to define such data when the test plan is created, because it is not exactly known what the components will look like. b) Is not correct. One of the purposes of a test plan is to help ensure that test activities will meet the established criteria, by including entry criteria and exit criteria. The code coverage criteria are an example of such criteria for the component test level. c) Is not correct. Documentation templates are typical content of a test plan. This helps to facilitate communication between the stakeholders by defining a standard way of communicating or reporting. d) Is not correct. One of the purposes of a test plan is to demonstrate that testing will adhere to the existing test policy and test strategy, or to explain why the testing will deviate from them. This is an example of explaining the deviation, regarding the test levels that will be (or will not be) followed."
    },
    {
      questionId: 111,
      correctAnswers: [2],
      explanation: "From the graph we have: A(4)=6 and A(3)=8 (the last two gray boxes). From the formula we obtain: E(5) = (3*A(4) + A(3)) / 4 = (3*6+8) / 4 = 26 / 4 = 6.5 person-days. a) Is not correct. b) Is not correct. c) Is correct. d) Is not correct."
    },
    {
      questionId: 112,
      correctAnswers: [0],
      explanation: "We want to run test cases according to their priorities, but we also need to consider the dependencies. If we only consider priorities, we want to first run TC 5 and TC 7 (highest priority), then TC 1, TC 3, and TC 4, and finally TC 2 and TC 6 (lowest priority). However, in order to run TC 7, we need to first run TC 4. In order to run TC 5, we need to run TC 4 and TC 2, but TC 2 is blocked by TC 1, which should be run prior to TC 2. So, in order to run priority 1 test cases as early as possible, the first five test cases should be: TC 4 - TC 7 - TC 1 - TC 2 - TC 5. Next, we need to run TC 3, because it has higher priority than TC 6. Thus the full schedule will be TC 4 - TC 7 - TC 1 - TC 2 - TC 5 - TC 3 - TC 6. So, the sixth test case will be TC 3. a) Is correct. b) Is not correct. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 113,
      correctAnswers: [1],
      explanation: "a) Is not correct. The test pyramid model does not provide information about test priorities. b) Is correct. The test pyramid model shows that different tests have different levels of granularity. c) Is not correct. The test pyramid model is independent of coverage criteria. d) Is not correct. Test pyramid model does not show any relations between different tests."
    },
    {
      questionId: 114,
      correctAnswers: [3],
      explanation: "a) Is not correct. Testing quadrants group test levels and test types separately according to several criteria. They do not represent any combinations of test levels and test types and they are not related to any location within a software development lifecycle. Both test levels and test types are treated separately in the testing quadrants model. b) Is not correct. Testing quadrants group test levels and test types according to several criteria. They do not describe the degree of granularity of individual test types performed at each test level. Such a model, regarding the test levels, is called the test pyramid. c) Is not correct. The statement is wrong, because in general any test type can be performed at any test level. d) Is correct. The testing quadrants group test levels, test types, test activities, test techniques and work products in Agile software development. In this model, tests can be business facing or technology facing. Tests can support the team (i.e., guide the development) or critique the product (i.e., measure its behavior against expectations). The combination of these two viewpoints determines the four quadrants."
    },
    {
      questionId: 115,
      correctAnswers: [2],
      explanation: "a) Is not correct. Risk monitoring is part of risk control, not risk analysis. b) Is not correct. Risk identification itself does not allow us to implement risk mitigation activities. The mitigating actions are defined during the risk control phase. c) Is correct. This is an example of how risk analysis influences the thoroughness and scope of testing. d) Is not correct. Coverage items are derived using test techniques, not through risk analysis."
    },
    {
      questionId: 116,
      correctAnswers: [1],
      explanation: "a) Is not correct. Test progress reports are mostly used during test monitoring and test control, and test completion, not during test design. b) Is correct. A test completion report is prepared during test completion, when a project, test level, or test type is complete and when, ideally, its exit criteria have been met. This report uses information from test progress reports and other data. c) Is not correct. Test progress reports are mostly used during test monitoring and test control, and test completion, not during test analysis. d) Is not correct. Test progress reports are most used during test monitoring and test control, and test completion, not during test planning."
    },
    {
      questionId: 117,
      correctAnswers: [3],
      explanation: "a) Is not correct. When a user reports a software failure, thanks to the unique identification of commits, it is possible to reassemble the files from the software version which was used by the user (as well as the corresponding versions of the test scripts) and thus reproduce the failure and locate the defect faster. b) Is not correct. If a change to the test environment causes unexpected issues during testing, configuration management allows testers to roll back to a previous version of the environment. This ensures that testing can continue without being affected by the change. c) Is not correct. Configuration management ensures that all identified documentation (e.g., requirement specifications) and software items are referenced unambiguously in test documentation (e.g., test plans). d) Is correct. This is ensured by defect management, not by the configuration management process."
    },
    {
      questionId: 118,
      correctAnswers: [1],
      explanation: "a) Is not correct. This is important, but not as important as test environment elements. b) Is correct. The important thing that is missing is the identification of the browser and device used for the testing. The browser and device information are important because such a defect can be browser- or device-specific. For example, a login button may work fine on one browser (or one version of a specific browser) but not on another. Therefore, the browser and device information can help the developers to reproduce the issue and find the root cause of the problem more quickly. c) Is not correct. The test object is identified (WebShop v0.99). d) Is not correct. The impact is included — this is severity (high)."
    },
    {
      questionId: 119,
      correctAnswers: [3],
      explanation: "a) Is not correct. Test execution and coverage tools facilitate the automated execution of test cases and the measurement of the coverage achieved by running those test cases. However, these tools do not help with the organization of defects and configuration management. b) Is not correct. Test design and test implementation tools facilitate the generation of test cases, test data and test procedures, but they do not help with the organization of defects and configuration management. c) Is not correct. Defect management tools are used to manage defects but are not testing tools and are not used to organize test cases or configuration management. d) Is correct. Test management tools increase the test process efficiency by facilitating the management of the software development lifecycle (SDLC), requirements, tests, defects, and configuration management."
    },
    {
      questionId: 120,
      correctAnswers: [3],
      explanation: "a) Is not correct. 'The capability of generating test cases without access to the test basis' is not possible. The generation of test cases by either testers or tools requires access to the test basis. b) Is not correct. 'The achievement of increased coverage through more objective assessment' is not a direct benefit of test automation. Test automation will provide more objective assessment of coverage, however that objective assessment will not increase the coverage. Only by using the results of the coverage to write further test cases can the coverage possibly be increased. c) Is not correct. 'The increase in test execution times available with higher processing power' is a contradictory statement as higher processing power would normally reduce execution times, and increased execution times are not a benefit as the testing would take longer. d) Is correct. The prevention of human errors through greater consistency and repeatability is a benefit of test automation as test automation cannot suffer from human errors. For instance, it means that tests are consistently derived from requirements, test data is created in a systematic manner, and tests are executed by a tool in the same order with the same frequency."
    }
  ],
  "paper-d": [
    {
      questionId: 121,
      correctAnswers: [3],
      explanation: "a) Is not correct. Finding and fixing defects in the test object is not a typical test objective as although identifying defects is an objective of testing, fixing defects is not a test activity. b) Is not correct. Maintaining effective communications with developers is not a typical test objective although it is useful in achieving other objectives of testing, such as providing stakeholders with information that enables them to make informed decisions. It is not a primary reason for performing testing. c) Is not correct. Validating that legal requirements have been met is not a typical test objective because validation is concerned with checking whether the system meets users' and other stakeholders' needs in its operational environment. Checking that legal requirements have been met is a form of verification. d) Is correct. Building confidence in the quality of the test object is achieved by executing tests that passed."
    },
    {
      questionId: 122,
      correctAnswers: [2],
      explanation: "a) Is not correct. The miscalculation of bonuses is a failure by the system, not a defect. b) Is not correct. The system not suitably supporting disabled users is a failure which eventually results in a fine, but the fine itself is not a failure (it appears to be the correct functioning of the regulatory system). c) Is correct. The error is made by the programmer and this mistake is caused by them working under severe time pressure, which is the root cause of the subsequent defect. d) Is not correct. The poor design of the user interface, which does not suitably address disabled users, is a design defect caused by the designer error. Thus the design of the user interface includes a design defect not a designer error."
    },
    {
      questionId: 123,
      correctAnswers: [0],
      explanation: "a) Is correct. The 'tests wear out' principle is concerned with the idea that repeating identical tests on unaltered code is unlikely to uncover novel defects and therefore, modifying tests may be essential. By using test conditions to generate new tests each time, the tests will not be identical and the risk of the tests wearing out is reduced. b) Is not correct. The 'absence-of-defects fallacy' principle is concerned with ensuring that users' needs are fulfilled even if lots of testing is done and no defects are found (i.e., validation is also necessary). The use of test conditions to generate test cases and execute tests does not directly address this concern. c) Is not correct. The 'early testing saves time and money' principle is concerned with fixing defects early on to prevent the occurrence of subsequent defects in derived work products, thereby reducing costs and the likelihood of failures. d) Is not correct. The 'Defects cluster together' principle is concerned with the distribution of defects in a system, which typically follows a Pareto distribution."
    },
    {
      questionId: 124,
      correctAnswers: [1],
      explanation: "Considering each of the listed test activities and their tasks: A. Test analysis - To identify the features that require testing, the test basis is analyzed and defined as test conditions, which are then prioritized along with related risks. During this test analysis, defects in the test basis are typically uncovered, and the test object's testability may also be assessed. (Task 4). B. Test design - Involves using test conditions to create test cases and other necessary testware, such as test data requirements and test charters for exploratory testing. (Task 1). C. Test implementation - Test procedures, such as manual and automated test scripts, are created from test cases and may be assembled into test suites. Test procedures are prioritized and arranged in a test execution schedule. (Task 3). D. Test completion - Occurs at project milestones, such as release, end of iteration or end of test level. Testware is identified and archived or handed to the appropriate teams for reuse, the test environment is shut down, and the test activities are analyzed for lessons learned and future improvements. (Task 2). a) Is not correct. b) Is correct. The CORRECT match is: 1B, 2D, 3C, 4A. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 125,
      correctAnswers: [0],
      explanation: "Considering each of the listed testware, and the test activity that produces it: i. The test completion report is an output of test completion. ii. Data held in a database used for inputs and expected results is the test data - output of test implementation. iii. The list of elements needed to build the test environment is the test environment requirements - output of test design. iv. Documented sequences of test cases in execution order are the test procedures - output of test implementation. v. Test cases - output of test design. Test implementation produces the following outputs: test procedures (iv), automated test scripts, test suites, test data (ii), test execution schedule, and test environment elements such as stubs, drivers, simulators, and service virtualizations. a) Is correct. Items ii and iv in the list are produced as a result of test implementation. b) Is not correct. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 126,
      correctAnswers: [3],
      explanation: "a) Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing, such as test analysis, test design, test implementation, and test execution. Evaluating the test basis for defects and the test object for testability are tasks performed as part of test analysis, so it is likely they are tasks performed by the testing role. b) Is not correct. The testing role is primarily responsible for the technical and engineering aspects of testing. Defining the test environment requirements is a task performed as part of test design, so it is likely to be a task performed by the testing role. c) Is not correct. Assessing the testability of a test object is a task performed as part of test analysis, so it is likely to be a task performed by the testing role. d) Is correct. The test management role primarily involves activities related to test planning, test monitoring and test control, and test completion. Thus, creating the test completion report, which is the prime output from the test completion, is likely to be a task performed by the test management role."
    },
    {
      questionId: 127,
      correctAnswers: [0],
      explanation: "a) Is correct. The whole team approach promotes robust communication and collaboration between the team members. b) Is not correct. While the whole team approach prioritizes collective accountability for quality, each individual team member is still equally accountable for quality. c) Is not correct. The whole team approach is about how the team works together, with the aim of higher quality deliverables, but it does not necessarily result in faster deployment to end users. d) Is not correct. When using the whole team approach, testers work with business representatives to create acceptance tests. There is no suggestion that the approach will reduce collaboration with external business users."
    },
    {
      questionId: 128,
      correctAnswers: [1],
      explanation: "Considering each of the listed benefits and drawbacks of the independence of testing: i. Ideally, we want close collaboration between testers and developers, which is not increased by isolation. Thus, this is a disadvantage. ii. Testers and developers have varied backgrounds, technical viewpoints, and potential biases, allowing testers to usefully challenge assumptions made by stakeholders during system specification and implementation. Thus, this is an advantage. iii. The main disadvantage of independence of testing is that testers may become isolated from the development team, leading to communication problems, a lack of collaboration, and potentially an adversarial relationship. Thus, this is a disadvantage. iv. One of the disadvantages of independence of testing is that testers may become isolated from the development team, leading to developers feeling less accountable for quality. Thus, this is a disadvantage. v. The primary benefit of independence of testing is that testers are more likely to identify different types of failures and defects compared to developers, due to their varied backgrounds, technical viewpoints, and potential biases. a) Is not correct. b) Is correct. The list entries showing benefits are ii and v. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 129,
      correctAnswers: [0],
      explanation: "a) Is correct. Each test level has specific and distinct test objectives as a different form of test object (e.g., single component and complete system) is tested at each test level and overlapping test objectives would lead to unnecessary duplication. b) Is not correct. Test analysis and test design for a given test level should start during the corresponding development phase to facilitate early testing. c) Is not correct. Test design for a given test level should start during the corresponding development phase to facilitate early testing, however test design needs to be based on an agreed test basis, not an early draft. d) Is not correct. Quality control applies to all development activities, however the same symmetry does not apply to dynamic testing and static testing."
    },
    {
      questionId: 130,
      correctAnswers: [0],
      explanation: "a) Is correct. Behavior-Driven Development (BDD) is a well-known example of a test-first approach to development. b) Is not correct. Test Level Driven Development is not a correct example of a test-first approach to development. c) Is not correct. Function-Driven Development is not a correct example of a test-first approach to development. d) Is not correct. Performance-Driven Development is not a correct example of a test-first approach to development."
    },
    {
      questionId: 131,
      correctAnswers: [3],
      explanation: "a) Is not correct. DevOps generally increases the visibility of non-functional quality characteristics, such as performance and reliability. b) Is not correct. Automated processes like continuous integration/continuous delivery (CI/CD) used in DevOps facilitate stable test environments. c) Is not correct. Automated processes like CI/CD used in DevOps generally reduce the need for manual testing. d) Is correct. DevOps implementation can pose several risks and challenges, including the need to define and set up the delivery pipeline, introduce and maintain CI/CD tools, and establish and maintain test automation."
    },
    {
      questionId: 132,
      correctAnswers: [1],
      explanation: "a) Is not correct. The benefits of retrospectives include team bonding and learning from sharing issues, and better collaboration between developers and testers through reviewing and improving working practices. Calling out individuals will not contribute to this team bonding and collaboration. b) Is correct. During the retrospective, the group discusses what aspects of the project were successful and should be retained, as well as areas that could be improved, and how to do so. c) Is not correct. The benefits of retrospectives are based on increased effectiveness and efficiency through process improvements; they are not an opportunity to let off steam and criticize management and customers. d) Is not correct. Retrospectives are meetings that are typically held at the end of an iteration where team members will focus on discussing quality-related issues that have occurred in the current iteration. They are not used for making plans or technical decisions for the next iteration."
    },
    {
      questionId: 133,
      correctAnswers: [0],
      explanation: "a) Is correct. Checking that the sort function puts the elements of the list or array in ascending order is evaluating the functional correctness of the sort function, which is part of functional testing. b) Is not correct. Assessing whether the sort function meets its non-functional requirement to complete within one second is part of testing its performance efficiency, which is part of non-functional testing. c) Is not correct. Evaluating the ease with which the sort function can be modified from sorting ascending to sorting descending is testing its modifiability, a form of non-functional maintainability testing. d) Is not correct. Assessing that the sort function still functions correctly when moved from a 32-bit to a 64-bit architecture is testing its adaptability, a form of portability testing."
    },
    {
      questionId: 134,
      correctAnswers: [1],
      explanation: "a) Is not correct. Assuming that testers could check the ease of changing the currency exchange system then it would be done by maintainability testing rather than maintenance testing, so this is not a trigger for maintenance testing. b) Is correct. A system modification (such as a fix or enhancement) is an example of a trigger for maintenance testing. The removal of the refund option of the currency exchange system was a fix that would lead to maintenance testing. c) Is not correct. If the agile team has started developing a user story that adds a new customer loyalty feature, then this will result in them testing the new feature, and then they would perform regression testing. No maintenance testing is required. d) Is not correct. Reconfiguration of the currency exchange system to support both the local language and English currency transactions is not a system modification, a change to the operational environment, or a system retirement, which are the three triggers for maintenance testing."
    },
    {
      questionId: 135,
      correctAnswers: [2],
      explanation: "a) Is not correct. Most work products can be examined using some form of static testing, and a contract must be interpretable by humans and so could be reviewed, which is a form of static testing. b) Is not correct. Most work products can be examined using some form of static testing, and a test plan must be interpretable by humans and so could be reviewed. c) Is correct. Most work products can be examined using some form of static testing; however it is not suitable for work products that are too complex for human interpretation and should not be analyzed by tools, and encrypted code is too complex for humans and if it is properly encrypted it will not be analyzable by most tools. d) Is not correct. Most work products can be examined using some form of static testing, and a test charter must be interpretable by humans and so could be reviewed."
    },
    {
      questionId: 136,
      correctAnswers: [2],
      explanation: "Some defect types that can only be detected by static testing, such as unreachable code, design patterns not implemented as desired and defects in non-executable work products. Some defect types that can be found by both static testing and dynamic testing, such as a programming defect that can be observed by a reviewer in a code review and which causes an observable failure during dynamic testing. And some defect types that can only be detected by dynamic testing, such as performance issues or memory issues that can only be observed when executing the code or system. a) Is not correct. b) Is not correct. c) Is correct. d) Is not correct."
    },
    {
      questionId: 137,
      correctAnswers: [1],
      explanation: "The five listed descriptions and the corresponding review process activities are: 1. This describes part of the 'communication and analysis' activity. 2. This describes part of the 'fixing and reporting' activity. 3. This describes part of the 'individual review' activity. 4. This describes part of the 'planning' activity. 5. This describes part of the 'review initiation' activity. The generic review process from ISO/IEC 20246 comprises the following activities in this logical order: Planning (4), Review initiation (5), Individual review (3), Communication and analysis (1), Fixing and reporting (2). a) Is not correct. b) Is correct. The correct sequence of activities is: 4 - 5 - 3 - 1 - 2. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 138,
      correctAnswers: [1],
      explanation: "a) Is not correct. The manager is responsible for deciding what needs to be reviewed and allocating resources, such as staff and time, for the review. b) Is correct. The moderator (or facilitator) is responsible for ensuring that the review meetings run effectively, including managing time, mediating discussions, and creating a safe environment where everyone can voice their opinions freely. c) Is not correct. The chairperson is not a recognized role in reviews. d) Is not correct. The review leader is responsible for overseeing the review process, such as selecting the review team members, scheduling review meetings, and ensuring that the review is completed successfully."
    },
    {
      questionId: 139,
      correctAnswers: [1],
      explanation: "a) Is not correct. The document does not refer to the test object's internal structure but specifies the desired behavior of the test object. Therefore, white-box test techniques will not be helpful in designing test cases. b) Is correct. The document is a requirement that specifies the desired behavior of the test object. Therefore, the most suitable test techniques in this case are the black-box test techniques (e.g., Boundary Value Analysis or Decision Table Testing). c) Is not correct. Although experience-based test techniques can be used to design test cases based on this document, black-box test techniques will be more suitable. The document describes a precise business rule and wording like 'exceeds $100' suggests the existence of important equivalence partition boundaries. d) Is not correct. Risk-based test techniques are not a recognized type of test technique."
    },
    {
      questionId: 140,
      correctAnswers: [1, 4],
      explanation: "There are two equivalence partitions that are not yet covered, which correspond to 'student discount' and 'pensioner discount'. a) Is not correct. CY - BY = 64, so these inputs correspond to the already covered 'no discount' partition. b) Is correct. CY - BY = 65, so these inputs correspond to a partition that is not yet covered ('pensioner discount'). c) Is not correct. CY - BY = -65, so these inputs correspond to the already covered 'error message' partition. d) Is not correct. CY - BY = 18, so these inputs correspond to the already covered 'no discount' partition. e) Is correct. CY - BY = 0, so these inputs correspond to a partition that is not yet covered ('student discount')."
    },
    {
      questionId: 141,
      correctAnswers: [2],
      explanation: "There are three equivalence partitions: {..., -2, -1}, {0, 1, 2}, {3, 4, ...}. For 2-value BVA all the boundary values for all the equivalence partitions must be covered. The boundary values are -1 (for the 'temperature too low' partition), 0, 2 (for the 'temperature OK' partition) and 3 (for the 'temperature too high' partition). a) Is not correct. b) Is not correct. c) Is correct. The correct option is: -1, 0, 2, 3. d) Is not correct."
    },
    {
      questionId: 142,
      correctAnswers: [0],
      explanation: "Test cases TC1, TC2, TC3 and TC4 cover, respectively, rules R2, R3, R7 and R6 in the decision table. a) Is correct. The conditions '66-year-old', 'unregistered' and 'no experience' match rule R4, which is not covered by the existing test cases, so after adding this test case, the decision table coverage will increase. b) Is not correct. The conditions '55-year-old', 'unregistered' and '2 years of experience' match rule R2, already covered by TC1. So adding this test case will not increase the coverage. c) Is not correct. The conditions '19-year-old', 'registered' and '5 years of experience' match rule R6, already covered by TC4. So adding this test case will not increase the coverage. d) Is not correct. The existing test cases cover only 4 out of 7 columns of the decision table. The coverage can be increased by adding test cases that cover yet uncovered columns, that is, R1, R4 and R5."
    },
    {
      questionId: 143,
      correctAnswers: [1],
      explanation: "a) Is not correct. This sequence of five events covers 4 different valid transitions (both 'NotAvailable' events correspond to the same transition between S1 and S3). This test case covers 4 out of 7 valid transitions. b) Is correct. This sequence of five events covers 5 different transitions (the first 'Available' event corresponds to a transition between S1 and S2, and the second 'Available' event corresponds to a transition between S3 and S2, so two different transitions are covered). This test case covers 5 out of 7 valid transitions and achieves the highest valid transitions coverage. c) Is not correct. This sequence of five events covers 3 different transitions (both 'Available' events correspond to the same transition from S1 to S2; both 'ChangeRoom' events correspond to the same transition from S2 to S1). d) Is not correct. This sequence of five events does not represent a feasible test case, because after 'Cancel' the system ends up in the End state and no further valid transitions can be executed."
    },
    {
      questionId: 144,
      correctAnswers: [2],
      explanation: "a) Is not correct. A statement with a defect, when executed, does not have to cause a failure. For example, a statement x := y / z will cause a failure only when z equals 0. b) Is not correct. 100% statement coverage does not guarantee 100% branch coverage. For example, a test case with x=0 for the code IF (x=0) THEN A; ENDIF achieves 100% statement coverage but does not cover the branch from 1 to 3. c) Is correct. 100% statement coverage means that each executable statement was executed at least once. d) Is not correct. The removed test case may provide coverage of some statements that are not covered by either of the other two test cases, in which case the remaining two test cases together will not achieve 100% statement coverage."
    },
    {
      questionId: 145,
      correctAnswers: [0],
      explanation: "a) Is correct. A fundamental strength that all white-box test techniques share is that the entire software implementation is taken into account during testing, which facilitates defect detection even when the software specification is vague, outdated or incomplete. This means white-box testing can find defects such as an extra feature added to the code (either accidentally or deliberately) that is not supposed to be there, which black-box testing cannot detect. b) Is not correct. The fact that the coverage can be precisely defined is not the right reason. The achieved level of coverage would have much more impact than the possibility to measure the coverage. c) Is not correct. If the software does not implement one or more requirements, white-box testing is unlikely to detect the resulting defects of omission. d) Is not correct. While this is true, there is no connection between the capability to be used in both static testing and dynamic testing and the claim that white-box testing facilitates defect detection with poor specifications."
    },
    {
      questionId: 146,
      correctAnswers: [2],
      explanation: "Error guessing is about anticipating the errors, defects and failures based on the tester's knowledge. a) Is not correct. This is an example of anticipating the developer's error. b) Is not correct. This is an example of anticipating the defect. c) Is correct. This is an example of a potential root cause of a defect, which is neither an error, defect nor failure, and difficult for the tester to anticipate. d) Is not correct. This is an example of anticipating a failure, perhaps based on experience of previous systems in this application domain."
    },
    {
      questionId: 147,
      correctAnswers: [3],
      explanation: "a) Is not correct. In exploratory testing, test cases are usually created during the exploratory testing session, alongside test analysis, test implementation and test execution. b) Is not correct. In exploratory testing, tests are simultaneously designed, executed, and evaluated while the tester learns about the test object. c) Is not correct. Exploratory test results depend heavily on the tester's experience. Even if the test results of exploratory testing can be used as a predictor of risk, they are not a good example of reliable defect prediction models that can predict the number of remaining defects. d) Is correct. During exploratory testing, the testers can use any test techniques that they find useful."
    },
    {
      questionId: 148,
      correctAnswers: [3],
      explanation: "a) Is not correct. Planning poker can estimate effort for a user story that is already written. It does not help in understanding what should be delivered. b) Is not correct. Reviews are not a collaborative user story writing practice. c) Is not correct. Iteration planning is a project-related practice, used to plan the work, not to understand what needs to be delivered. d) Is correct. Conversation explains how the software will be used and often allows the team to define meaningful acceptance criteria, thus obtaining a shared vision of what should be delivered."
    },
    {
      questionId: 149,
      correctAnswers: [0],
      explanation: "a) Is correct. This test case is related to acceptance criteria 2 and 3, because we check if we can set price range (acceptance criterion 2) and if the results update dynamically after adjusting the price range filter (acceptance criterion 3). b) Is not correct. This test case is not related to any of the acceptance criteria. It checks if the filter dynamically sets the default minimum and maximum price range, and not that a customer can do it. c) Is not correct. This test case is not related to any of the acceptance criteria. It checks the currency exchange feature, which is not discussed in this user story. d) Is not correct. This test case is not related to any of the acceptance criteria. It checks the application's compatibility with different browsers, which is not discussed in this user story."
    },
    {
      questionId: 150,
      correctAnswers: [1, 3],
      explanation: "a) Is not correct. The approval of the budget is an example of an entry criterion. It would make no sense to approve the budget for some activity that has already been done. b) Is correct. Running out of budget can be viewed as a valid exit criterion. c) Is not correct. Availability of resources is an example of an entry criterion for testing. d) Is correct. Coverage is a measure of thoroughness, so it is a typical exit criterion. e) Is not correct. This is an example of an entry criterion, checked before the project starts."
    },
    {
      questionId: 151,
      correctAnswers: [0],
      explanation: "Using the three-point estimation technique, the final estimate (E) is calculated as: E = (a + 4*m + b) / 6, where a is the most optimistic estimate, m is the most likely estimate, and b is the most pessimistic estimate. a) Is correct. In this case, the estimate for executing a single test case is: E = (1h + 4*3h + 8h) / 6 = 3.5 hours. So, the total time needed for the tester to execute 4 test cases is: 3.5h * 4 = 14 hours. b) Is not correct. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 152,
      correctAnswers: [1],
      explanation: "TC1 achieves the highest coverage (4/7 - Req1, Req3, Req4 and Req7), so should be executed first. Req2, Req5 and Req6 are still not covered. The next test case that achieves the highest additional coverage of the remaining requirements is TC3, covering 2 out of these 3 requirements (Req5 and Req6). So, TC3 should be executed as the second one. Now the only requirement still not covered is Req2, which is covered by TC4. Therefore, TC4 should be executed as the third test case. So, the last test case executed will be TC2. a) Is not correct. b) Is correct. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 153,
      correctAnswers: [2],
      explanation: "a) Is not correct. Testing quadrants have nothing to do with describing the relationships between test levels. b) Is not correct. Testing quadrants cannot help in assessing any type of coverage. c) Is correct. Testing quadrants allow managers and other stakeholders to understand the relationships between test types, the activities they support (team support or product critique), and the viewpoint they are focused on (business- or technology-facing). d) Is not correct. Testing quadrants is not a psychological model."
    },
    {
      questionId: 154,
      correctAnswers: [1],
      explanation: "Risk assessment can use a quantitative or qualitative approach, or a mix of them. In the quantitative approach the risk level is calculated as the multiplication of risk likelihood and risk impact. So, Risk level = Risk likelihood * Risk impact. Then, Risk impact = Risk level / Risk likelihood. In our case, Risk impact = $1,000 / 50% = $1,000 / 0.5 = $2,000. a) Is not correct. b) Is correct. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 155,
      correctAnswers: [1, 4],
      explanation: "a) Is not correct. Scope creep is an example of a project risk related to technical issues. b) Is correct. Poor architecture is an example of a product risk since it refers to a product characteristic. c) Is not correct. Cost-cutting is an example of a project risk, related to organizational issues. d) Is not correct. Poor tool support is an example of a project risk related to technical issues. e) Is correct. Response time that is too long is an example of a product risk since it refers to a product characteristic."
    },
    {
      questionId: 156,
      correctAnswers: [2],
      explanation: "a) Is not correct. Tracking test progress and identifying areas that require further attention is an example of supporting the ongoing control of testing. This is one of the purposes of test reports. b) Is not correct. Providing information on the tests executed, their test results, and any defects found is an example of summarizing the test activities performed at a given test level. This is one of the purposes of test reports. c) Is correct. Providing information about defects is the purpose of a defect report, not a test report. d) Is not correct. Providing information on testing planned for the next period is one of the purposes of test reports."
    },
    {
      questionId: 157,
      correctAnswers: [3],
      explanation: "a) Is not correct. Risk management consists of risk analysis and risk control. Neither of these activities supports the reassembly of the files that made up the release, because these activities deal with risks, not with configuration items. b) Is not correct. Test monitoring is concerned with gathering information about testing to assess test progress and measure whether the exit criteria are satisfied. None of these activities deal with the management of configuration items. c) Is not correct. The whole team approach builds on the tester's skill to work effectively in a team context and to contribute positively to the team goals. So, it focuses on team-related issues, not on configuration items. d) Is correct. Configuration management provides a discipline for identifying, controlling, and tracking work products. Configuration management keeps a record of changed configuration items when a new baseline is created. Using configuration management, it is possible to revert to a previous baseline in order to reproduce previous test results."
    },
    {
      questionId: 158,
      correctAnswers: [0],
      explanation: "a) Is correct. Adding this information allows the developer to use the same input data, so it is more likely they will be able to reproduce the failure quickly and so identify the defect faster. b) Is not correct. Adding the value of Priority will not help in reproducing the defect itself. c) Is not correct. Although some of this information may be of value, adding the memory dumps and database snapshots after each step will be too much, because most of these artefacts will contain useless information for the developer, and make the defect report less readable. d) Is not correct. The question was about helping the developer to reproduce the failure for a specific environment configuration."
    },
    {
      questionId: 159,
      correctAnswers: [1],
      explanation: "Considering each of the listed tool categories: i. Collaboration tools - facilitate communication. Communication does not include the facilitation of test execution. ii. DevOps tools - support the DevOps delivery pipeline, workflow tracking, automated build process(es) and CI/CD. The delivery pipeline and CI/CD both include the facilitation of test execution, such as component testing for CI. iii. Management tools - increase the test process efficiency by facilitating management of the SDLC, requirements, tests, defects and configuration. The management of these items does not include the facilitation of test execution. iv. Non-functional testing tools - allow the tester to perform non-functional testing that is difficult or impossible to perform manually. Non-functional testing can include both static testing and dynamic testing, including test execution. v. Test design and implementation tools - facilitate generation of test cases, test data and test procedures. The generation of this testware does not include the facilitation of test execution. a) Is not correct. b) Is correct. Both DevOps tools (ii) and Non-functional testing tools (iv) facilitate test execution. c) Is not correct. d) Is not correct."
    },
    {
      questionId: 160,
      correctAnswers: [2],
      explanation: "a) Is not correct. The detection of additional high-severity defects would be a benefit of test automation, rather than a risk. b) Is not correct. The provision of measures that are too complicated for humans to derive themselves is normally considered to be a benefit of test automation. c) Is correct. If the test automation is incompatible with the development platform, then it will not be able to integrate them, and, for instance, pass test inputs to the test object and receive test results from the test object. d) Is not correct. Substantially reduced test execution times would normally be considered a benefit that is provided by test automation."
    },
  ]
};
