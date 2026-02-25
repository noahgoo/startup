import { React } from "react";

export function QuizQuestion({ question, answer, onDelete }) {
  return (
    <div className="bg-teal-100 p-4 rounded-2xl border border-teal-600 flex items-center justify-between">
      <div>
        <span className="font-semibold">{question}</span>
        <br />
        <span className="text-slate-900">Answer: {answer}</span>
      </div>
      <button
        type="button"
        onClick={() => onDelete(question, answer)}
        className="text-red-500 hover:text-red-700 text-lg font-bold"
      >
        Delete
      </button>
    </div>
  );
}
