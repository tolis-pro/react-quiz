// components/Result.js
import React from 'react';
import './Result.scss'

const Result = ({ score, questions, userAnswers }) => {
  
  return (
    <div>
      <h1>Quiz Result</h1>
      <p>Your Score: {score}</p>
      <ul>
        {userAnswers.map((userAnswer, index) => (
          <li key={index}>
            Question {index + 1}: {questions[index].question} - Your Answer: {userAnswer.answer}{' '}
            {userAnswer.answer === questions[index].correctAnswer ? '(Correct)' : '(Incorrect)'}
            {console.log('userAnsers'+userAnswer.answer)}
            {console.log('correctAnswer'+questions[index].correctAnswer)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
