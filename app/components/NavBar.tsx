import { NavLink } from "@remix-run/react";
import { useState } from "react";
import { links } from "~/root";


export const NavBar = () => {
  const [closed, setClosed] = useState(true);

  const onClose = () => {
    setClosed(true);
  }

  const toggleMenu = () => {
    setClosed(!closed);
    console.log(closed);
  }

  const openResume = () => {
    window.open('/static/resume.pdf', '_blank');
    const resume = document.createElement("a");
    resume.href = '/static/resume.pdf';
    resume.download = 'AshtonSobeckResume.pdf';
    document.body.appendChild(resume);
    resume.click();
    document.body.removeChild(resume);

  }

  const linkClasses = "flex justify-items-center text-slate-500 hover:text-sky-400 font-sans h-full"

  return (
    <header
      className=
      "header hidden overflow-hidden print:hidden md:block position"
    >
      <div
        className="mx-auto flex h-full w-full items-center justify-evenly md:text-xl font-sans font-semibold"
      >
        <NavLink
          onClick={toggleMenu}
          to="/"
          type="button"
        >
          sobeck.dev
        </NavLink>
        <div className="flex-1 md:hidden" />

        <nav className="flex h-full w-fill flex-col md:flex-row space-x-4">
          {/* <NavLink
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
          </NavLink> */}
          <NavLink
            to="/resume"
            // onClick={openResume}
          >
            Resume
            
          </NavLink>
            
          {/* <button
            className={linkClasses}
          >
              <a download="AshtonSobeckResume.pdf" href="/static/resume.pdf">download</a>
          </button> */}
          
          <NavLink
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