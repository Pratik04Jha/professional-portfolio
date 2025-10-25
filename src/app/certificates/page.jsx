import Certificates from "@/components/cards/home/certificates/certificate-card";
import BackButton from "@/components/ui/back-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { certificatesData } from "@/lib/constants/CertificatesData";
import React from "react";

const CertificatesPage = () => {
  return (
    <div className="px-20">
      <BackButton />
      <Card>
        <CardHeader>
          <CardTitle>All certificates</CardTitle>
          <CardDescription>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
            voluptates molestias a quam vero, eum iusto optio accusantium,
            repellat doloremque dolor.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-3 justify-center">
          {certificatesData.map((cert, index) => (
            <Certificates cert={cert} key={index} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificatesPage;
