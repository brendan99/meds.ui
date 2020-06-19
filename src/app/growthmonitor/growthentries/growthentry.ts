import { Participant } from "../participants/participant";

export class GrowthEntry {
  id: number;
  weight: number;
  height: number;
  date: Date;
  participant: Participant;
}
