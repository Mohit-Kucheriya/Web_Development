import { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState(
    JSON.parse(localStorage.getItem("bgColor")) || "#e64980",
  );

  const colors = [
    { color: "#e64980", label: "Pink" },
    { color: "#be4bdb", label: "Grape" },
    { color: "#7950f2", label: "Violet" },
    { color: "#15aabf", label: "Cyan" },
  ];

  const changeBgColor = (color) => {
    setBgColor(color);
    localStorage.setItem("bgColor", JSON.stringify(color));
  };

  return (
    <div
      className="ease h-screen w-full transition-all delay-100 duration-500"
      style={{ backgroundColor: bgColor }}
    >
      <div className="fixed bottom-10 left-[50%] flex translate-x-[-50%] flex-wrap items-center justify-center rounded-lg bg-white px-4 py-4 shadow-md">
        <div className="font-poppins flex items-center gap-4">
          {colors.map(({ color, label }) => (
            <button
              key={color}
              onClick={() => changeBgColor(color)}
              className="group cursor-pointer rounded-lg px-4 py-2 font-medium text-white shadow-lg transition-transform duration-300 hover:scale-105"
              style={{ backgroundColor: color }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
