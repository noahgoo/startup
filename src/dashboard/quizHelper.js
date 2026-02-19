import { getCurrentUser } from "../login/authHelper";

export function createQuiz(title, questions = []) {
  const currentUser = getCurrentUser();
  if (currentUser === null) {
    alert("No user logged in");
    return;
  }

  const quizArray = getQuizArray(currentUser);
  quizArray.push({ id: Date.now(), title: title, questions: questions });
  localStorage.setItem(currentUser, JSON.stringify(quizArray));
}

export function addQuestion(quizTitle, question, answer) {
  const currentUser = getCurrentUser();
  if (currentUser === null) {
    alert("No user logged in");
    return;
  }

  const quizArray = getQuizArray(currentUser);
  const quiz = quizArray.find((q) => q.title === quizTitle);
  if (!quiz) {
    alert("Quiz not found");
    return;
  }
  quiz.questions.push({ question: question, answer: answer });
  localStorage.setItem(currentUser, JSON.stringify(quizArray));
}

export function getQuizArray(user) {
  return JSON.parse(localStorage.getItem(user)) || [];
}

export function deleteQuiz(quizTitle) {
  const quizArray = getQuizArray(getCurrentUser());
  const updatedQuizzes = quizArray.filter((q) => q.title !== quizTitle);
  localStorage.setItem(getCurrentUser(), JSON.stringify(updatedQuizzes));
}
