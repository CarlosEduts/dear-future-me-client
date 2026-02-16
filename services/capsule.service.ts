import { getEnvVar } from "@/lib/utils";
import { CapsuleData } from "@/types/capsule";
import { notFound, forbidden } from "next/navigation";

export async function getCapsuleById(id: string): Promise<CapsuleData> {
  const baseUrl = getEnvVar("API_URL");

  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      next: { revalidate: 3600 },
    });

    if (response.status === 404) notFound();
    if (response.status === 403) forbidden();

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
    }

    return (await response.json()) as CapsuleData;
  } catch (error) {
    console.error(`Falha ao buscar cápsula ${id}:`, error);
    throw error; // Repassa o erro para o error.tsx do Next.js lidar
  }
}
