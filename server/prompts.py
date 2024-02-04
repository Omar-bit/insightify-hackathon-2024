
question_prompt = '''Please write a quiz that asks releavant questions based on the file bellow.

The response should be a JSON string that looks like this:
[
    {
        "question": "[question releavant to the material]",
        "options":[
            {
                "text": "[An answer option]",
                "correct": false
            },
            {
                "text": "[An answer option]",
                "correct": true
            }
        ],
        "explanation": "[an explanation of the answer (200 words max)]",
        "difficulty": [a number between 1 and 5 representing the difficulty of the question],
        "chapter": "[a simple title showing what chapter/part of the file the question is from]"
    }
]

Rules:
1- Only output the JSON string, nothing else.
2- There should be 4 answer options for each question.
3- Only one option should be correct.
4- There should be 10 questions.

File:
```
'''

resume_prompt = '''Please write a summary of the following file that focuses on these questions:
{questions} 

Rules:
1- Only respond with the summary, nothing else.
2- Limit the summary to 500 words max.
3- You can use <strong></strong> to emphasize a portion of the resume.
4- Use <br> for line breaks.

File:
```
{file}
```
'''

resume_standalone_prompt = '''Please write a summary of the following file.

Rules:
1- Only respond with the summary, nothing else.
2- Limit the summary to 500 words max.

File:
```
{file}
```
'''