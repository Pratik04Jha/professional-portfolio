import { Card } from "@/components/ui/card";
import { certificatesData } from "@/lib/constants/CertificatesData";

export default async function CertificatesDetailPage({ params }) {
  const { id } = await params;

  const certifications = certificatesData.find((p) => p.credentialId === id);

  return (
    <Card>
      {certifications.title}
    </Card>
  );
}
