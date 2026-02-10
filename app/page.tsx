import HomePage from "@/components/HomePage";

async function getData() {
  const baseUrl = process.env.API_URL;

  if (!baseUrl) {
    throw new Error("API_URL não está definida nas variáveis de ambiente");
  }

  const response = await fetch(`${baseUrl}/count`, {
    next: { revalidate: 3600 }, // Cache de 1 hora
  });

  if (!response.ok) {
    throw new Error("Falha ao buscar dados");
  }

  return response.json();
}

export default async function Home() {
  const capsuleCount = await getData();

  return <HomePage capsuleCount={capsuleCount} />;
}
