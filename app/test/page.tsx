"use client";
import React, { useRef, useState } from "react";

const TestPage = () => {
  const [name, setName] = useState("");
  const countRef = useRef(0);

  const handle = () => {
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`);
  };

  console.log("I rendered!");

  return (
    <div className={"flex gap-10 "}>
      <button className={"bg-amber-50"} onClick={handle}>
        Click me
      </button>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default TestPage;
