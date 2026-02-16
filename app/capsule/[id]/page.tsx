import UnlockedCapsulePage from "@/components/UnlockedCapsulePage";
import { getCapsuleById } from "@/services/capsule.service";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CapsulePage({ params }: PageProps) {
  const { id } = await params;
  const capsule = await getCapsuleById(id);

  return (
    <UnlockedCapsulePage
      id={capsule.id}
      message={capsule.message}
      createdAt={capsule.createdAt}
      unlockDate={capsule.unlockDate}
    />
  );
}
