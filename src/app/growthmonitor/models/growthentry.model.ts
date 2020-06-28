import { IParticipant } from "./participant.model";

export interface IGrowthEntry {
  id: number;
  weight: number;
  height: number;
  date: Date;
  participant: IParticipant;
}
