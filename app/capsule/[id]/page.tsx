import LockedCapsulePage from "@/components/LockedCapsulePage";
import UnlockedCapsulePage from "@/components/UnlockedCapsulePage";
import { getCapsuleById } from "@/services/capsule.service";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CapsulePage({ params }: PageProps) {
  const { id } = await params;
  const result = await getCapsuleById(id);

  if (result.status === "locked") {
    return <LockedCapsulePage unlockDate={result.unlockDate} />;
  }

  const { data } = result;

  return (
    <UnlockedCapsulePage
      id={data.id}
      message={data.message}
      createdAt={data.createdAt}
      unlockDate={data.unlockDate}
    />
  );
}
