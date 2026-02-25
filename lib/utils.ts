import { FormattedDate } from "@/types/capsule";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCapsuleDate(dateStr: string): FormattedDate {
  const date = new Date(dateStr);

  if (isNaN(date.getTime())) {
    throw new Error(`Data inválida recebida: ${dateStr}`);
  }

  return {
    year: date.getUTCFullYear(),
    month: date.toLocaleDateString("pt-BR", {
      month: "short",
      timeZone: "UTC",
    }),
    day: date.getUTCDate(),
    hour: date.getUTCHours(),
    minute: date.getUTCMinutes(),
  };
}
