"use client";

import { useState } from "react";
import Input from "./Input";
import SearchBtn from "./SearchBtn";
const baseUrl = "https://github.com/";


const Form = () => {
  const [text, setText] = useState<string>("");
  const handleSubmit = async () => {
    const req = await fetch(baseUrl + text);
    const res = await req.json();

  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="relative container px-6 sm:px-0"
    >
      <img
        src="/icon-search.svg"
        alt="search-icon"
        className="absolute top-2/4 -translate-y-2/4 left-10 sm:left-5"
      />
      <Input setText={setText} />
      <span
        className={`absolute hidden transition-all sm:block sm:scale-0 right-32 text-red-500 text-base top-1/2 -translate-y-1/2`}
      >
        No results
      </span>
      <SearchBtn className="bg-lightBlue  sm:text-base sm:px-6 sm:right-2">
        Search
      </SearchBtn>
    </form>
  );
};

export default Form;
