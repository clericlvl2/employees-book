const Header = () => {
  return (
    <header className=" flex w-full flex-col items-start border-b-[1px] border-b-neutral-400 bg-neutral-300 px-8 pb-2 pt-4 text-neutral-200 dark:border-b-transparent dark:bg-neutral-900 xl:px-[calc((100%-1280px+64px)/2)]">
      <h1 className="font-martian mb-2 text-3xl font-bold text-green-700 dark:text-green-700">
        Employees Book
      </h1>
      <span className="mb-2 text-lg text-black dark:text-white">
        Add, edit or delete employees in your online database
      </span>
    </header>
  );
};

export default Header;
