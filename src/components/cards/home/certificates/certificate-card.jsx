import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Certificates({ cert }) {
  return (
    <Card className="overflow-hidden md:w-105 bg-accent/20 flex-shrink-0">
      <CardHeader>
        <Image
          src={cert.image}
          alt={cert.title}
          width={100}
          height={100}
          className="object-cover object-center w-full rounded-2xl select-none pointer-events-none"
        />
        <CardTitle className="text-xl sm:text-2xl">{cert.title}</CardTitle>
        <CardDescription className="text-xs sm:text-sm line-clamp-3">
          {cert.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <div className="w-full flex flex-col gap-2 items-center justify-between">
          <div className="flex  flex-col w-full text-sm">
            <p className="text-xs text-muted-foreground">Issued</p>
            <p className="font-medium text-xs sm:text-sm">{cert.issuedDate}</p>
          </div>
          <div className="flex  flex-col w-full text-sm">
            <p className="text-xs text-muted-foreground">Credential ID</p>
            <p className="font-medium text-xs sm:text-sm">
              {cert.credentialId}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-2">
          <Link href={`/certificates/${cert.credentialId}`}>
            <Button
              variant="outline"
              size="sm"
              className="text-xs font-semibold sm:text-sm"
            >
              View certificate
            </Button>
          </Link>
          <Link href="/">
          <Button
            variant="link"
            size="sm"
            className="gap-2 text-xs font-semibold sm:text-sm"
          >
            Verify
          </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
