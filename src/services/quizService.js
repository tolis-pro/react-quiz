// services/quizService.js
export const getQuestions = async () => {
    const response = await fetch('http://localhost:3002/questions');
    const data = await response.json();
    console.log(data);
    return data;
    
  };
  