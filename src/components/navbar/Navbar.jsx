import Link from "next/link";
import Links from "./links/Links";
const Navbar = () => {
  return (
    <nav>
      <Link href="/" className="logo">
        OpenEcho NEXT
      </Link>
      <Links />
    </nav>
  );
};

export default Navbar;
