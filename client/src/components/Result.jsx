import React from 'react';
import axios from 'axios';

function Result({ questions, fileName }) {
  console.log(questions);
  const [resume, setResume] = React.useState('');
  const [pdfLink, setPdfLink] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  function findCorrectAnswer(options) {
    for (let i = 0; i < options.length; i++) {
      if (options[i].correct) {
        return i;
      }
    }
  }
  function calculateScore() {
    let score = 0;
    questions.forEach((question) => {
      if (question.selected === findCorrectAnswer(question.options)) {
        score += 1;
      }
    });
    return score;
  }
  async function getResume() {
    const wrong_questions = questions
      .filter(
        (question) => question.selected !== findCorrectAnswer(question.options)
      )
      .map((q) => q.question)
      .join('\n');
    const form = new FormData();
    form.append('file_path', fileName);
    form.append('wrong_questions', wrong_questions);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/resume`,
        form
      );
      setResume(res.data.response);
      setPdfLink(res.data.pdf_path);
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  React.useEffect(() => {
    getResume();
  }, []);

  return (
    <div className='flex flex-col gap-5'>
      <h3 className='text-2xl'>Your score {calculateScore()}/10 </h3>
      <h5 className='font-semibold text-md'>
        Here is a small summary that can help you{' '}
      </h5>
      {!loading && <p>{resume}</p>}
      {loading && (
        <div className='flex flex-col gap-3'>
          <div className='bg-[#888] w-[50%] py-2 animate-pulse	'></div>
          <div className='bg-[#888] w-[100%] py-2 animate-pulse	'></div>
          <div className='bg-[#888] w-[100%] py-2 animate-pulse	'></div>
          <div className='bg-[#888] w-[100%] py-2 animate-pulse	'></div>
          <div className='bg-[#888] w-[100%] py-2 animate-pulse	'></div>
        </div>
      )}
      <a
        download={true}
        href={import.meta.env.VITE_BACKEND_URI + '/' + pdfLink}
        className=' rounded-md w-full py-2 bg-secondary font-semibold text-main '
      >
        Download summary as pdf
      </a>
    </div>
  );
}

export default Result;
