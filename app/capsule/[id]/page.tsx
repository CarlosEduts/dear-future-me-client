import LockedCapsulePage from "@/components/LockedCapsulePage";
import UnlockedCapsulePage from "@/components/UnlockedCapsulePage";

export default function MyCapsule() {
  const locked = false; // Simulação de estado da cápsula
  return <>{locked ? <LockedCapsulePage /> : <UnlockedCapsulePage />}</>;
}
