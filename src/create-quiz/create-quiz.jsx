import React from "react";

export function CreateQuiz() {
  return (
    <main className="flex-1 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-8">Create Quiz</h2>
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <form className="space-y-6">
            <div>
              <label className="block text-slate-700 font-semibold text-sm mb-2">
                Quiz Title
              </label>
              <input
                type="text"
                placeholder="Enter quiz title here"
                className="w-full px-4 py-1 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div>
              <span className="block text-slate-700 font-semibold text-sm mb-2">
                Question
              </span>
              <input
                type="text"
                placeholder="Enter question here"
                className="w-full px-4 py-1 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div>
              <span className="block text-slate-700 font-semibold text-sm mb-2">
                Answer
              </span>
              <input
                type="text"
                placeholder="Enter answer here"
                className="w-full px-4 py-1 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div className="flex gap-6 justify-center">
              <button className="text-white bg-teal-700 rounded-lg mt-2 px-4 py-1 hover:bg-teal-500 transition">
                Add Question
              </button>
              <button className="text-slate-700 bg-white border border-emerald-700 rounded-lg mt-2 px-4 py-1 hover:bg-emerald-100 transition">
                Save Quiz
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Questions</h3>
          <div className="space-y-4">
            <ol>
              <li className="bg-teal-100 p-4 rounded-2xl border border-teal-600">
                <span className="font-semibold">What is 2 + 2?</span>
                <br />
                <span className="text-slate-900">Answer: 4</span>
              </li>
              <li className="bg-teal-100 p-4 rounded-2xl border border-teal-600 mt-4">
                <span className="font-semibold">
                  What is the derivative of x^2?
                </span>
                <br />
                <span className="text-slate-900">Answer: 2x</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}
