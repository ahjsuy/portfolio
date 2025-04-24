import Image from "next/image";

interface Props {
  imgSrc: string;
  title: string;
  visitLink?: string;
  description: string;
  githubLink?: string;
  detailsLink?: string;
}

const ProjectCard = ({
  imgSrc,
  title,
  visitLink,
  description,
  githubLink,
  detailsLink,
}: Props) => {
  return (
    <div className="w-[30%] h-[65vh]">
      <div className="bg-beige-50 rounded-3xl h-full p-5 shadow-md box-shadow text-black">
        <div className="w-full h-90 relative">
          <Image
            className="rounded-3xl"
            alt="Zen Trivia"
            src={imgSrc}
            fill={true}
            priority
          />
        </div>
        <div className="m-3">
          <h1 className="text-4xl font-oswald ml-5">{title}</h1>
          <p className="ml-5 mt-3 mb-0">{description}</p>
          <div className="flex w-full justify-end">
            <button
              type="button"
              className="bg-[#94bbe9] rounded-md pl-2 pr-2 pt-1 pb-1 m-1 text-white"
            >
              Visit
            </button>
            <button
              type="button"
              className="bg-[#c1b4d9] rounded-md pl-2 pr-2 pt-1 pb-1 m-1 text-white"
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
