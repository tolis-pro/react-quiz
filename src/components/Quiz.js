// components/Quiz.js
import React, { useState, useEffect } from 'react';
import Question from './Question';
import Result from './Result';
import { getQuestions } from '../services/quizService';
import './Quiz.scss'

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuestions();
      setQuestions(data);
    };

    fetchData();
  }, []);

  const handleAnswer = (answer) => {
    console.log('Before setUserAnswers:', userAnswers); /*for debugging */
    setUserAnswers((prevUserAnswers) => {
      const updatedUserAnswers = [...prevUserAnswers, { question: currentQuestion, answer }];
      console.log('After setUserAnswers:', updatedUserAnswers); /*for debugging */
      return updatedUserAnswers;
    });
  };
  

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const calculateScore = () => {
    let totalScore = 0;
    console.log(userAnswers);
    userAnswers.forEach((userAnswer) => {
      const { question, answer } = userAnswer;
      if (questions[question].correctAnswer === answer) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  const handleFinish = () => {
    calculateScore();
    handleNext();
    // i can add  logic if needed
  };

  return (
    <div>
      
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          questions={questions}
          handleAnswer={handleAnswer}
          handleNext={handleNext}
          handleFinish={handleFinish}
        />
      ) : (
        <Result score={score} questions={questions} userAnswers={userAnswers} onFinish={handleFinish} />
      )}
      {currentQuestion === questions.length - 1 && (
        <button onClick={handleFinish} className='finish-button'>Finish Quiz</button>
      )}
    </div>
  );
};

export default Quiz;
