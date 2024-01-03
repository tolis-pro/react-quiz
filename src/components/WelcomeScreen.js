// components/WelcomeScreen.js
import React from 'react';
import './WelcomeScreen.scss'

const WelcomeScreen = ({ startQuiz }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-message">
      <h1>Welcome to the Quiz!</h1>
      </div>
      <button className="start-button" onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default WelcomeScreen;
