import React from "react";

interface Props {
  className?: string;
  children?: React.ReactNode;
  onSubmit?: any;
}

const SearchBtn: React.FC<Props> = ({ className, children, onSubmit }) => {
  return (
    <button
      onSubmit={onSubmit}
      className={
        className +
        " py-[12.5px] px-[14px] active:scale-90 transition-all rounded-[10px] text-[14px] text-white md:hover:opacity-70 transition-all absolute right-8 top-1/2 -translate-y-1/2"
      }
    >
      {children}
    </button>
  );
};

export default SearchBtn;
