"use client";

import { useRef, useState, useEffect } from "react";
import Navbar from "./components/navbar";
import ProjectCard from "./components/projectCard";
import EmblaCarousel from "./components/emblaCarousel/emblaCarousel";

export default function Home() {
  const about = useRef<HTMLElement | null>(null);
  const projects = useRef<HTMLElement | null>(null);
  const resume = useRef<HTMLElement | null>(null);
  const contact = useRef<HTMLElement | null>(null);

  const [selectedSection, setSelectedSection] = useState(0);
  const projectsList = [
    <ProjectCard
      imgSrc="/zen-trivia.png"
      title="Zen Trivia"
      description="A trivia web app powered by the Trivia API. Play a relaxing endless
singleplayer mode or compete with friends in multiplayer. There are
a variety of categories and difficulties to meet your fancy."
    />,
    <ProjectCard
      imgSrc="/zen-trivia.png"
      title="Custom Connections"
      description="Inspired by the New York Times Connections, you can make your own Connections game with custom categories and send them to your friends."
    />,
    <ProjectCard
      imgSrc="/zen-trivia.png"
      title="Potluck Planner"
      description="Coordinate a potluck easily with this online planner. A collaborative interface and automated email notifications make event planning even easier."
    />,
  ];

  useEffect(() => {
    window.scrollTo({
      top: 120, // change this to your desired scroll Y offset
      behavior: "smooth", // or "auto"
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
        <section id="about" ref={about} className="scroll-mt-10 pl-20 pr-20">
          <div className="flex space-x-15 h-screen place-items-center">
            <div className="flex flex-col justify-items-center pl-5 w-6/12 space-y-3">
              <h2 className="text-5xl animated-slide font-oswald">
                Hello World. I'm
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
            </div>
            <div className="flex flex-col space-y-3 p-10 ">
              <p>
                I'm a new grad with a BS in Computer Science from University
                Santa Barbara. My primary interest lies in web development, but
                I am always open to learning and developing new skills in any
                technology-related field.
              </p>
              <p>
                In the months following my graduation, I focused on learning
                some practical skills I had not in academia through personal
                projects. I created a trivia web app that supports both solo
                play and online multiplayer, a potluck planner that facillitated
                group collaboration, and a few interactive birthday cards.
                Through it all, I tried to document the process to categorize
                and internalize what I learned.
              </p>
              <p>
                I am always open to job opportunities. When I'm not sat in front
                of a terminal, I like to read fantasy books, draw, and play
                games.
              </p>
            </div>
          </div>
        </section>
        <section
          className="flex-col justify-center place-items-center bg-jet-50 p-20 h-screen"
          id="projects"
          ref={projects}
        >
          <h1 className="font-oswald text-5xl mb-15">PROJECTS</h1>
          <div className="flex flex-row space-x-15">
            {projectsList[0]}
            {projectsList[1]}
            {projectsList[2]}
          </div>
          {/* <EmblaCarousel /> */}
        </section>
        <section id="resume" ref={resume}>
          <div className="h-screen">
            <h1>Education</h1>
          </div>
        </section>
        <section id="contact" ref={contact}>
          <div className="h-screen bg-jet-50"></div>
        </section>
      </div>
    </div>
  );
}
