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

export default function EducationLevels({ education }) {
  return (
    <Card className="overflow-hidden flex flex-col md:flex-row md:px-5 items-center bg-accent/20">
      <div className="relative max-w-100 max-h-70 overflow-hidden bg-muted rounded-2xl">
        <Image
          src={education.imgSrc}
          alt={education.title}
          height={100}
          width={1000}
          className="w-full h-full object-cover pointer-events-none select-none"
        />
        <div className="absolute top-3 right-3">
          <Badge
            variant="secondary"
            className="backdrop-blur-sm bg-background/80"
          >
            {education.type}
          </Badge>
        </div>
      </div>

      <div className="flex flex-col">
        <CardHeader>
          <div className="space-y-1">
            <CardTitle className="text-2xl md:flex md:items-center md:gap-2">
              {education.title}
              <Badge variant="outline" className="text-[10px] ">
                {education.exam}
              </Badge>
            </CardTitle>
            <CardDescription className="text-sm font-medium text-foreground/80">
              {education.schoolType}
            </CardDescription>
            <div className="flex gap-2 items-center ">
              <p className="text-sm font-medium text-foreground/80">
                {education.duration}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {education.description}
          </p>

          <div>
            <h4 className="text-sm font-semibold mb-2">Key Subjects</h4>
            <div className="flex flex-wrap gap-2">
              {education.subjects.map((subject) => (
                <Badge key={subject} variant="secondary" className="">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Link href={`/education/${education.slug}`}>
              <Button variant="outline" className="font-semibold">
                View details
              </Button>
            </Link>
            <Link target="_blank" href={education.schoolWebUrl}>
              <Button className="font-semibold" variant="link">
                School website
              </Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
