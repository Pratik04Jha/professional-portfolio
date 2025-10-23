import CertificateDetails from "@/components/cards/home/certificates/CertificateDetails";
import BackButton from "@/components/ui/back-button";
import { certificatesData } from "@/lib/constants/CertificatesData";

export default async function CertificatesDetailPage({ params }) {
  const { id } = await params;

  const certifications = certificatesData.find((p) => p.credentialId === id);

  return (
    <div className="px-20">
<BackButton />
      <CertificateDetails certifications={certifications} />
    </div>
  
  );
}
