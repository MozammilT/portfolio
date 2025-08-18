import OrbitingCircles from "./OrbitingCircles";

export function Frameworks() {
  const skillsOuter = [
    "javascript",
    "react",
    "nextjs",
    "typescript",
    "nodejs",
    "express",
    "mongodb",
    "postgres",
    "html",
    "css",
    "tailwind",
    "appwrite",
    "vercel",
    "git",
    "github",
    "figma",
    "vscode",
    "threejs",
  ];
  const skillsInner = [
    "css",
    "tailwind",
    "appwrite",
    "vercel",
    "git",
    "github",
    "figma",
    "vscode",
    "threejs",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} speed={1}>
        {skillsOuter.map((skill, index) => (
          <Icon key={index} src={`/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        {skillsInner.reverse().map((skill, index) => (
          <Icon key={index} src={`/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
