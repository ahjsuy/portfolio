"use client";
interface Props {
  about: React.RefObject<HTMLElement | null>;
  projects: React.RefObject<HTMLElement | null>;
  resume: React.RefObject<HTMLElement | null>;
  contact: React.RefObject<HTMLElement | null>;
}
const Navbar = ({ about, projects, resume, contact }: Props) => {
  const number0 = "0";
  const handleClick = (ref: React.RefObject<HTMLElement | null>) => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="flex fixed items-center justify-between bg-teal-50 h-12 w-screen pr-10 z-50">
      <h1 className="font-extrabold text-lg justify-start p-[.25rem] pl-2 pr-2 ml-5 animated-color border-[.15rem] border-solid border-opacity-100 border-white rounded-md">
        A.S.
      </h1>
      <div className="space-x-5 justify-end">
        <a onClick={() => handleClick(about)}>{number0}1. About</a>
        <a onClick={() => handleClick(projects)}>{number0}2. Projects</a>
        <a onClick={() => handleClick(resume)}>{number0}3. Resume</a>
        <a onClick={() => handleClick(contact)}>{number0}4. Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
