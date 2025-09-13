import Image from "next/image";
import { useCheckInViewport } from "../functions/checkInViewport";

interface Props {
  imgSrc: string;
  title: string;
  visitLink?: string;
  description: string;
  githubLink?: string;
  detailsLink?: string;
  tools?: string[];
  ref: React.RefObject<HTMLDivElement | null>;
}

const ProjectCard = ({
  imgSrc,
  title,
  visitLink,
  description,
  githubLink,
  detailsLink,
  tools,
  ref,
}: Props) => {
  const elementInViewport = useCheckInViewport(ref, 0.2);
  return (
    <div
      className={
        elementInViewport
          ? "project-card flex flex-col sm:flex-row bg-[#0d1b2a] p-3 text-white rounded-lg shadow-md place-items-center scale scale-up "
          : "project-card flex flex-col sm:flex-row bg-[#0d1b2a] p-3 text-white rounded-lg shadow-mdplace-items-center scale scale-down"
      }
      ref={ref}
    >
      <div className="w-[100%] h-[15rem] sm:w-[30rem] sm:h-[15rem] relative">
        <Image
          className=""
          alt=""
          src={imgSrc}
          quality={100}
          fill
          priority
          style={{ borderRadius: "1.5rem" }}
        />
      </div>

      <div className="m-3 sm:p-1 pb-0 flex flex-col justify-between w-[75%] ">
        <h1 className="text-4xl font-oswald sm:ml-5 mt-2 mb-2">{title}</h1>
        <p className="sm:ml-5 sm:mt-3 sm:mb-5 mb-2">{description}</p>
        <div className="flex flex-row flex-wrap gap-[.5rem] text-sm sm:ml-5 ">
          {tools?.map((item, index) => (
            <div
              className="bg-[#778DA9] display-inline place-content-center pl-2 pr-2 rounded-3xl h-[1.25rem]"
              key={index}
            >
              {" "}
              {item}{" "}
            </div>
          ))}
        </div>
        <div className="flex flex-row sm:m-3 mb-0 mt-auto">
          <div className="flex w-full justify-end">
            {visitLink && (
              <button
                type="button"
                className="bg-[#415A77] rounded-md pl-2 pr-2 pt-1 pb-1 m-1 text-white"
              >
                <a href={visitLink} target="_blank">
                  Visit
                </a>
              </button>
            )}
            {githubLink && (
              <button
                type="button"
                className="bg-[#415A77] rounded-md pl-2 pr-2 pt-1 pb-1 m-1 text-white"
              >
                <a href={githubLink} target="_blank">
                  GitHub
                </a>
              </button>
            )}
            {detailsLink && (
              <button
                type="button"
                className="bg-[#415A77] rounded-md pl-2 pr-2 pt-1 pb-1 m-1 text-white"
              >
                Details
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
