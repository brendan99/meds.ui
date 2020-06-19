import { GrowthEntry } from "../growthEntries/growthentry";

export class Participant {
  id: number;
  dateofbirth: Date;
  name: string;
  bio: string;
  growthEntries: GrowthEntry[] = [];
}
