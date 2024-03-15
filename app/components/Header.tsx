import ModeController from "./ModeController";

const Header = () => {
  return (
    <header className="container mx-auto bg-inherit px-6 pt-8 flex justify-between items-center mb-9 sm:px-0">
      <a href="/" className="font-bold text-2xl dark:text-darkWhite">
        devfinder
      </a>
      <ModeController />
    </header>
  );
};

export default Header;
