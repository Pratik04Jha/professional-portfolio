import Modal from "@/components/modal";
import { Card } from "@/components/ui/card";
import { certificatesData } from "@/lib/constants/CertificatesData";

export default async function CertificatesDetailModal({ params }) {
  const { id } = await params;

  const certifications = certificatesData.find((p) => p.credentialId === id);

  return (
    <Modal>
      <Card className="fixed top-10 left-10">{certifications.title}</Card>
    </Modal>
  );
}
