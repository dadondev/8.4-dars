"use client";

import { useState } from "react";

const ModeControllerBtn = () => {
  const [mode, setMode] = useState<boolean>(false);
  const handleClick = () => {
    document.getElementById("html")?.classList.toggle("dark");
    setMode(!mode);
  };
  return (
    <>
      <span className="text-lightLGray dark:text-darkWhite uppercase text-[13px]">
        {mode ? "light" : "dark"}
      </span>
      <button onClick={handleClick}>
        <img src={mode ? "sun.png" : "moon.png"} alt="darkmode" />
      </button>
    </>
  );
};

export default ModeControllerBtn;
