import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { resolve } from "q";
import { GrowthEntry } from "./growthentry";

@Injectable()
export class GrowthEntryService {
  private _growthEntries: BehaviorSubject<GrowthEntry[]>;

  private dataStore: {
    growthEntries: GrowthEntry[];
  };

  constructor(private http: HttpClient) {
    this.dataStore = { growthEntries: [] };
    this._growthEntries = new BehaviorSubject<GrowthEntry[]>([]);
  }

  get growthEntries(): Observable<GrowthEntry[]> {
    return this._growthEntries.asObservable();
  }

  addGrowthEntry(growthEntry: GrowthEntry): Promise<GrowthEntry> {
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

    return this.http.get<GrowthEntry[]>(growthEntriesUrl).subscribe(
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
