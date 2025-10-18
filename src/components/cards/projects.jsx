import { GeistMono } from "geist/font/mono";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import ProjectCards from "./project-cards";
import { Button } from "../ui/button";

const projectsData = [
  {
    imgSrc: "/projects_img/project.png",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random.",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
  {
    imgSrc: "/projects_img/project.png",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
  {
    imgSrc: "/projects_img/project.png",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
  {
    imgSrc: "/projects_img/project.png",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
  {
    imgSrc: "/projects_img/project.png",
    title: "ZeniusVerse | The ultimate AI universe",
    description:
      "Perhaps you have wondered how predictable machines like computers can generate randomness. In reality, most random numbers used in computer programs are pseudo-random, which means they are generated in a predictable fashion using a mathematical formula",
    stack: ["nextjs", "ai-sdk", "supabase", "shad-cn-ui"],
    href: "https://artificial-intelligence-beta.vercel.app/",
    slug: "",
  },
  {
    imgSrc: "/projects_img/project.png",
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
    <Card className="bg-accent/10">
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia
          minus vel nam a sunt earum laboriosam.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-rows-2 grid-cols-3 gap-10">
          {projectsData.map((items, index) => (
            <ProjectCards items={items} key={index} />
          ))}
        </div>
        <Button variant="outline" className="py-6 w-full mt-5">
          View all projects
        </Button>
      </CardContent>
    </Card>
  );
}
