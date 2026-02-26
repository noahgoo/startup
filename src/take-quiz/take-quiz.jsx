import React from "react";
import { useParams } from "react-router-dom";
import { TestQuestion } from "../components/testQuestion.jsx";
import { getQuizArray } from "../helpers/quizHelper.js";
import { getCurrentUser } from "../helpers/authHelper.js";

export function TakeQuiz() {
  const { quizId } = useParams();
  const quizArray = getQuizArray(getCurrentUser());
  const quiz = quizArray.find((q) => q.id === Number(quizId));
  const questions = quiz.questions;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const barWidth = ((currentIndex + 1) / questions.length) * 100 + "%";
  const questionTotal = questions.length;
  const currentQuestion = questions[currentIndex].question;
  const currentAnswer = questions[currentIndex].answer;

  if (!quizId) {
    return (
      <main className="flex-1 px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="text-slate-600 text-center col-span-full">
            Please choose a quiz from the dashboard to begin your test.
          </p>
        </div>
      </main>
    );
  }
  return (
    <main className="flex-1 px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">Take Quiz</h2>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-700 font-medium text-sm">Progress</span>
            <span className="text-slate-700 text-sm">
              Question {currentIndex + 1} of {questionTotal}
            </span>
          </div>
          <div className="w-full bg-slate-300 rounded-full h-2">
            <div
              className="bg-gradient-to-br from-teal-700 to-teal-500 h-2 rounded-full"
              style={{ width: barWidth }}
            ></div>
          </div>
        </div>
        <TestQuestion question={currentQuestion} answer={currentAnswer} />
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-xl border border-teal-200">
          <h4 className="text-medium font-semibold text-slate-700 mb-3">
            Motivational Quote
          </h4>

          <p className="text-lg text-slate-700 italic mb-4">
            “Education is the key that unlocks the golden door to freedom.”
          </p>
          <p className="text-sm text-slate-700">– George Washington Carver</p>
        </div>
      </div>
    </main>
  );
}
