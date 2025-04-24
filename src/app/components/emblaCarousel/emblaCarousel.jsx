import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "../projectCard";

const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <ProjectCard
            imgSrc="/zen-trivia.png"
            title="Zen Trivia"
            description="A trivia web app powered by the Trivia API. Play a relaxing endless
  singleplayer mode or compete with friends in multiplayer. There are
  a variety of categories and difficulties to meet your fancy."
          />
        </div>
        <div className="embla__slide">
          <ProjectCard
            imgSrc=""
            title="Custom Connections"
            description="Inspired by the New York Times Connections, you can make your own Connections game with custom categories and send them to your friends."
          />
        </div>
        <div className="embla__slide">
          <ProjectCard
            imgSrc=""
            title="Potluck Planner"
            description="Coordinate a potluck easily with this online planner. A collaborative interface and automated email notifications make event planning even easier."
          />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
