import React from "react";

export function Login() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 pb-8">
      <div className="w-full max-w-md">
        <div className="bg-teal-100 rounded-lg p-8 border border-teal-600">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-slate-700 font-medium mb-3"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-2 bg-slate-100 border border-teal-600 rounded-lg text-slate-600 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-slate-700 font-medium mb-3"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-slate-100 border border-teal-600 rounded-lg text-slate-600 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition"
                required
              />
            </div>

            <div className="pt-6 space-y-3">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-emerald-400 hover:from-teal-600 hover:to-emerald-600 text-white font-semibold py-2 px-4 rounded-lg transition"
              >
                Sign In
              </button>
              <button
                type="button"
                className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded-lg border border-slate-600 transition"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
