import React from "react";
import { useState } from "react";

const CounterCard = () => {
  const [number, setNumber] = useState(0);

  function increaseNum() {
    setNumber(number + 1);
  }
  function decreaseNum() {
    setNumber(number - 1);
  }
  function increase5() {
    setNumber(number + 5);
  }

  return (
    <div className="bg-slate-100 flex items-center justify-center min-h-screen font-sans">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-sm w-full mx-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-6 tracking-wide uppercase">
          Counter
        </h1>

        <div
          id="counter"
          className="text-7xl font-extrabold text-indigo-600 mb-8 select-none transition-all duration-200 scale-100"
        >
          {number}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={decreaseNum}
            id="decrement"
            className="bg-rose-500 hover:bg-rose-600 text-white font-bold text-xl w-14 h-14 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center"
          >
            -
          </button>

          <button
            onClick={increase5}
            id="reset"
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium px-6 h-14 rounded-full shadow-sm active:scale-95 transition-all flex items-center justify-center"
          >
            Increase 5
          </button>

          <button
            onClick={increaseNum}
            id="increment"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xl w-14 h-14 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center justify-center"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterCard;
