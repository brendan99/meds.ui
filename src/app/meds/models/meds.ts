export interface IDose {
  id: number;
  date: Date;
  medication: IMedication;
  notes: string;
}

export interface IMedication {
  id: number;
  name: string;
  description: string;
}

export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  sex: string;
  dateofbirth: Date;
}
