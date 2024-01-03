// App.js
import React, { useState, useEffect } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Quiz from './components/Quiz';
import "./App.scss"

const App = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    
  }, []); // Run only once on component mount

  const startQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div>
      {!showQuiz && <WelcomeScreen startQuiz={startQuiz} />}
      {showQuiz && <Quiz />}
    </div>
  );
};

export default App;
