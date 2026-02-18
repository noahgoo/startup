import React from "react";
import "./app.css";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Dashboard } from "./dashboard/dashboard";
import { CreateQuiz } from "./create-quiz/create-quiz";
import { TakeQuiz } from "./take-quiz/take-quiz";
import { Login } from "./login/login";
import { Toast } from "./components/toast";
import { logoutUser } from "./login/authHelper.js";

function Header() {
  const location = useLocation();
  return location.pathname === "/login" ? (
    // Login page header
    <header className="py-12 px-4 border-b border-slate-200">
      <div className="flex items-center justify-center gap-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-teal-400 bg-clip-text mb-2">
            MasteryLoop
          </h1>
          <p className="text-slate-400 text-lg">The Path to Learning Mastery</p>
        </div>
        <img
          src="/learning_image.png"
          alt="Learning Image"
          className="w-16 h-16 object-cover rounded-md ml-6"
        />
      </div>
    </header>
  ) : (
    // Normal header for all other pages
    <header className="bg-white border-b border-slate-200 py-4 px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-emerald-400">MasteryLoop</h1>

        <nav className="hidden md:flex gap-8">
          <menu className="contents">
            <li>
              <NavLink
                to="/dashboard"
                className="text-slate-800 hover:text-teal-600 transition font-medium"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/create-quiz"
                className="text-slate-800 hover:text-teal-600 transition font-medium"
              >
                Create Quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/take-quiz"
                className="text-slate-800 hover:text-teal-600 transition font-medium"
              >
                Take Quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                onClick={logoutUser}
                className="text-slate-800 hover:text-teal-600 transition font-medium"
              >
                Logout
              </NavLink>
            </li>
          </menu>
          <p className="cool_font text-teal-500 font-medium">Hi [User]!</p>
        </nav>

        <button id="menu-toggle" className="md:hidden text-2xl text-slate-800">
          ☰
        </button>
      </div>
      <div
        id="mobile-menu"
        className="hidden md:hidden mt-4 pb-4 border-t border-slate-200"
      >
        <nav className="flex flex-col gap-4 pt-4">
          <NavLink
            to="/dashboard"
            className="text-slate-700 hover:text-teal-500"
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/create-quiz"
            className="text-slate-700 hover:text-teal-500"
          >
            Create Quiz
          </NavLink>
          <NavLink
            to="/take-quiz"
            className="text-slate-700 hover:text-teal-500"
          >
            Take Quiz
          </NavLink>
          <NavLink to="/login" className="text-slate-700 hover:text-teal-500">
            Logout
          </NavLink>
          <p className="text-teal-500 font-medium">Hi [User]!</p>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-br from-slate-200 to-slate-50 min-h-screen flex flex-col">
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-quiz" element={<CreateQuiz />} />
          <Route path="/take-quiz" element={<TakeQuiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Toast />

        <footer className="py-6 px-4 border-t border-slate-700 text-center text-slate-400 text-sm">
          <p className="mb-2">Developed by Noah Goo</p>
          <a
            href="https://github.com/noahgoo/startup"
            className="text-emerald-400 hover:text-emerald-300 transition"
          >
            GitHub Repo
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main className="container-fluid bg-secondary text-center">
      404: Return to sender. Address unknown.
    </main>
  );
}
