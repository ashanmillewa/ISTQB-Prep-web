import re

with open('./client/src/data/questions.ts', 'r') as f:
    content = f.read()

old_str = """      id: 5,
      text:
        "Which of the following factors have a SIGNIFICANT influence on the test approach?\\n\\n" +
        "i. The SDLC\\n" +
        "ii. The number of defects detected in previous projects\\n" +
        "iii. The identified product risks\\n" +
        "iv. New regulatory requirements forcing formal white-box testing\\n" +
        "v. The test environment setup",
      options: ["""

new_str = """      id: 5,
      text: "Which of the following factors have a SIGNIFICANT influence on the test approach?",
      image: "/src/assets/images/question-5.png",
      options: ["""

if old_str in content:
    content = content.replace(old_str, new_str)
    with open('./client/src/data/questions.ts', 'w') as f:
        f.write(content)
    print("Success")
else:
    print("String not found")

