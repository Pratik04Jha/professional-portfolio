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
      <div className="w-[50%] pl-5">
        <Image
          src={certifications.imgSrc}
          width={1000}
          height={100}
          alt=""
          className="w-full object-cover object-center rounded-2xl select-none pointer-events-none"
        />
      </div>
      <div className="w-[50%]">
        <CardHeader>
          <CardTitle className="text-2xl">{certifications.title}</CardTitle>

          <CardDescription className="text-foreground/90 flex flex-col gap-1 text-sm">
            {[
              { title: "Issuer", content: certifications.issuer },
              { title: "CredentialId", content: certifications.credentialId },
              { title: "IssuedData", content: certifications.issuedDate },
            ].map((items, index) => (
              <p>
                <strong>{items.title}: </strong> {items.content}
              </p>
            ))}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-between py-5 h-[70%]">
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
