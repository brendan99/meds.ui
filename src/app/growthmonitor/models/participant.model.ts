import { IGrowthEntry } from "./growthentry.model";

export interface IParticipant {
  id: number;
  dateOfBirth: Date;
  name: string;
  notes: string;
  growthEntries: IGrowthEntry[];
}
