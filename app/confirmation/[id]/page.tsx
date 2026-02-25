import ConfirmationPage from "@/components/ConfirmationPage";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Confirmation({ params }: PageProps) {
  const { id } = await params;

  return <ConfirmationPage id={id} />;
}
