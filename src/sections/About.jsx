import { useRef } from "react";
import Card from "@/components/Card";
import { Globe } from "@/components/globe";
import CopyEmailButton from "@/components/CopyEmailButton";
import { Frameworks } from "@/components/Frameworks";
import DownloadResume from "@/components/DownloadResume";

function About() {
  const grid2Container = useRef();

  const cards = [
    { text: "Javascript", style: { rotate: "75deg", top: "30%", left: "20%" } },
    { text: "Express", style: { rotate: "-40deg", top: "55%", left: "45%" } },
    { text: "MongoDB", style: { rotate: "45deg", top: "65%", left: "70%" } },
    { text: "REST API", style: { rotate: "10deg", top: "55%", left: "0%" } },
    { text: "Tailwind", style: { rotate: "10deg", top: "10%", left: "35%" } },
    {
      image: "/logos/postgre-round.png",
      style: { rotate: "70deg", top: "70%", left: "70%" },
    },
    {
      image: "/logos/react-round.png",
      style: { rotate: "-45deg", top: "70%", left: "25%" },
    },
    {
      image: "/logos/typescript-round.png",
      style: { rotate: "35deg", top: "20%", left: "5%" },
    },
    {
      image: "/logos/nodejs-round.png",
      style: { rotate: "-35deg", top: "30%", left: "50%" },
    },
    {
      image: "/logos/github-round.png",
      style: { rotate: "-45deg", top: "10%", left: "70%" },
    },
  ];

  return (
    <section className="about c-space section-spacing">
      <h2 className="text-heading">About Me</h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1 relative overflow-hidden">
          <img
            src="/coding-pov.png"
            alt="Coding illustration"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&apos;m Mozammil Tarique</p>
            <p className="subtext">
              A self-taught <strong>MERN stack</strong> developer passionate
              about building end-to-end web applications. Skilled in
              <strong> React</strong>, <strong>Node.js</strong>,
              <strong> Express</strong>, <strong>MongoDB</strong>,
              <strong> PostgreSQL</strong>, <strong>Zustand</strong> and
              <strong> Javascript</strong> I focus on creating scalable,
              user-friendly solutions across the full stack. <br />
              <span className="max-md:hidden">
                Before moving into tech, I spent 1.5 years as a Process
                Associate, gaining problem-solving, attention to detail, and
                communication skills that now shape how I approach development
                and collaboration.
              </span>
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-3/4 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2 relative">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-4xl text-balance tracking-tight text-gray-500 z-0">
              CODE. CREATE. CRAFT.
            </p>
            {cards.map((card, index) => (
              <Card
                key={index}
                style={card.style}
                text={card.text}
                image={card.image}
                containerRef={grid2Container}
              />
            ))}
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I&apos;m based in India, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="headtext text-center">
              Do you want to start a project together?
            </p>
            <div className="flex gap-4">
              <CopyEmailButton />
              <DownloadResume />
            </div>
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in diverse languages, frameworks, and tools that
              enable me to build robust, scalable applications.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
