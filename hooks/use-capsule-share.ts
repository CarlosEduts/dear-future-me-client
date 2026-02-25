export const useShareCapsule = (id: string) => {
  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/capsule/${id}`
      : "";

  const handleShare = async () => {
    const shareData = {
      title: "Minha cápsula do tempo",
      text: "Confira minha cápsula do tempo no Dear Future Me!",
      url: shareUrl,
    };

    if (navigator.share && navigator.canShare?.(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Erro ao compartilhar:", error);
        }
      }
    } else {
      // Fallback para clipboard
      navigator.clipboard.writeText(shareUrl);
      alert("Link copiado para a área de transferência!");
    }
  };

  return { handleShare, shareUrl };
};
