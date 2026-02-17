import { getEnvVar } from "@/lib/utils";
import { CapsuleStatus, CapsuleData } from "@/types/capsule";
import { notFound } from "next/navigation";

export async function getCapsuleById(id: string): Promise<CapsuleStatus> {
  const baseUrl = getEnvVar("API_URL");
  const response = await fetch(`${baseUrl}/${id}`, {
    next: { revalidate: 3600 },
  });

  if (response.status === 404) notFound();

  const responseData = await response.json();

  if (response.status === 403) {
    return {
      status: "locked",
      // O horário do desbloqueio da cápsula vem na mensagem entre colchetes
      unlockDate: responseData.message.match(/\[(.*?)\]/)?.[1] || "",
    };
  }

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return { status: "unlocked", data: responseData as CapsuleData };
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
