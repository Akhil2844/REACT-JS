import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }
  return (
    <div className=" items-center w-[vw100] h-[100vh] flex justify-center bg-[#557296] flex-col gap-10">
      <div className=" flex justify-center text-[#0398d4] font-medium text-2xl ">
        Increment && Decrement
      </div>
      <div className=" flex  justify-center bg-white gap-20 p-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={decreaseHandler}
          className=" text-gray-800 border-r-2 text-center w-20 border-white text-5xl"
        >
          -
        </button>
        <div className="font-bold gap-12 text-5xl border-l-inherit">
          {count}
        </div>
        <button
          onClick={increaseHandler}
          className=" text-gray-800 border-r-2 text-center w-20 border-white text-5xl"
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="bg-blue-400 hover:bg-gray-400 text-gray-800 text-whitempx-5 font-bold px-5 py-5 rounded-sm text-xl"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
