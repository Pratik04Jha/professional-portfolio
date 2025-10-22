import CertificateDetails from "@/components/cards/home/certificates/CertificateDetails";
import { certificatesData } from "@/lib/constants/CertificatesData";

export default async function CertificatesDetailPage({ params }) {
  const { id } = await params;

  const certifications = certificatesData.find((p) => p.credentialId === id);

  return <CertificateDetails certifications={certifications} />;
}
