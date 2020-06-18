import { Note } from "../notes/note";

export class Participant {
  id: number;
  birthDate: Date;
  name: string;
  avatar: string;
  bio: string;

  notes: Note[] = [];
}
