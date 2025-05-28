"use client";

import { useRef, useEffect } from "react";
import Navbar from "./components/navbar";
import ProjectCard from "./components/projectCard";
import { useCheckInViewport } from "./functions/checkInViewport";
import { useForm, ValidationError } from "@formspree/react";

export default function Home() {
  const [state, handleSubmit] = useForm("xqaqvyvb");
  const about = useRef<HTMLElement | null>(null);
  const projects = useRef<HTMLElement | null>(null);
  const resume = useRef<HTMLElement | null>(null);
  const contact = useRef<HTMLElement | null>(null);

  const projectsInViewport = useCheckInViewport(projects);
  const resumeInViewport = useCheckInViewport(resume);
  const contactInViewport = useCheckInViewport(contact);

  const zenTriviaRef = useRef<HTMLDivElement | null>(null);
  const customConnectionsRef = useRef<HTMLDivElement | null>(null);
  const potluckPlannerRef = useRef<HTMLDivElement | null>(null);
  const happyCowsRef = useRef<HTMLDivElement | null>(null);

  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

  const projectsList = [
    <ProjectCard
      key={0}
      imgSrc={`${basePath}zen-trivia-game-screen.png`}
      title="Zen Trivia"
      description="A trivia web app powered by the Trivia API. Play a relaxing endless
                    singleplayer mode or compete with friends in multiplayer. There are
                    a variety of categories and difficulties to meet your fancy."
      visitLink="https://trivia-game-zen.vercel.app/"
      githubLink="https://github.com/ahjsuy/Zen-Trivia"
      tools={["React", "Typescript", "Express", "Websockets"]}
      ref={zenTriviaRef}
    />,
    <ProjectCard
      key={1}
      imgSrc={`${basePath}custom-connections.png`}
      title="Custom Connections"
      description="Inspired by the New York Times Connections, you can make your own Connections game with custom categories and send them to your friends."
      visitLink="https://custom-connections.vercel.app/"
      githubLink="https://github.com/ahjsuy/CustomConnections"
      tools={["React", "TypeScript", "Tailwind"]}
      ref={customConnectionsRef}
    />,

    <ProjectCard
      key={2}
      imgSrc={`${basePath}/happy-cows.png`}
      title="Happy Cows"
      description="Understand the Tragedy of Commons through metaphorical, immersive gameplay with others. Iteratively developed at UCSB with each CS156 course offering."
      visitLink="https://happycows.dokku-00.cs.ucsb.edu/"
      githubLink="https://github.com/ucsb-cs156/proj-happycows"
      tools={["React", "SpringBoot", "Storybook", "Docker"]}
      ref={happyCowsRef}
    />,
    <ProjectCard
      key={3}
      imgSrc={`${basePath}/potluck-planner.png`}
      title="Potluck Planner [In Progress]"
      description="Coordinate a potluck easily with this online planner. A collaborative interface and automated email notifications make event planning even easier."
      tools={["React", "TypeScript", "PostgresSQL", "Sequelize", "Express"]}
      ref={potluckPlannerRef}
    />,
  ];

  const skills_languages: string[] = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  ];
  const skills_frameworks: string[] = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",

    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  ];
  const skills_technologies: string[] = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/storybook/storybook-original-wordmark.svg",
  ];

  const svgSize = "72rem";

  useEffect(() => {
    window.scrollTo({
      top: 120,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar
        about={about}
        projects={projects}
        resume={resume}
        contact={contact}
      />
      <div className="pt-10">
        <section
          id="about"
          ref={about}
          className="scroll-mt-10 pl-20 pr-20 relative"
        >
          <div className="flex space-x-15 h-screen place-items-center">
            <div className="flex flex-col justify-items-center pl-5 w-6/12 space-y-3">
              <h2 className="text-5xl animated-slide font-oswald">
                Hello World. I<span>&apos;</span>m
              </h2>
              <hr className="w-[25%] mt-1"></hr>
              <div className="animated-slide-delay-1">
                <h1 className="text-8xl font-bold animated-color font-oswald">
                  Angelina Suy
                </h1>
              </div>
              <h3 className="pt-2 animated-slide-delay-2">
                a new grad software engineer focused on web development
              </h3>
              <div className="text-white flex flex-row pl-0 ml-0 gap-5">
                {[
                  [
                    "/linkedin.svg",
                    "https://www.linkedin.com/in/angelina-suy-9018291b2",
                  ],
                  ["/github.svg", "https://github.com/ahjsuy"],
                  ["/gmail.svg", "mailto:angelinasuy3@gmail.com"],
                ].map((item, index) => (
                  <div className="h-[2.5rem] w-[2.5rem]" key={index}>
                    <a href={item[1]} target="_blank">
                      <img
                        className="blue-gray-icon"
                        src={`${basePath}/${item[0]}`}
                        alt=""
                      />
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-3 p-10">
              <p>
                I<span>&apos;</span>m a new grad with a BS in Computer Science
                from the University of California Santa Barbara. My primary
                interest lies in web development, but I am always open and eager
                to pick up new experiences in adjacent fields.
              </p>
              <p>
                In the months following my graduation, I have been focusing on
                learning some practical skills I had not in academia through
                personal projects. I have created a trivia web app that supports
                both solo play and online multiplayer, a web app where users can
                create their own versions of the New York Time
                <span>&apos;</span>s Connections, and a few interactive birthday
                cards. Currently, I<span>&apos;</span>m working on a potluck
                planning web app. More information can be found further in this
                website.
              </p>
              <p>
                I am always open to job opportunities. In my free time, I love
                to read fantasy novels, draw, and play video games.
              </p>
            </div>
          </div>
        </section>
        <section
          className="flex-col justify-center place-content-center bg-[#1B263B] text-[#E0E1DD] p-15 pt-0 border-t border-gray-700"
          id="projects"
          ref={projects}
        >
          <h1 className="font-oswald text-5xl font-bold ml-20 mt-20">
            FEATURED PROJECTS
          </h1>
          <hr
            className={
              projectsInViewport
                ? "ml-20 mt-5 mb-10 w-[15rem] animated-grow-from-middle"
                : "ml-20 mt-5 mb-10 w-[15rem]"
            }
          ></hr>
          <div className="flex flex-col place-items-center">
            {projectsList.map((item, index) => (
              <div className="m-5 mb-10 max-w-[60%]" key={index}>
                {item}
              </div>
            ))}
          </div>
        </section>
        <section
          className="flex-col justify-center place-content-center p-20 pb-5 border-t border-gray-700"
          id="resume"
          ref={resume}
        >
          <h1 className="font-oswald text-5xl font-bold">SKILLS & EDUCATION</h1>
          <hr
            className={
              resumeInViewport
                ? "mt-5 mb-10 w-[15rem] animated-grow-from-middle"
                : "mt-5 mb-10 w-[15rem]"
            }
          ></hr>
          <div className="flex flex-col gap-5 text-center">
            <h2>Languages</h2>
            <div className="h-[20%] w-full flex flex-row place-content-center">
              <div className="m-5 pt-4 hvr-float-shadow">
                <img
                  height={svgSize}
                  width={svgSize}
                  src={`${basePath}/c.svg`}
                  alt=""
                />
              </div>
              {skills_languages.map((item, index) => (
                <div key={index} className="m-5 pt-4 hvr-float-shadow">
                  <img height={svgSize} width={svgSize} src={item} alt="" />
                </div>
              ))}
            </div>
            <h2>Frameworks & Libraries</h2>
            <div className="h-[20%] w-full flex flex-row place-content-center">
              {skills_frameworks.map((item, index) =>
                item.includes("express") ? (
                  <div
                    key={index}
                    className="m-5 pt-4 hvr-float-shadow white-icon"
                  >
                    <img height={svgSize} width={svgSize} src={item} alt="" />
                  </div>
                ) : (
                  <div key={index} className="m-5 pt-4 hvr-float-shadow">
                    <img height={svgSize} width={svgSize} src={item} alt="" />
                  </div>
                )
              )}
            </div>
            <h2>Developer Tools</h2>
            <div className="h-[20%] w-full flex flex-row place-content-center">
              {skills_technologies.map((item, index) => (
                <div key={index} className="m-5 pt-4 hvr-float-shadow">
                  <img height={svgSize} width={svgSize} src={item} alt="" />
                </div>
              ))}
              <div className="m-5 pt-4 hvr-float-shadow">
                <img
                  height={svgSize}
                  width={svgSize}
                  src={`${basePath}/stryker.svg`}
                  alt=""
                />
              </div>
              <div className="m-5 pt-4 hvr-float-shadow">
                <img
                  height={svgSize}
                  width={svgSize}
                  src={`${basePath}/pitest.svg`}
                  alt=""
                />
              </div>
            </div>
            <h2>Education</h2>
            <div className="flex flex-row place-content-center">
              <img
                className="m-5 "
                height={svgSize}
                width={svgSize}
                src={`${basePath}/ucsb.svg`}
                alt=""
              />
              <ul className="text-left">
                <li key={1}>B.S. Computer Science</li>
                <li key={2}>September 2021-September 2024</li>
                <li key={3}>3.59/4.00 GPA</li>
                <li key={4}>
                  Dean<span>&apos;</span>s Honors F21, W23, F23, W24
                </li>
                <li key={5}>Member of CoderSB and Women in Computer Science</li>
              </ul>
            </div>
            <div className="mt-5 border-bottom border-b ml-auto mr-auto">
              {" "}
              <a href="./Suy_Angelina_Resume.pdf" target="_blank">
                See my full resume
                <span className=" ml-2">&#8594;</span>
              </a>
            </div>
          </div>
        </section>
        <section
          className="bg-[#1B263B] flex flex-col justify-center place-content-center p-20 border-t border-gray-700"
          id="contact"
          ref={contact}
        >
          <h1 className="font-oswald text-5xl font-bold">CONTACT</h1>
          <hr
            className={
              contactInViewport
                ? "mt-5 mb-10 w-[15rem] animated-grow-from-middle"
                : "mt-5 mb-10 w-[15rem]"
            }
          ></hr>
          <div className="bg-[#0d1b2a] place-content-center text-center p-20 pb-15 pt-10 m-auto border border-gray-700 rounded-xl w-[50%]">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xqaqvyvb"
              method="POST"
            >
              <div className="pb-3">
                Leave me a message here or @
                <a href="mailto:angelinasuy3@gmail.com">
                  angelinasuy3@gmail.com
                </a>
                !
              </div>
              <div className="flex flex-col gap-[1.5rem] place-content-center">
                <div className="flex flex-col">
                  <label className="mr-auto ml-1 mb-1 text-lg" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="name"
                    name="name"
                    className="bg-gray-500 p-3 rounded-xl"
                    placeholder="John Smith"
                  ></input>
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="mr-auto ml-1 mb-1 text-lg" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    className="bg-gray-500 p-3 rounded-xl"
                    type="email"
                    placeholder="JohnSmith@gmail.com"
                  ></input>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="mr-auto ml-1 mb-1 text-lg"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="bg-gray-500 p-3 h-[20rem] rounded-xl"
                    placeholder="Message"
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
                <button
                  className="bg-[#415A77] ml-auto p-2 pl-4 pr-4 rounded-lg flex flex-row"
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                  <img
                    className="white-icon ml-2"
                    width={"24rem"}
                    height={"24rem"}
                    src={`${basePath}/mail.svg`}
                  />
                </button>
                {state.succeeded && <div>I will get back to you soon!</div>}
                {state.submitting && <div>Form submitting...</div>}
              </div>
            </form>
          </div>
        </section>
        <section
          className="flex flex-row box-border place-items-center border-t border-gray-700"
          id="footer"
        >
          <div className="flex flex-col p-3 place-content-center text-center m-auto">
            <div className="text-white flex flex-row gap-3 m-2">
              {[
                [
                  "./linkedin.svg",
                  "https://www.linkedin.com/in/angelina-suy-9018291b2",
                ],
                ["./github.svg", "https://github.com/ahjsuy"],
                ["./gmail.svg", "mailto:angelinasuy3@gmail.com"],
              ].map((item, index) => (
                <div className="h-[2.5rem] w-[2.5rem]" key={index}>
                  <a href={item[1]} target="_blank">
                    <img className="blue-gray-icon" src={item[0]} alt="" />
                  </a>
                </div>
              ))}
            </div>
            <div className="flex flex-row text-sm m-auto">
              <span>&copy;</span>
              <div className="ml-1">2025 Angelina Suy</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
