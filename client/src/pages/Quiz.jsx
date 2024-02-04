import React from 'react';
import Start from '../components/Start';
import Loading from '../components/Loading';
import Questions from '../components/Questions';
import Result from '../components/Result';
import axios from 'axios';
function Quiz() {
  const [file, setFile] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentState, setCurrentState] = React.useState(0);
  const [questions, setQuestions] = React.useState([]);
  const [fileName, setFileName] = React.useState('');
  const steps = [
    <Start file={file} setFile={setFile} upload={upload} />,
    <Questions
      currentState={currentState}
      setCurrentState={setCurrentState}
      questions={questions}
      setQuestions={setQuestions}
    />,
    <Result questions={questions} fileName={fileName} />,
  ];
  async function upload() {
    console.log(file);
    setIsLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URI}/upload`,
        formData
      );
      if (res.data.ok === false) {
        alert('Please upload a valid file');
        setIsLoading(false);
      } else {
        setFileName(res.data.file_name);
        setQuestions(res.data.response);
        setFile(res.data.response);
        setCurrentState((prev) => prev + 1);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='border-2 border-primary rounded-md   flex flex-col relative gap-5 items-center w-[90%] md:w-[45%]  focus:bg-primary transition-all duration-300 ease-in-out    active:shadow-lg py-3 px-5 shadow-lg'>
        {isLoading ? <Loading /> : steps[currentState]}
      </div>
    </div>
  );
}

export default Quiz;
