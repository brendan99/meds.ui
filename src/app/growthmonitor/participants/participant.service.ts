import { Injectable } from "@angular/core";
import { Participant } from "./participant";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { resolve } from "q";

@Injectable()
export class ParticipantService {
  private _participants: BehaviorSubject<Participant[]>;

  private dataStore: {
    participants: Participant[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { participants: [] };
    this._participants = new BehaviorSubject<Participant[]>([]);
  }

  get participants(): Observable<Participant[]> {
    return this._participants.asObservable();
  }

  addParticipant(participant: Participant): Promise<Participant> {
    return new Promise((resolver, reject) => {
      participant.id = this.dataStore.participants.length + 1;
      this.dataStore.participants.push(participant);
      this._participants.next(Object.assign({}, this.dataStore).participants);
      resolver(participant);
    });
  }

  participantById(id: number) {
    return this.dataStore.participants.find((x) => x.id === id);
  }

  loadAll() {
    const participantsUrl =
      "https://angular-material-api.azurewebsites.net/users";

    return this.http.get<Participant[]>(participantsUrl).subscribe(
      (data) => {
        this.dataStore.participants = data;
        this._participants.next(Object.assign({}, this.dataStore).participants);
      },
      (error) => {
        console.log("Failed to fetch participants");
      }
    );
  }
}
