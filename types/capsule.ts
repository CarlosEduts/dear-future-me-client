export type CapsuleStatus =
  | { status: "unlocked"; data: CapsuleData }
  | { status: "locked"; unlockDate: string };

export interface CapsuleData {
  id: string;
  message: string;
  createdAt: string;
  unlockDate: string;
}

export interface FormattedDate {
  year: number;
  month: string;
  day: number;
  hour: number;
  minute: number;
}
