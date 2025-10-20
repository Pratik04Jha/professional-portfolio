import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projectDetails } from "@/lib/constants";

export async function generateStaticParams() {
  return projectDetails.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;

  const project = projectDetails.find((p) => p.slug === slug);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/projects">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>
      </Link>

      <div className="space-y-8">
        <div className="space-y-4">
          <Image
            src={project.imgSrc}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full rounded-2xl object-cover object-center border border-[#292A2A]"
          />

          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
              <div className="flex gap-2 text-sm text-foreground/70">
                <span>{project.year}</span>
                <span>•</span>
                <span>{project.category}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link href={project.liveUrl} target="_blank">
                <Button>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </Link>
              {project.githubUrl && (
                <Link href={project.githubUrl} target="_blank">
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
          <p className="text-lg text-foreground/90">{project.description}</p>
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="flex gap-2 flex-wrap">
            {project.stack.map((tech, idx) => (
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

        {project.features && (
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.fullDescription && (
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">About This Project</h2>
            <div className="prose prose-invert max-w-none whitespace-pre-line">
              {project.fullDescription}
            </div>
          </div>
        )}

        {project.technologies && (
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Technologies Used</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {Object.entries(project.technologies).map(([category, techs]) => (
                <div key={category} className="space-y-2">
                  <h3 className="font-semibold capitalize">{category}</h3>
                  <ul className="space-y-1 text-foreground/80">
                    {techs.map((tech, idx) => (
                      <li key={idx}>• {tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
