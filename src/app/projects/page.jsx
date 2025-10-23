import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { projectDetails } from "@/lib/constants/ProjectDetails";
import ProjectCards from "@/components/cards/home/projects/project-cards";
import BackButton from "@/components/ui/back-button";

const page = () => {
  return (
    <div className=" px-20">
      <BackButton />
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
