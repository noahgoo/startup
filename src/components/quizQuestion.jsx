import { React } from "react";

export function QuizQuestion({ question, answer }) {
  return (
    <div className="bg-teal-100 p-4 rounded-2xl border border-teal-600">
      <span className="font-semibold">{question}</span>
      <br />
      <span className="text-slate-900">Answer: {answer}</span>
    </div>
  );
}
