import CertificateDetails from "@/components/cards/home/certificates/CertificateDetails";
import Modal from "@/components/modal";
import { certificatesData } from "@/lib/constants/CertificatesData";

export default async function CertificatesDetailModal({ params }) {
  const { id } = await params;

  const certifications = certificatesData.find((p) => p.credentialId === id);

  return (
    <Modal>
        <CertificateDetails certifications={certifications} />
    </Modal>
  );
}
