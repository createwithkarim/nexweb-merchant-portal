import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="flex gap-1.5 items-center group"
    >
      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">Merchant Portal</span>
      </div>
    </Link>
  );
};

export default Logo;
