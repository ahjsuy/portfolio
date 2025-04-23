import Zen from "../../../public/zen-trivia.png";
import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="w-[50%] h-[65vh]">
      <div className="bg-beige-50 rounded-3xl h-full p-5 shadow-md box-shadow text-black">
        <div className="w-full h-90 relative">
          <Image
            className="rounded-3xl"
            alt="Zen Trivia"
            src="/zen-trivia.png"
            fill={true}
            priority
          />
        </div>
        <div className="m-3">
          <h1 className="text-4xl font-oswald ml-5">Zen Trivia</h1>
          <p className="ml-5 mt-3 mb-0">
            A trivia web app powered by the Trivia API. Play a relaxing endless
            singleplayer mode or compete with friends in multiplayer. There are
            a variety of categories and difficulties to meet your fancy.
          </p>
          <div className="flex w-full justify-end">
            <button
              type="button"
              className="bg-teal-50 rounded-md pl-2 pr-2 pt-1 pb-1 m-1 text-white"
            >
              Visit
            </button>
            <button
              type="button"
              className="bg-teal-50 rounded-md pl-2 pr-2 pt-1 pb-1 m-1 text-white"
            >
              GitHub
            </button>
            <button
              type="button"
              className="bg-[#eeaeca] rounded-md pl-2 pr-2 pt-1 pb-1 m-1 text-white"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
