import { Participant } from "./participant";

export interface Entry {
  id: number;
  date: Date;
  height: number;
  weight: number;
  participant: Participant;
  note: string;
}
