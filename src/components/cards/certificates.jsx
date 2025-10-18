import { Award, ExternalLink, Calendar, Hash } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Certificates from "./certificate-card";

const certificates = [
  {
    title: "React Foundations",
    issuer: "Vercel",
    issuedDate: "September 2024",
    credentialId: "react-foundations",
    description:
      "Completed comprehensive training in React fundamentals, covering core concepts including components, props, state management, and hooks. Gained proficiency in building modern web applications using React best practices.",
    image: "/certificates_img/certificate.png",
    verifyUrl: "https://nextjs.org/learn/certificate?course=react-foundations&user=16898&certId=react-foundations-16898-1748260213558",
  },
  {
    title: "React Foundations",
    issuer: "Vercel",
    issuedDate: "September 2024",
    credentialId: "react-foundations",
    description:
      "Completed comprehensive training in React fundamentals, covering core concepts including components, props, state management, and hooks. Gained proficiency in building modern web applications using React best practices.",
    image: "/certificates_img/certificate.png",
    verifyUrl: "https://nextjs.org/learn/certificate?course=react-foundations&user=16898&certId=react-foundations-16898-1748260213558",
  },
  {
    title: "React Foundations",
    issuer: "Vercel",
    issuedDate: "May 2025",
    credentialId: "react-foundations",
    description:
      "Completed comprehensive training in React fundamentals, covering core concepts including components, props, state management, and hooks. Gained proficiency in building modern web applications using React best practices.",
    image: "/certificates_img/certificate.png",
    verifyUrl: "https://nextjs.org/learn/certificate?course=react-foundations&user=16898&certId=react-foundations-16898-1748260213558",
  },
];

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
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3 w-full justify-end">
          {certificates.map((items, index) => (
            <Certificates cert={items} key={index} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
