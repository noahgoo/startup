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

## HTML Deliverable

- [x] I reviewed and deployed Simon HTML to my startup.masteryloop.click domain name.
- [x] I created 4 HTML pages for login, dashboard, quiz creation, and quiz taking. My name and GitHub repo link is included in every footer.
- [x] I represented all the content and structure my application will need including svg placeholders for the quiz containers and buttons for all the different submissions. I also have some example of the output of quiz questions from the database.
- [x] Added placeholders for toast notifications that will come from my WebSocket. There is buttons on multiple pages that will be used for submission and other requests. A motivational quote will be shown on quiz taking page after the quiz is completed, this comes from a 3rd party service call. There is also a progress bar placeholder which will reflect the amount of questions completed.
- [x] My login page is index.html so users will be forced to login before they can get to their dashboard.
- [x] I commited my code whenever I finished a big structural outline or for any other fixes.
- [x] I updated my notes.md with things I learned or wanted to remember through doing this milestone.
- [x] Most up to date version is pushed to GitHub
- [x] HTML is deployed to my production environment
- [x] Application is available at startup.masteryloop.click

## CSS Deliverable

- [x] I've completed the prerequisites and deployed Simon-CSS to my production environment.
- [x] Added a comment for where I will be using the ZenQuote free API to get my motivational quote and added username on nav bar.
- [x] Styling looks great for different sized screens. Navbar becomes hamburger button when screen gets too small. Grid of quizzes goes down from 3 to 1 columns for small screens. Used flex for most other parts of the display.
- [x] Used Tailwind CSS for index.html, dashboard.html, create-quiz.html, and take-quiz.html pages. Created a constistent theme and layout style.
- [x] Used visually appealing colors (teal, white, slate, emerald) and there is no overflowing elements.
- [x] Used class selectors for all Tailwind utilities, used ID selectors for menu toggle, used psuedo selectors like hover and focus on buttons and such, and element selector for links, buttons.
- [x] Added new font Playwright NZ Basic to use for username.
