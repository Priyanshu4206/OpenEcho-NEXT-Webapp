"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const Links = () => {
  const Links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  const currPath = usePathname();
  const [menu, setMenu] = useState(false);
  // temp variables
  const isAdmin = true;
  const [session, setSession] = useState(true);

  return (
    <>
      <div className="links">
        {Links.map((link, index) => (
          <Link
            className={`${currPath === link.path ? "link active" : "link"}`}
            href={link.path}
            key={index}
          >
            {link.title}
          </Link>
        ))}
        {session ? (
          <>
            {isAdmin && (
              <Link
                className={`${currPath === "/admin" ? "link active" : "link"}`}
                href={"/admin"}
              >
                Admin
              </Link>
            )}
            <button
              onClick={() => {
                setSession(!session);
              }}
              className="logout_btn"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            className={`${currPath === "/login" ? "link active" : "link"}`}
            href={"/login"}
          >
            Login
          </Link>
        )}
      </div>
      <button
        onClick={() => {
          setMenu(!menu);
        }}
        className="menu_btn"
      >
        Menu
      </button>
      {menu && (
        <div className="mobile-menu">
          {Links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${currPath === link.path ? "link active" : "link"}`}
            >
              {link.title}
            </Link>
          ))}
          {session ? (
            <>
              {isAdmin && (
                <Link
                  className={`${
                    currPath === "/admin" ? "link active" : "link"
                  }`}
                  href={"/admin"}
                >
                  Admin
                </Link>
              )}
              <button
                onClick={() => {
                  setSession(!session);
                }}
                className="logout_btn"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              className={`${currPath === "/login" ? "link active" : "link"}`}
              href={"/login"}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Links;
