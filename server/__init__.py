from flask import Flask, render_template, request, jsonify
from PyPDF2 import PdfReader
import os
from werkzeug.utils import secure_filename
import openai
from dotenv import load_dotenv
import os, json
from prompts import question_prompt, resume_prompt, resume_standalone_prompt
from flask_cors import CORS
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas
import random
import string


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


UPLOAD_FOLDER = 'static/uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

load_dotenv()

openai.api_type = "azure"
openai.api_base = os.getenv("AZURE_OPENAI_ENDPOINT") 
openai.api_key = os.getenv("AZURE_OPENAI_KEY")
openai.api_version = "2023-05-15"


def LLM_call(prompt):
    prompt = prompt[:17576]

    response = openai.ChatCompletion.create(
    engine="testing-po-3-5",
    temperature=.2,
    messages=[
        {"role": "system", "content": "You are a world-class teacher and quiz creator."},
        {"role": "user", "content": prompt},
        ])

    return response['choices'][0]['message']['content']


def create_pdf_from_string(text):
    name = generate_random_string(8)
    c = canvas.Canvas(f'{UPLOAD_FOLDER}\\{name}.pdf', pagesize=letter)
    c.setFont("Helvetica", 12)
    lines = text.split('\n')
    y = 750
    x = 100
    line_height = 15
    max_width = 400  
    for line in lines:
        words = line.split()
        line_to_draw = ''
        for word in words:
            if c.stringWidth(line_to_draw + ' ' + word) < max_width:
                line_to_draw += ' ' + word if line_to_draw else word
            else:
                c.drawString(x, y, line_to_draw)
                y -= line_height
                line_to_draw = word
        if line_to_draw:  
            c.drawString(x, y, line_to_draw)
            y -= line_height
    c.save()
    return f'{UPLOAD_FOLDER}\\{name}.pdf'


def generate_random_string(length):
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for _ in range(length))


@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        return render_template('index.html', message='No file part')
    
    file = request.files['file']
    
    if file.filename == '':
        return render_template('index.html', message='No selected file')
    
    if not file:
        return 'No file'
        
    try:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        reader = PdfReader(file_path)
        text = ''

        for i in range(len(reader.pages)):
            page = reader.pages[i]
            text += page.extract_text()

        response = LLM_call(question_prompt + text + '```')

        return jsonify({'ok': True, 'response': json.loads(response), 'file_name': file_path})
    except Exception as e:
        return jsonify({'ok': False, 'error': 'Error processing PDF file: {}'.format(str(e))})


@app.route('/resume', methods=['POST'])
def resume():

    wrong_questions = request.form.get('wrong_questions', '')
    file_path = request.form.get('file_path', '')
    
    reader = PdfReader(file_path)
    text = ''

    for i in range(len(reader.pages)):
        page = reader.pages[i]
        text += page.extract_text()

    resume_prompt_filled = resume_prompt.replace('{questions}', wrong_questions).replace('{file}', text)

    response = LLM_call(resume_prompt_filled)
    print(response)

    pdf_path = create_pdf_from_string(response)

    return jsonify({'ok': True, 'response': response, 'file_name': file_path, 'pdf_path': pdf_path})


@app.route('/resume_standalone', methods=['POST'])
def resume_standalone():

    if 'file' not in request.files:
        return render_template('index.html', message='No file part')
    
    file = request.files['file']
    
    if file.filename == '':
        return render_template('index.html', message='No selected file')
    
    if not file:
        return 'No file'
        
    try:
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        reader = PdfReader(file_path)
        text = ''

        for i in range(len(reader.pages)):
            page = reader.pages[i]
            text += page.extract_text()

        response = LLM_call(resume_standalone_prompt.replace('{file}', text))

        return jsonify({'ok': True, 'response': response, 'file_name': file_path})
    except Exception as e:
        return jsonify({'ok': False, 'error': 'Error processing PDF file: {}'.format(str(e))})
    

if __name__ == '__main__':
    app.run(debug=True)
