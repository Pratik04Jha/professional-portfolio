import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EducationLevels from "./education-level";
import { educationDetails } from "../../../../lib/constants/EducationDetails";

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
        {educationDetails.map((items, index) => (
          <EducationLevels education={items} key={index} />
        ))}
      </CardContent>
    </Card>
  );
}
