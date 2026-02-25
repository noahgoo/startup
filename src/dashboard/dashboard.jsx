import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { QuizCard } from "../components/quizCard.jsx";
import { getQuizArray } from "../helpers/quizHelper.js";
import { getCurrentUser } from "../helpers/authHelper.js";

export function Dashboard() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const quizzes = getQuizArray(user);

  return (
    <main className="flex1 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-8">
            Your Quizzes
          </h2>
          <Link
            to="/create-quiz"
            className="bg-emerald-400 hover:bg-emerald-500 text-white font-medium py-2.5 px-6 rounded-lg transition"
          >
            Create New Quiz
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.length > 0 ? (
            quizzes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz} />)
          ) : (
            <p className="text-slate-600 text-center col-span-full">
              You haven't created any quizzes yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
