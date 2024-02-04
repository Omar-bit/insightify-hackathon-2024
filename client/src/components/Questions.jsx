import React from 'react';
import { FaPepperHot, FaLightbulb } from 'react-icons/fa';

function Questions({ questions, setQuestions, currentState, setCurrentState }) {
  const [current, setCurrent] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = React.useState(false);

  const diff = [];
  for (let i = 0; i < 5; i++) {
    if (i < questions[current]?.difficulty)
      diff.push(<FaPepperHot key={i} className='text-2xl text-[red]' />);
    else diff.push(<FaPepperHot key={i} className='text-2xl text-[#333]' />);
  }
  function selectOption(index) {
    const newQuestions = [...questions];
    newQuestions[current].options[index].selected = true;
    setQuestions(newQuestions);
  }
  function checkAnswers() {
    const newQuestions = [...questions];
    newQuestions[current].selected = selected;
    setQuestions(newQuestions);
  }
  React.useEffect(() => {
    const newQuestions = [...questions];
    newQuestions[current].selected = selected;
    setQuestions(newQuestions);
  }, [selected]);

  return (
    <>
      <div className='w-full flex items-center justify-between p-3'>
        <h3 className='text-lg font-semibold'>Question {current + 1}</h3>
        <h3 className='text-xl font-bold text-primary '>Quiz</h3>
        <div className='flex gap-2'>{diff}</div>
      </div>
      <h4 className='w-full text-lg text-left'>
        {questions[current]?.question}
      </h4>
      <div className='flex flex-col items-center justify-center gap-5 w-[100%] '>
        {!isAnswerChecked &&
          questions[current].options.map((option, index) => (
            <button
              key={index}
              className={`w-full border rounded-md py-5 px-3 ${
                selected === index ? 'bg-primary text-main' : ''
              }`}
              onClick={() => {
                setSelected(index);
              }}
            >
              {option.text}
            </button>
          ))}

        {isAnswerChecked &&
          questions[current].options.map((option, index) => (
            <div
              key={index}
              className={`w-full border rounded-md py-5 px-3  ${
                selected === index && !option.correct
                  ? 'bg-[red] text-main'
                  : selected === index && option.correct
                  ? 'bg-[green] text-main'
                  : ''
              } ${option.correct ? 'border-2 border-[green]' : ''}`}
            >
              <p
                className={`text-center ${
                  option.correct && option.selected === index
                    ? 'font-bold  text-main'
                    : ''
                } `}
              >
                {option.text}
              </p>
            </div>
          ))}
        {isAnswerChecked && (
          <div className='flex items-center gap-3 w-full '>
            <FaLightbulb className='text-secondary text-2xl' />
            <p>{questions[current].explanation}</p>
          </div>
        )}
      </div>
      <div className='flex items-center gap-5 w-full'>
        <button
          className='border border-secondary bg-secondary w-full py-2 rounded-md  mb-5  text-main transition-all duration-300 ease-in-out  active:bg-secondary active:text-white active:border-primary'
          onClick={() => setIsAnswerChecked(true)}
        >
          Check answer
        </button>
        <button
          disabled={isAnswerChecked === false}
          className='border border-primary w-full py-2 rounded-md  text-primary mb-5 hover:bg-primary hover:text-main transition-all duration-300 ease-in-out  active:bg-primary active:text-white active:border-primary'
          onClick={() => {
            if (isAnswerChecked === null) return;
            setIsAnswerChecked(false);
            setSelected(null);
            current < questions.length - 1
              ? setCurrent((prev) => prev + 1)
              : setCurrentState((prev) => prev + 1);
            console.log(current, questions.length);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Questions;
