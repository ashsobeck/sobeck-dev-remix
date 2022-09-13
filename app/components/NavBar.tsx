import { NavLink } from "@remix-run/react";
import { useState } from "react";


export const NavBar = () => {
  const [closed, setClosed] = useState(true);

  const onClose = () => {
    setClosed(true);
  }

  const toggleMenu = () => {
    setClosed(!closed);
    console.log(closed);
  }

  const linkClasses = "flex justify-items-center text-yellow-500 hover:text-yellow-400 font-sans h-full"

  return (
    <header
      className=
      "header hidden overflow-hidden print:hidden md:block"
    >
      <div
        className="mx-auto flex h-full w-full items-center justify-evenly md:text-xl font-sans font-semibold "
      >
        <button
          onClick={toggleMenu}
          type="button"
        >
          sobeck.dev
        </button>
        <div className="flex-1 md:hidden" />

        <nav className="flex h-full flex-col md:flex-row space-x-4">
          <NavLink
            className={linkClasses}
            to="/"
            onClick={onClose}
          >
            About Me
          </NavLink>

          <NavLink
            className={linkClasses}
            to="/"
            onClick={onClose}
          >
            Portfolio
          </NavLink>

          <NavLink
            className={linkClasses}
            to="/"
            onClick={onClose}
          >
            Resume
          </NavLink>

          <NavLink
            className={linkClasses}
            to="/"
            onClick={onClose}
          >
            Contact Me
          </NavLink>
        </nav>
      </div>
    </header>
  )
}