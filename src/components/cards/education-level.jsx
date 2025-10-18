import { BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function EducationLevels({ education }) {
  return (
    <Card className="overflow-hidden flex flex-row px-5 items-center bg-accent/20">
      <div className="relative h-65 w-140 overflow-hidden bg-muted rounded-2xl">
        <Image
          src={education.school.image}
          alt={education.school.name}
          height={100}
          width={100}
          className="w-full h-full object-cover pointer-events-none select-none"
        />
        <div className="absolute top-3 right-3">
          <Badge
            variant="secondary"
            className="backdrop-blur-sm bg-background/80"
          >
            {education.school.type}
          </Badge>
        </div>
      </div>

      <div className="flex flex-col">
        <CardHeader>
          <div className="space-y-1">
            <div className="flex gap-2 items-center">
              <CardTitle className="text-2xl">
                {education.school.name}
              </CardTitle>
              <Badge variant="outline" className="text-[10px]">
                {education.school.exam}
              </Badge>
            </div>
            <CardDescription className="text-sm font-medium text-foreground/80">
              {education.school.degree}
            </CardDescription>
            <div className="flex gap-2 items-center ">
              <p className="text-sm font-medium text-foreground/80">
                {education.school.year}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {education.school.description}
          </p>

          <div>
            <h4 className="text-sm font-semibold mb-2">Key Subjects</h4>
            <div className="flex flex-wrap gap-2">
              {education.school.subjects.map((subject) => (
                <Badge key={subject} variant="secondary" className="">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Link target="_blank" href={education.school.website}>
              <Button className="font-semibold">
                <ExternalLink /> <p className="pr-2">Visit website</p>
              </Button>
            </Link>
            <Button variant="outline" size="sm" className="gap-2">
              <BookOpen className="w-4 h-4" />
              Related Blogs
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
