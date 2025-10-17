import { GeistMono } from "geist/font/mono";
import { Card } from "../ui/card";
import ProjectCards from "./project-cards";

const projectsData = [
  {
    imgSrc: "/projects_img/ai.webp",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui", "vercel"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
];

export default function Projects() {
  return (
    <Card className="bg-accent/10 p-10">
      <h1
        className={`${GeistMono.className} text-3xl md:text-4xl font-bold tracking-tight  mb-2`}
      >
        Projects
      </h1>

      {projectsData.map((items, index) => (
        <ProjectCards items={items} key={index} />
      ))}
    </Card>
  );
}
