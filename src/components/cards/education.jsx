import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EducationLevels from "./education-level";

const education = [
  {
    school: {
      name: "Akash model school",
      degree: "Senior secondary education",
      exam: "CBSE",
      type: "School",
      year: "2017-2026",
      description:
        "Pursuing senior secondary education with a focus on science and technology. Engaging in academic excellence while developing practical skills in programming and software development.",
      image:
        "/education_img/school.webp",
      website: "https://akashmodelschool.in",
      subjects: ["Mathematics", "Physics", "Chemistry", "Physical education", "English"],
    },
  },
];

export default function EducationCard() {
  return (
    <Card className="bg-accent/10">
      <CardHeader>
        <CardTitle>Education</CardTitle>
        <CardDescription>
          Academic background and qualifications
        </CardDescription>
      </CardHeader>
      <CardContent>
        {education.map((items, index) => (
          <EducationLevels education={items} key={index} />
        ))}
      </CardContent>
    </Card>
  );
}
