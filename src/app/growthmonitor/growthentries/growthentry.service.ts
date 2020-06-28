import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { IGrowthEntry } from "../models/growthentry.model";

@Injectable()
export class GrowthEntryService {
  private _growthEntries: BehaviorSubject<IGrowthEntry[]>;

  private dataStore: {
    growthEntries: IGrowthEntry[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { growthEntries: [] };
    this._growthEntries = new BehaviorSubject<IGrowthEntry[]>([]);
  }

  get growthEntries(): Observable<IGrowthEntry[]> {
    return this._growthEntries.asObservable();
  }

  addGrowthEntry(growthEntry: IGrowthEntry): Promise<IGrowthEntry> {
    return new Promise((resolver, reject) => {
      growthEntry.id = this.dataStore.growthEntries.length + 1;
      this.dataStore.growthEntries.push(growthEntry);
      this._growthEntries.next(Object.assign({}, this.dataStore).growthEntries);
      resolver(growthEntry);
    });
  }

  growthEntryById(id: number) {
    return this.dataStore.growthEntries.find((x) => x.id === id);
  }

  loadAll() {
    const growthEntriesUrl = "http://localhost:3000/api/growthEntries";

    return this.http.get<IGrowthEntry[]>(growthEntriesUrl).subscribe(
      (data) => {
        this.dataStore.growthEntries = data;
        this._growthEntries.next(
          Object.assign({}, this.dataStore).growthEntries
        );
      },
      (error) => {
        console.log("Failed to fetch growthEntries");
      }
    );
  }
}
