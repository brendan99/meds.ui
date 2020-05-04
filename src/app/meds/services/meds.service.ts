import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IDose, IMedication } from '../models/meds';
import { HttpClient } from '@angular/common/http';

const doseApi = '/api/doses';
const medsApi = '/api/meds';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private http: HttpClient) {}

  private doses: IDose[] = [];
  private dosesSubject = new BehaviorSubject<IDose[]>(this.doses);
  public doses$ = this.dosesSubject.asObservable();

  private meds: IMedication[] = [];
  private medsSubject = new BehaviorSubject<IMedication[]>(this.meds);
  public meds$ = this.medsSubject.asObservable();

  updateDoses(doses: IDose[]): Observable<object> {
    const req = this.http.put<IDose[]>(doseApi, doses);
    req.subscribe((retval) => {
      this.doses = retval;
      this.dosesSubject.next(this.doses);
    });
    return req;
  }

  public getdoses(): void {
    this.http.get<IDose[]>(doseApi).subscribe((doses) => {
      this.doses = doses;
      this.dosesSubject.next(this.doses);
    });
  }

  public getmeds(): void {
    this.http.get<IMedication[]>(medsApi).subscribe((meds) => {
      this.meds = meds;
      this.medsSubject.next(this.meds);
    });
  }
}
