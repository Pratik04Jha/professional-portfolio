import { GeistMono } from "geist/font/mono";
import { Card } from "../ui/card";
import ProjectCards from "./project-cards";
import { Button } from "../ui/button";

const projectsData = [
  {
    imgSrc: "/projects_img/ai.webp",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random.",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
  {
    imgSrc: "/projects_img/ai.webp",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
  {
    imgSrc: "/projects_img/ai.webp",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
  {
    imgSrc: "/projects_img/ai.webp",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
  {
    imgSrc: "/projects_img/ai.webp",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
  {
    imgSrc: "/projects_img/ai.webp",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
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
      <div className="grid grid-rows-2 grid-cols-3 gap-10">
        {projectsData.map((items, index) => (
          <ProjectCards items={items} key={index} />
        ))}
      </div>
      <Button variant="outline" className="py-6">
        View all projects
      </Button>
    </Card>
  );
}
