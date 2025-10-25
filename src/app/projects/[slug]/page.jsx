import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import BackButton from "@/components/ui/back-button";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  const projectsFolder = path.join(process.cwd(), "src/content/projectDetails");
  const files = fs.readdirSync(projectsFolder);

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "src/content/projectDetails",
    `${slug}.mdx`
  );
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { data: metadata, content } = matter(fileContent);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <BackButton />

      <div className="space-y-8">
        <div className="space-y-4">
          <img
            src={metadata.imgSrc}
            alt={metadata.title}
            width={1200}
            height={600}
            className="w-full rounded-2xl object-cover object-center border border-[#292A2A] pointer-events-none select-none "
          />

          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{metadata.title}</h1>
              <div className="flex gap-2 text-sm text-foreground/70">
                <span>{metadata.year}</span>
                <span>•</span>
                <span>{metadata.category}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href={metadata.liveUrl} target="_blank">
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </Link>
              {metadata.githubUrl && (
                <Link href={metadata.githubUrl} target="_blank">
                  <Button variant="outline">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-foreground/90">{metadata.description}</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="flex gap-2 flex-wrap">
            {metadata.tech.map((tech, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-semibold">About This Project</h2>
          <div className="project-content mt-8">
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
      </div>
    </div>
  );
}
