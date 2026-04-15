import re

with open('questions.txt', 'r') as f:
    text = f.read()

# Try to extract questions from text
q_blocks = re.split(r'Question #\d+\s*\(\d+\s*Point[s]?\)', text)

questions = []
for i, block in enumerate(q_blocks[1:], 1):
    lines = [line.strip() for line in block.split('\n') if line.strip()]
    if not lines:
        continue
    
    text = ""
    options = []
    
    in_options = False
    opt_labels = ['a)', 'b)', 'c)', 'd)', 'e)']
    
    for line in lines:
        if line.startswith('Select ONE option.') or line.startswith('Select TWO options.'):
            continue
            
        is_opt = False
        for label in opt_labels:
            if line.startswith(label) or (len(line) > 2 and line[:2] in [l[:2] for l in opt_labels]):
                is_opt = True
                in_options = True
                break
                
        if is_opt:
            options.append(line[3:].strip())
        elif in_options and options:
            options[-1] += " " + line
        else:
            text += line + " "
            
    questions.append({
        'id': i,
        'text': text.strip(),
        'options': options
    })
    
    if i <= 2:
        print(f"Q{i}: {text.strip()}")
        print(f"Opts: {options}")

print(f"Parsed {len(questions)} questions")

with open('answers.txt', 'r') as f:
    ans_text = f.read()

# Parse answers
ans_blocks = re.split(r'\n\s*\d+\s+', '\n' + ans_text)
answers = []

for block in ans_blocks[1:]:
    lines = [line.strip() for line in block.split('\n') if line.strip()]
    if not lines:
        continue
        
    # The first line usually contains the correct option letter(s)
    first_line = lines[0]
    correct_opts = []
    
    # Try to find a, b, c, d, e
    if 'a' in first_line.lower(): correct_opts.append(0)
    if 'b' in first_line.lower(): correct_opts.append(1)
    if 'c' in first_line.lower(): correct_opts.append(2)
    if 'd' in first_line.lower(): correct_opts.append(3)
    if 'e' in first_line.lower(): correct_opts.append(4)
    
    if correct_opts:
        answers.append(correct_opts)

print(f"Parsed {len(answers)} answers")
if answers:
    print(f"First few answers: {answers[:3]}")

