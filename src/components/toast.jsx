import React from "react";

export function Toast() {
  return (
    <div className="fixed bottom-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in">
      <span>[User] has completed a quiz! 🎉</span>
    </div>
  );
}
