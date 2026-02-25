import HomePage from "@/components/HomePage";
import { getCapsuleCount } from "@/services/capsule.service";

export default async function Home() {
  const capsuleCount = await getCapsuleCount();
  return <HomePage capsuleCount={capsuleCount} />;
}
