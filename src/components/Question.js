// components/Question.js
import React, { useState, useEffect } from 'react';
import './Question.scss';
import './Quiz';


const Question = ({ question, handleAnswer, handleNext,questions,handleFinish, currentQuestion }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  useEffect(() => {
    setSelectedAnswer('');
  }, [question]);

  const handleChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = (event) => {

    if (selectedAnswer!==''){
      console.log(selectedAnswer); /*for debugging */

    handleAnswer(selectedAnswer);
    handleNext();

    console.log('question'+currentQuestion); /**for degugging */
    console.log('qeustions length'+questions.length);
    
    if(isLastQuestion){
      handleFinish();
    } else{
      handleNext();
    }
    }else{
      alert('Please select an answer');
    }


  };

  const isLastQuestion = currentQuestion === questions.length -1 ;


  return (
    <div>
      <h2>{question.question}</h2>
      <form>
        {question.options.map((option) => (
          <div key={option} checked={selectedAnswer === option} className='answers-container'>
            <input
              type="radio"
              id={option}
              name="answer"
              value={option}
              checked={selectedAnswer === option}
              onChange={handleChange}
              className='radio-input'
            />
            <label htmlFor={option} className='radio-label'>{option}</label>
          </div>
        ))}
      </form>
      { !isLastQuestion  &&
      (<button onClick={handleSubmit} className='next-button'>Next</button>)
      }
    </div>
  );
};

export default Question;
