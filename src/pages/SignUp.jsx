import React, { useState } from "react";

const SignUp = () => {
  // create state for input field with initial value
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  // on every change in input field
  const HandelChange = (e) => {
    // get name and value from input field using e.target
    const { name, value } = e.target;
    // set input state using setInput and pre means previous state, ...pre means copy of previous state and [name] means name of input field and value is value of input field
    setInput((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const HandelSubmit = (e) => {
    // prevent default behaviour of form
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className="min-h-screen w-full bg-blue-100 flex justify-center items-center">
      <form onSubmit={HandelSubmit} className="bg-white rounded-lg p-10">
        <div className="space-y-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            placeholder="Enter your name"
            onChange={HandelChange}
            className="border border-gray-400 w-full p-2 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={HandelChange}
            className="border border-gray-400 w-full p-2 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={HandelChange}
            className="border border-gray-400 w-full p-2 rounded-lg"
          />
        </div>
        <button className="px-4 py-2 bg-blue-500 rounded-md text-lg font-medium text-white mt-2 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
