import Link from "next/link";

const Navbar = () => {
  return (
    <header className="h-14 w-full border-b flex items-center px-2 md:px-4 fixed inset-0 z-50 bg-white">
      <nav className="flex justify-between items-center w-full">
        <Link href="/" className="font-bold">
          Nexweb
        </Link>

        <div>user</div>
      </nav>
    </header>
  );
};

export default Navbar;
