import { Card } from "@/components/ui/card";
import { educationDetails } from "@/lib/constants/EducationDetails";

export default async function Education({ params }) {
  const { slug } = await params;

  const education = educationDetails.find((e) => e.slug === slug);

  return <Card>{education.name}</Card>;
}
