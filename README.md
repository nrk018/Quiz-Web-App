# Quiz App

This project is an interactive Quiz Application built using HTML, CSS, and JavaScript. The application dynamically loads questions, tracks user scores, and provides real-time feedback, with a focus on clean, modular, and scalable code architecture.

## Project Structure

- **index.html**: The main HTML file, containing the structure of the app, including the header, quiz container, and placeholders for dynamic content such as questions, options, and the score tracker.

- **styles.css**: The CSS file for styling the application. It includes responsive layouts, flexbox-based positioning, and specific styles for the question box, explanation window, and other UI components.

- **script.js**: The core JavaScript file that drives the application's logic, including:
  - **Question Management**: Questions are stored in an array of objects, each containing the question text, answer options, the correct answer index, and an explanation.
  - **Dynamic Rendering**: The `loadQuestion` function handles the display of each question and associated options, dynamically updating the DOM based on user interaction.
  - **Answer Submission**: User-selected answers are validated against the correct answer, and the result (correct/wrong) is displayed with an explanation. The score is updated in real-time.
  - **Timer Functionality**: A countdown timer of 60 seconds for each question. If time expires, the question is automatically marked incorrect.
  - **Score and Status Tracking**: The user's score is tracked and displayed at the top of the page, along with visual indicators (tick/cross) for each completed question.
  - **Quiz Completion**: After all questions are answered, a thank-you message and a performance evaluation are displayed based on the final score.

## Key Features

- **Modular Design**: The questions are stored separately, making it easy to add, remove, or modify questions without altering the core logic.
- **Real-Time Feedback**: The app provides immediate feedback after each answer submission, with explanations displayed in a dedicated window.
- **Responsive Layout**: The CSS is designed to ensure that the app is usable across different screen sizes, with a clean and user-friendly interface.
- **Scalable Codebase**: The JavaScript is organized to allow easy expansion, whether adding more questions, enhancing the UI, or introducing new features.

## Usage

1. **Start the Quiz**: The application begins by loading the first question and initializing the timer.
2. **Answer Questions**: Select an option and submit your answer. The app will provide feedback and move on to the next question.
3. **Track Progress**: The score is updated in real-time, and the status of each question (correct/wrong) is visually represented.
4. **Complete the Quiz**: After answering all questions, the app displays your final score and a performance evaluation.

## Future Improvements

- **Additional Question Types**: Support for different types of questions (e.g., multiple correct answers, true/false).
- **Database Integration**: Storing questions and user scores in a database for persistence and analytics.
- **Enhanced UI/UX**: Adding animations, transitions, and more interactive elements to improve user engagement.
