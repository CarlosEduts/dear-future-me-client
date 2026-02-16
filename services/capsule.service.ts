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

export async function getCapsuleCount(): Promise<number> {
  const baseUrl = getEnvVar("API_URL");

  try {
    const response = await fetch(`${baseUrl}/count`, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`Erro na API: ${response.status} ${response.statusText}`);
    }

    const data: number = await response.json();
    return data;
  } catch (error) {
    console.error("Falha ao buscar contagem de cápsulas:", error);
    throw error; // Repassa o erro para o error.tsx do Next.js lidar
  }
}
