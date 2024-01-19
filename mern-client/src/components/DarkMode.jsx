import  { useState, useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, ); //[theme]);
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only"
            checked={theme === "dark"}
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
          <div className="block bg-gray-600 w-10 h-6 rounded-full"></div>
          <div className={`dot absolute left-1 top-1 bg-primary w-4 h-4 rounded-full transition ${
            theme === "dark" ? "transform translate-x-full" : ""
          }`}></div>
        </div>
      </label>
    </div>
    </>
  );
};

export default DarkMode;