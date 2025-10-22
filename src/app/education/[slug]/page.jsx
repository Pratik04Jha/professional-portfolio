import { educationDetails } from "@/lib/constants/EducationDetails";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  GraduationCap,
  BookOpen,
  Award,
  MapPin,
  ExternalLink,
  MoveUpRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function Education({ params }) {
  const { slug } = await params;

  const education = educationDetails.find((e) => e.slug === slug);

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <Link href="/">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to home
        </Button>
      </Link>
      <div className="mb-8 flex flex-col gap-2 justify-center items-end">
        <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg ">
          <img
            src={education.image}
            alt={education.name}
            className="w-full h-full object-cover"
          />
        </div>
        <Link
          href={education.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary transition-all text-lg"
        >
          <Button variant="link">School official website </Button>
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-1">{education.name}</h1>
        <p className="text-xl mb-4">{education.degree}</p>
      </div>

      <div className="flex justify-between px-4 mb-8">
        <div className="flex items-center gap-1 flex-col">
          <p className="text-md font-bold ">Duration:</p>
          <p className="text-sm">{education.year}</p>
        </div>
        <div className="flex items-center gap-1 flex-col">
          <p className="text-md font-bold ">Location:</p>
          <p className="text-sm">{education.location}</p>
        </div>
        <div className="flex items-center gap-1 flex-col">
          <p className="text-md font-bold ">Exam:</p>
          <p className="text-sm">{education.exam}</p>
        </div>
      </div>

      <Separator className="mb-8" />

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-2xl font-semibold">About</h2>
        </div>
        <p className=" prose prose-invert whitespace-pre-line">{education.description}</p>
      </div>

      <Separator className="mb-8" />

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Subjects</h2>
        <div className="flex flex-wrap gap-2">
          {education.subjects.map((subject, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 "
            >
              {subject}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
