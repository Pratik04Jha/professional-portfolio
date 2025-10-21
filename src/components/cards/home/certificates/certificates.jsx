import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Certificates from "./certificate-card";
import { certificatesData } from "@/lib/constants/CertificatesData";

export default function CertificatesCard() {
  return (
    <Card className="w-full bg-accent/10">
      <CardHeader>
        <CardTitle>Certificates</CardTitle>
        <CardDescription>
          Professional certifications and achievements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-5 overflow-x-auto pb-4">
          {certificatesData.map((items, index) => (
            <Certificates cert={items} key={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};