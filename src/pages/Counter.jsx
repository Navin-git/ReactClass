import React, { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="min-h-screen w-full bg-blue-100 flex justify-center items-center gap-4">
      <button
        onClick={() => {
          setNum(num + 1);
        }}
        className="bg-gray-100 border border-gray-300 rounded-md px-4 py-1"
      >
        Add
      </button>
      <p className="text-xl text-blue-500">{num}</p>
      <button
        onClick={() => {
          setNum(num - 1);
        }}
        className="bg-gray-100 border border-gray-300 rounded-md px-4 py-1"
      >
        Sub
      </button>
    </div>
  );
};

export default Counter;
