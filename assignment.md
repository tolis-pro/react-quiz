### Assignment Title: Interactive React Quiz Application with Enhanced Features

#### Objective:

Create an engaging React quiz application that fetches questions from a local JSON file using json-server. The application should guide users through a quiz, display their score, highlight incorrect answers, and offer a chance to retake the quiz.

#### Requirements:

1. **Welcome Screen & Quiz Start**:

   - Display a welcome message and a "Start Quiz" button.
   - Upon clicking the button, initiate the quiz by fetching questions from a local JSON file using json-server.

2. **Question Navigation & Answering**:

   - Present each question one at a time with multiple-choice options fetched from the JSON file.
   - Allow users to select an answer for each question and proceed to the next question using a "Next" button.

3. **Scoring & Result Display**:

   - Calculate the total points based on correctly answered questions.
   - Upon completing the quiz, display the user's total points and list any incorrectly answered questions along with their wrong and correct answers.

4. **Quiz Restart & User Interaction**:
   - Include a "Retake Quiz" button allowing users to restart the quiz after viewing their results.
   - Utilize clean and attractive styling, leveraging CSS or frameworks like Bootstrap for a visually appealing user interface.

#### Additional Features (Bonus Points):

- **Question-specific Timer**: Implement a timer for each question to increase difficulty; unanswered questions should be considered incorrect.
- **Enhanced User Feedback**: Provide real-time feedback during the quiz, such as visual indicators for correct or incorrect answers.
