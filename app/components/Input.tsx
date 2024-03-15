"use client";


interface Props {
  setText?: any;
}

const Input: React.FC<Props> = ({ setText }) => {
  const handleChange = (e: {
    target: {
      value: string;
    };
  }) => {
    setText(e.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder="Search GitHub username…"
      className="w-full h-[60px] flex transition-all dark:bg-darkDBlue dark:placeholder:text-white dark:text-white rounded-2xl placeholder:text-lightLGray sm:placeholder:text-[18px] text-[13px] sm:text-[18px] bg-lightWhite outline-[1px_solid] outline-blue-400 dark:outline-none focus:outline-[1px_solid] focus:outline-blue-400 pl-[45px] pr-[98px] sm:pl-[60px] sm:pr-[126px] dark:focus:outline-none"
    />
  );
};

export default Input;
