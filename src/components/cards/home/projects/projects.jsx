import { GeistMono } from "geist/font/mono";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../ui/card";
import ProjectCards from "./project-cards";
import { Button } from "../../../ui/button";
import { projectDetails } from "@/lib/constants/ProjectDetails";
import Link from "next/link";

export default function Projects() {
  return (
    <Card className="bg-accent/10">
      <CardHeader>
        <CardTitle>Featured projects</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia
          minus vel nam a sunt earum laboriosam.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-5 flex-col">
        <div className="grid md:grid-rows-1 md:grid-cols-3 gap-10">
          {projectDetails.map((items, index) =>
            items.featured ? <ProjectCards items={items} key={index} /> : null
          )}
        </div>
        <Link href="/projects" className="w-full">
          <Button variant="outline" className=" py-6 w-full">
            View all projects
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
