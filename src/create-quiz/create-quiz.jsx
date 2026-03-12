import React from "react";
import { QuizQuestion } from "../components/quizQuestion.jsx";
import { useNavigate, useParams } from "react-router-dom";

export function CreateQuiz() {
  const [title, setTitle] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [questions, setQuestions] = React.useState([]);
  const { quizId } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (quizId) {
      fetch("/api/quiz/get")
        .then((res) => res.json())
        .then((data) => {
          const existing = data.find((q) => q.id === Number(quizId));
          if (existing) {
            setTitle(existing.title);
            setQuestions(existing.questions);
          }
        });
    }
  }, [quizId]);

  const handleAddQuestion = () => {
    if (question.trim() === "" || answer.trim() === "") {
      alert("Please enter both a question and an answer.");
      return;
    }
    setQuestions([...questions, { question, answer }]);
    setQuestion("");
    setAnswer("");
  };

  const handleDeleteQuestion = (question, answer) => {
    const updatedQuestions = questions.filter(
      (q) => q.question !== question || q.answer !== answer,
    );
    setQuestions(updatedQuestions);
  };

  const handleSaveQuiz = async () => {
    if (title.trim() === "") {
      alert("Please enter a quiz title.");
      return;
    }
    if (questions.length === 0) {
      alert("Please add at least one question.");
      return;
    }
    await fetch("/api/quiz/create", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ title, questions, quizId }),
    });
    alert("Quiz saved!");
    navigate("/dashboard");
  };

  const handleDeleteQuiz = async () => {
    if (!quizId) {
      alert("No quiz to delete.");
      return;
    }
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      await fetch("/api/quiz/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify({ quizId }),
      });
      alert("Quiz deleted!");
      navigate("/dashboard");
    }
  };

  return (
    <main className="flex-1 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Create Quiz</h2>
          <button
            className="text-red-600 border border-red-600 rounded-lg px-4 py-1 hover:bg-red-100 transition"
            onClick={handleDeleteQuiz}
          >
            Delete Quiz
          </button>
        </div>
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <form className="space-y-6">
            <div className="mb-8">
              <label className="block text-slate-700 font-semibold text-sm mb-2">
                Quiz Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
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
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter answer here"
                className="w-full px-4 py-1 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>
            <div className="flex gap-6 justify-center">
              <button
                type="button"
                onClick={handleAddQuestion}
                className="text-white bg-teal-700 rounded-lg mt-2 px-4 py-1 hover:bg-teal-500 transition"
              >
                Add Question
              </button>
              <button
                type="button"
                onClick={handleSaveQuiz}
                className="text-slate-700 bg-white border border-emerald-700 rounded-lg mt-2 px-4 py-1 hover:bg-emerald-100 transition"
              >
                Save Quiz
              </button>
            </div>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Questions</h3>
          <div className="space-y-4">
            {questions.map((q, index) => (
              <QuizQuestion
                key={index}
                question={q.question}
                answer={q.answer}
                onDelete={handleDeleteQuestion}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
