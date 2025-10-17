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

const certificates = [
  {
    title: "React Foundations",
    issuer: "Vercel",
    issuedDate: "September 2024",
    credentialId: "VRC-2024-RF-8293",
    description:
      "Completed comprehensive training in React fundamentals, covering core concepts including components, props, state management, and hooks. Gained proficiency in building modern web applications using React best practices.",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80",
    verifyUrl: "https://vercel.com/verify",
  },
];

export default function CertificatesCard() {
  return (
    <Card className="w-full bg-accent/10">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg border bg-muted/50">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <CardTitle className="text-xl">Certificates</CardTitle>
            <CardDescription>
              Professional certifications and achievements
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {certificates.map((cert) => (
            <Card
              key={cert.credentialId}
              className="overflow-hidden flex flex-row items-center justify-start px-5 gap-6 bg-accent/10"
            >
              <div className="relative h-50 w-100 rounded-2xl overflow-hidden bg-muted">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-4">
                  <Badge
                    variant="secondary"
                    className="backdrop-blur-sm bg-background/90"
                  >
                    {cert.issuer}
                  </Badge>
                </div>
              </div>
              <div className="w-full">
                <CardHeader>
                  <CardTitle className="text-2xl">{cert.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {cert.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 ">
                  <div className="flex gap-6 py-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Issued</p>
                        <p className="font-medium">{cert.issuedDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Hash className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Credential ID
                        </p>
                        <p className="font-medium font-mono text-xs">
                          {cert.credentialId}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="default" size="sm" className="w-50 gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Verify Certificate
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
