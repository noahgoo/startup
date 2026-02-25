import { getCurrentUser } from "./authHelper";

export function createQuiz(title, questions = [], quizId) {
  const currentUser = getCurrentUser();
  if (currentUser === null) {
    alert("No user logged in");
    return;
  }

  const quizArray = getQuizArray(currentUser);
  // Check if quiz already exists and just needs to be updated.
  if (quizId) {
    const index = quizArray.findIndex((q) => q.id === Number(quizId));
    if (index !== -1) {
      quizArray[index] = { id: Number(quizId), title, questions };
    }
  } else {
    quizArray.push({ id: Date.now(), title: title, questions: questions });
  }
  localStorage.setItem(`quizzes_${currentUser}`, JSON.stringify(quizArray));
}

// maybe don't need
// export function addQuestion(quizTitle, question, answer) {
//   const currentUser = getCurrentUser();
//   if (currentUser === null) {
//     alert("No user logged in");
//     return;
//   }

//   const quizArray = getQuizArray(currentUser);
//   const quiz = quizArray.find((q) => q.title === quizTitle);
//   if (!quiz) {
//     alert("Quiz not found");
//     return;
//   }
//   quiz.questions.push({ question: question, answer: answer });
//   localStorage.setItem(`quizzes_${currentUser}`, JSON.stringify(quizArray));
// }

export function getQuizArray(user) {
  return JSON.parse(localStorage.getItem(`quizzes_${user}`)) || [];
}

export function deleteQuiz(quizTitle) {
  const quizArray = getQuizArray(getCurrentUser());
  const updatedQuizzes = quizArray.filter((q) => q.title !== quizTitle);
  localStorage.setItem(
    `quizzes_${getCurrentUser()}`,
    JSON.stringify(updatedQuizzes),
  );
}
