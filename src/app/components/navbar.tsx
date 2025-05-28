"use client";

import { useCheckInViewport } from "../functions/checkInViewport";

interface Props {
  about: React.RefObject<HTMLElement | null>;
  projects: React.RefObject<HTMLElement | null>;
  resume: React.RefObject<HTMLElement | null>;
  contact: React.RefObject<HTMLElement | null>;
}
const Navbar = ({ about, projects, resume, contact }: Props) => {
  const threshold = 0.1;
  const elementInViewport: boolean[] = [
    useCheckInViewport(about, threshold),
    useCheckInViewport(projects, threshold),
    useCheckInViewport(resume, threshold),
    useCheckInViewport(contact, threshold),
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
          <div className="" key={index}>
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
      </div>
    </div>
  );
};

export default Navbar;
