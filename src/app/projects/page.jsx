import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { projectDetails } from "@/lib/constants/ProjectDetails";
import { ArrowLeft } from "lucide-react";
import ProjectCards from "@/components/cards/home/projects/project-cards";

const page = () => {
  return (
    <div className=" px-20">
      <Link href="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Button>
      </Link>
      <Card className="bg-accent/10">
        <CardHeader>
          <CardTitle>All projects</CardTitle>
          <CardDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi est a
            et! Ipsum maxime cupiditate ullam ab, obcaecati assumenda voluptas
            nulla?
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-rows-2 md:grid-cols-3 gap-10">
          {projectDetails.map((items, index) => (
            <ProjectCards items={items} key={index} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
