"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {

  const pathName = usePathname();


  return (
    <Link className={`rounded p-1 ${pathName === link.url && "bg-[#bdd7db] text-gray-600"}`} href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
