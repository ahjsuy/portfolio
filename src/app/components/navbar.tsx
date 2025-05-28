"use client";

import { checkInViewport } from "../functions/checkInViewport";

interface Props {
  about: React.RefObject<HTMLElement | null>;
  projects: React.RefObject<HTMLElement | null>;
  resume: React.RefObject<HTMLElement | null>;
  contact: React.RefObject<HTMLElement | null>;
}
const Navbar = ({ about, projects, resume, contact }: Props) => {
  const threshold = 0.1;
  const elementInViewport: boolean[] = [
    checkInViewport(about, threshold),
    checkInViewport(projects, threshold),
    checkInViewport(resume, threshold),
    checkInViewport(contact, threshold),
  ];
  const navbarElements: string[] = [
    "01. About",
    "02. Projects",
    "03. Resume",
    "04. Contact",
  ];
  const propArray: React.RefObject<HTMLElement | null>[] = [
    about,
    projects,
    resume,
    contact,
  ];
  const handleClick = (ref: React.RefObject<HTMLElement | null>) => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="flex fixed items-center justify-between bg-[#415A77] h-12 w-screen pr-10 z-50">
      <h1 className="font-extrabold text-lg justify-start p-[.25rem] pl-2 pr-2 ml-5 animated-color rounded-md">
        A.Suy
      </h1>
      <div className="space-x-5 justify-end flex flex-row">
        {navbarElements.map((e, index) => (
          <div className="">
            <a
              className="nav-bar-element"
              key={index}
              onClick={() => {
                handleClick(propArray[index]);
              }}
            >
              {e}
            </a>
            {index == elementInViewport.lastIndexOf(true) && (
              <hr className=""></hr>
            )}
          </div>
        ))}
        {/* <a onClick={() => handleClick(about)}>{number0}1. About</a>
        <a onClick={() => handleClick(projects)}>{number0}2. Projects</a>
        <a onClick={() => handleClick(resume)}>{number0}3. Resume</a>
        <a onClick={() => handleClick(contact)}>{number0}4. Contact</a> */}
      </div>
    </div>
  );
};

export default Navbar;
