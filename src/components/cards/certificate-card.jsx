import { Award, ExternalLink, Calendar, Hash } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Certificates({ cert }) {
  return (
    <Card className="overflow-hidden md:w-105 bg-accent/20">
      <CardHeader>
        <Image
          src={cert.image}
          alt={cert.title}
          width={100}
          height={100}
          className="object-cover object-center w-full rounded-2xl select-none pointer-events-none"
        />
        <CardTitle className="text-2xl">{cert.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-3">
          {cert.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="w-full flex flex-col gap-2 items-center justify-between">
          <div className="flex  flex-col w-full text-sm">
            <p className="text-xs text-muted-foreground">Issued</p>
            <p className="font-medium">{cert.issuedDate}</p>
          </div>
          <div className="flex  flex-col w-full text-sm">
            <p className="text-xs text-muted-foreground">Credential ID</p>
            <p className="font-medium">{cert.credentialId}</p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Button variant="default" size="sm">
            View certificate
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <ExternalLink className="w-4 h-4" />
            Credential ID
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
