import React, { useEffect, useMemo, useRef, useState } from "react";

const About = () => {
  const [num, setNum] = useState(0);
  const [open, setOpen] = useState(false);

  const buttonRef = useRef(null);

  // useEffect take two parameter first is function and second is dependency or array of dependency
  // use effect is called after changing state of given dependency
  useEffect(() => {
    console.log("useEffect called");
    console.log(buttonRef?.current?.focus(), "buttonRef");
  }, [num]);

  // useMemo take two parameter first is function which return a value and second is dependency or array of dependency
  // we can store value return by function in a variable and use it
  const half = useMemo(() => {
    console.log("useMemo called");
    return num / 2;
  }, [num]);

  console.log(half, "half");

  return (
    <div>
      <h1>hello from about</h1>
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        add
      </button>
      <p>{num}</p>
      <button
        ref={buttonRef}
        onClick={() => {
          setOpen(!open);
        }}
        className="focus:border border-blue-500"
      >
        toggle
      </button>
      <p>{open}</p>
    </div>
  );
};

export default About;
