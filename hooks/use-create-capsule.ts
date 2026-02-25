import { useState } from "react";
import { createCapsule } from "@/services/capsule.service";
import { useRouter } from "next/navigation";

export function useCreateCapsule() {
  const [message, setMessage] = useState("");
  const [unlockDate, setUnlockDate] = useState<Date | undefined>(new Date());
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message || !unlockDate) return alert("Preencha todos os campos");

    setIsPending(true);
    try {
      const response = await createCapsule({
        message,
        unlockDate: unlockDate.toISOString().split(".")[0],
      });

      // Redirecionar para a página de confirmação com o ID da cápsula recém-criada
      router.push(`/confirmation/${response.id}`);
    } catch (error) {
      console.error(error);
      alert("Erro ao selar cápsula. Tente novamente.");
    } finally {
      setIsPending(false);
    }
  };

  return {
    message,
    setMessage,
    unlockDate,
    setUnlockDate,
    isPending,
    handleSubmit,
  };
}
