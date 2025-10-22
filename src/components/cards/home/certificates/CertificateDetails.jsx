import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function CertificateDetails({ certifications }) {
  return (
    <Card className="flex flex-row ">
      
      <div className="w-[50%] rounded-2xl overflow-hidden">
        <Image
          src={certifications.imgSrc}
          width={1000}
          height={100}
          alt=""
          className="w-full object-cover rounded-2xl pl-5 select-none pointer-events-none"
        />
      </div>
      <div className="w-[50%]">
        <CardHeader>
          <CardTitle className="text-2xl">{certifications.title}</CardTitle>

          <CardDescription className="text-foreground/90 flex flex-col gap-1 text-sm">
            <p>
              <strong>Issuer: </strong> {certifications.issuer}
            </p>
            <p>
              <strong>CredentialId: </strong> {certifications.credentialId}
            </p>
            <p>
              <strong>IssuedData: </strong> {certifications.issuedDate}
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col h-[78%] justify-between py-5">
          <p>{certifications.description}</p>
          <div>
            <Link href={certifications.pdfSrc} target="_blank">
              <Button variant="outline">View pdf</Button>
            </Link>
            <Link href={certifications.verificationLink} target="_blank">
              <Button variant="link">Verification link</Button>
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
