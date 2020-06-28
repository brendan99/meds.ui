import { Injectable } from "@angular/core";
import { IParticipant } from "../models/participant.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { catchError, tap } from "rxjs/operators";
import { IGrowthEntry } from "../models/growthentry.model";
import { of } from "rxjs/observable/of";

@Injectable()
export class ParticipantService {
  participantsApi = "http://localhost:3000/api/participants";

  constructor(private http: HttpClient) {}

  getParticipants(): Observable<IParticipant[]> {
    return this.http
      .get<IParticipant[]>(this.participantsApi)
      .pipe(
        catchError(this.handleError<IParticipant[]>("getParticipants", []))
      );
  }

  getParticipant(id: number): Observable<IParticipant> {
    return this.http.get<IParticipant>(this.participantsApi + "/" + id).pipe(
      tap((data) => console.log(data)),
      catchError(this.handleError<IParticipant>("getParticipantById"))
    );
  }

  saveParticipant(participant) {
    const options = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };
    return this.http
      .post<IParticipant>(this.participantsApi, participant, options)
      .pipe(catchError(this.handleError<IParticipant>("saveParticipant")));
  }

  searchGrowthEntry(searchTerm: string): Observable<IGrowthEntry[]> {
    return this.http
      .get<IGrowthEntry[]>("/api/growthentries/search?search=" + searchTerm)
      .pipe(
        catchError(this.handleError<IGrowthEntry[]>("searchGrowthEntries"))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
