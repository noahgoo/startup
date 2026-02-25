import { React } from "react";
import { useNavigate } from "react-router-dom";

export function QuizCard({ quiz }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="bg-gradient-to-br from-teal-200 to-emerald-200 rounded-lg p-8 mb-4 text-center">
        <h3 className="text-lg font-semibold text-slate-800 mb-2">
          {quiz.title}
        </h3>
      </div>
      <div className="flex gap-12 justify-center">
        <button className="text-white bg-teal-700 rounded-lg mt-2 px-6 py-2 hover:bg-teal-500 transition">
          Start Quiz
        </button>
        <button
          onClick={() => navigate(`/create-quiz/${quiz.id}`)}
          className="text-slate-700 bg-white border border-emerald-700 rounded-lg mt-2 px-6 py-2 hover:bg-emerald-100 transition"
        >
          Edit Quiz
        </button>
      </div>
    </div>
  );
}
