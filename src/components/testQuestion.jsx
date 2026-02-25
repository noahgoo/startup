import React from "react";

export function TestQuestion(question, answer) {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 mb-8">
      <div className="mb-8">
        <h3 className="font-bold mb-6 text-slate-800 text-2xl">{question}</h3>
        <div className="flex gap-6 mb-6">
          <button className="flex-1 bg-emerald-400 hover:bg-emerald-500 text-white px-2 py-2 rounded-lg">
            Correct
          </button>
          <button className="flex-1 bg-red-400 hover:bg-red-500 text-white px-2 py-2 rounded-lg">
            Wrong
          </button>
        </div>
      </div>
      <div className="border-t border-slate-200 pt-8">
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Answer</h4>
        <p className="text-xl font-semibold text-slate-700 mb-6">{answer}</p>
        <button className="w-full bg-teal-700 hover:bg-teal-500 text-white px-4 py-2 rounded-lg transition">
          Next Question
        </button>
      </div>
    </div>
  );
}
