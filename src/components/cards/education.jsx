import { GraduationCap, ExternalLink, BookOpen } from "lucide-react";
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

const education = {
  school: {
    name: "Akash Model School",
    degree: "Senior Secondary Education",
    grade: "12th Grade",
    years: "Current",
    description:
      "Pursuing senior secondary education with a focus on science and technology. Engaging in academic excellence while developing practical skills in programming and software development.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=80",
    website: "https://akashmodelschool.in",
    subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
  },
};

export default function EducationCard() {
  return (
    <Card className="bg-accent/10">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg border bg-muted/50">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <CardTitle className="text-xl">Education</CardTitle>
            <CardDescription>
              Academic background and qualifications
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Card className="overflow-hidden flex flex-row px-5 items-center bg-accent/20">
          <div className="relative h-65 w-140 overflow-hidden bg-muted rounded-2xl">
            <img
              src={education.school.image}
              alt={education.school.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3">
              <Badge
                variant="secondary"
                className="backdrop-blur-sm bg-background/80"
              >
                {education.school.years}
              </Badge>
            </div>
          </div>

          <div className="flex flex-col">
            <CardHeader>
              <div className="space-y-1">
                <CardTitle className="text-2xl">
                  {education.school.name}
                </CardTitle>
                <CardDescription className="text-sm font-medium text-foreground/80">
                  {education.school.degree}
                </CardDescription>
                <Badge variant="outline" className="w-fit mt-1">
                  {education.school.grade}
                </Badge>
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
                    <Badge key={subject} variant="secondary">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <Link target="_blank" href={education.school.website}>
                  <Button variant="default" size="sm" className="gap-2">
                    Visit Website
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
      </CardContent>
    </Card>
  );
}
