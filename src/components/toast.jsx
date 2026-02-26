import React from "react";

export function Toast() {
  const [visible, setVisible] = React.useState(false); // To hide banner or make it visible
  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisible(true);
      setTimeout(() => setVisible(false), 5000); // Hide after 5 seconds
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <span>[User] has completed a quiz! 🎉</span>
    </div>
  );
}
