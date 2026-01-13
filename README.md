# MasteryLoop

## Specification Deliverable

### Elevator Pitch

Are you an engineer and find test questions to be particularly difficult and complex? How about using spaced repitition and mastery to develop
the needed skills to confidently answer these questions. MasteryLoop makes it easier to gain those skills through an 
online web application that allows users to create custom quizzes with their homework problems, practice test questions, and other material. 
A simple alogrithm lets users try to solve a question, self check if they got the answer right, and rework the ones the missed. It's a much 
more effective and efficient way to master those difficult concepts and skills.

### Design

These sketches show the three pages that will be used for home, taking a quiz, and editing/creating a quiz.

![Home page](/assets/images/home_page.png)

![Edit Quiz Page](/assets/images/edit_quiz_page.png)

![Take Quiz Page](/assets/images/take_quiz_page.png)



Below is a simple sequence diagram for completing a quiz or editing/creating a quiz.

![Screenshot of sequence diagram for MasteryLoop.](/assets/images/startup_sequence_diagram.png)

### Key Features

- User authentication (only access their quizzes)
- Custom quiz creation
- Ability to edit quizzes
- Custom question/answer fields
- Interactive quiz-taking mode
- Self-grading workflow
- Motivational quote shown when quiz completed
- Notification when other users complete a quiz

### Technologies

- **HTML** - Four pages for login, home, edit quiz, and take quiz. Use semantic structue (`header`, `main`, `form`, `section`).
- **CSS** - Visual feedback for correct/incorrect questions. Complementary color scheme with symplistic styling. Works for different screen sizes.
- **React** - Provides login and registration forms, quiz creation and editing interfaces, quiz-taking views, and home dashboard displays. Components
used to modulate functionality such as quiz cards, questions, and answer fields. React routing used to switch between different pages. Use third-party
API to retrieve motivational quote to show at the end of quiz completion.
- **Web Service** - Backend service with endpoints to register users, login and logout users, create or edit quiz data, update new quiz questions.
- **DB/Login** - Store users, quiz questions/answers. Credentials stored in database so users can only access quizzes they created.
- **WebSocket** - Users will recieve small realtime notification on the frontend when another user completes a quiz, providing positive feedback 
and helping boost motivation while studying.