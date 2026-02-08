import React from "react";
import "./app.css";

export default function App() {
  return (
    <div class="bg-gradient-to-br from-slate-200 to-slate-50 min-h-screen flex flex-col">
      <header class="bg-white border-b border-slate-200 py-4 px-6">
        <div class="flex items-center justify-between max-w-7xl mx-auto">
          <h1 class="text-3xl font-bold text-emerald-400">MasteryLoop</h1>

          <nav class="hidden md:flex gap-8">
            <menu class="contents">
              <li>
                <a
                  href="dashboard.html"
                  class="text-slate-800 hover:text-teal-600 transition font-medium"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="create-quiz.html"
                  class="text-slate-800 hover:text-teal-600 transition font-medium"
                >
                  Create Quiz
                </a>
              </li>
              <li>
                <a
                  href="take-quiz.html"
                  class="text-slate-800 hover:text-teal-600 transition font-medium"
                >
                  Take Quiz
                </a>
              </li>
              <li>
                <a
                  href="index.html"
                  class="text-slate-800 hover:text-teal-600 transition font-medium"
                >
                  Logout
                </a>
              </li>
            </menu>
            <p class="cool_font text-teal-500 font-medium">Hi [User]!</p>
          </nav>

          <button id="menu-toggle" class="md:hidden text-2xl text-slate-800">
            ☰
          </button>
        </div>
        <div
          id="mobile-menu"
          class="hidden md:hidden mt-4 pb-4 border-t border-slate-200"
        >
          <nav class="flex flex-col gap-4 pt-4">
            <a href="dashboard.html" class="text-slate-700 hover:text-teal-500">
              Dashboard
            </a>
            <a
              href="create-quiz.html"
              class="text-slate-700 hover:text-teal-500"
            >
              Create Quiz
            </a>
            <a href="take-quiz.html" class="text-slate-700 hover:text-teal-500">
              Take Quiz
            </a>
            <a href="index.html" class="text-slate-700 hover:text-teal-500">
              Logout
            </a>
            <p class="text-teal-500 font-medium">Hi [User]!</p>
          </nav>
        </div>
      </header>

      <main>App components go here</main>

      <footer class="py-6 px-4 border-t border-slate-700 text-center text-slate-400 text-sm">
        <p class="mb-2">Developed by Noah Goo</p>
        <a
          href="https://github.com/noahgoo/startup"
          class="text-emerald-400 hover:text-emerald-300 transition"
        >
          GitHub Repo
        </a>
      </footer>
    </div>
  );
}
