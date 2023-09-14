const Header = () => {
  return (
    <header className="min-h-16 flex w-full flex-col items-start bg-neutral-900 px-4 py-4 text-neutral-200">
      <h1 className="mb-2 text-3xl font-bold text-green-800">Employees Book</h1>
      <span className="mb-2 text-lg">
        Add, edit or delete employees in your own online database
      </span>
    </header>
  );
};

export default Header;
