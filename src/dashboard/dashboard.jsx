import React from "react";

export function Dashboard() {
  return (
    <main className="flex1 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-slate-800 mb-8">
            Your Quizzes
          </h2>
          <a
            href="create-quiz.html"
            className="bg-emerald-400 hover:bg-emerald-500 text-white font-medium py-2.5 px-6 rounded-lg transition"
          >
            Create New Quiz
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="bg-gradient-to-br from-teal-200 to-emerald-200 rounded-lg p-8 mb-4 text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Quiz 1: Sample Quiz
              </h3>
            </div>
            <div className="flex gap-12 justify-center">
              <button className="text-white bg-teal-700 rounded-lg mt-2 px-6 py-2 hover:bg-teal-500 transition">
                Start Quiz
              </button>
              <button className="text-slate-700 bg-white border border-emerald-700 rounded-lg mt-2 px-6 py-2 hover:bg-emerald-100 transition">
                Edit Quiz
              </button>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="bg-gradient-to-br from-teal-200 to-emerald-200 rounded-lg p-8 mb-4 text-center">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">
                Quiz 2: Sample Quiz
              </h3>
            </div>
            <div className="flex gap-12 justify-center">
              <button className="text-white bg-teal-700 rounded-lg mt-2 px-6 py-2 hover:bg-teal-500 transition">
                Start Quiz
              </button>
              <button className="text-slate-700 bg-white border border-emerald-700 rounded-lg mt-2 px-6 py-2 hover:bg-emerald-100 transition">
                Edit Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
