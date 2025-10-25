import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { MDXRemote } from "next-mdx-remote/rsc";
import BackButton from "@/components/ui/back-button";

export async function generateStaticParams() {
  const projectsFolder = path.join(
    process.cwd(),
    "src/content/educationDetails"
  );
  const files = fs.readdirSync(projectsFolder);

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function Education({ params }) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "src/content/educationDetails",
    `${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data: education, content } = matter(fileContent);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <BackButton />
      <div className="mb-8 flex flex-col gap-2 justify-center items-end">
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg ">
          <img
            src={education.imgSrc}
            alt={education.title}
            className="w-full h-full object-cover"
          />
        </div>
        <Link
          href={education.schoolWebUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary transition-all text-lg"
        >
          <Button variant="link">School official website </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-1">{education.title}</h1>
        <p className="text-xl mb-4">{education.schoolType}</p>
      </div>

      <div className="flex justify-between px-4 mb-8">
        {[
          { heading: "Duration", value: education.duration },
          { heading: "Duration", value: education.location },
          { heading: "Duration", value: education.exam },
        ].map((items, index) => (
          <div className="flex items-center gap-1 flex-col" key={index}>
            <p className="text-md font-bold ">{items.heading}</p>
            <p className="text-sm">{items.value}</p>
          </div>
        ))}
      </div>

      <Separator className="mb-8" />

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-semibold">About</h2>
        </div>
        <div className="project-content">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>
      </div>

      <Separator className="mb-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Subjects</h2>
        <div className="flex flex-wrap gap-2">
          {education.subjects.map((subject, index) => (
            <Badge key={index} variant="secondary" className="px-4 py-2 ">
              {subject}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
