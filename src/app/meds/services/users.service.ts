import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../models/meds';
import { HttpClient } from '@angular/common/http';

const url = '/api/users';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private http: HttpClient) {}
  private users: IUser[] = [];

  private usersSubject = new BehaviorSubject<IUser[]>(this.users);

  public users$ = this.usersSubject.asObservable();

  updateUsers(users: IUser[]): Observable<object> {
    const req = this.http.put<IUser[]>(url, users);
    req.subscribe((retval) => {
      this.users = retval;
      this.usersSubject.next(this.users);
    });
    return req;
  }

  public getUsers(): void {
    this.http.get<IUser[]>(url).subscribe((users) => {
      this.users = users;
      this.usersSubject.next(this.users);
    });
  }
}
