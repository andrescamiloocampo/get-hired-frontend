import { environment } from './../../environments/environment.development';
import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface User {
  _id: string;
  email: string;
  name: string;
  givenName: string;
  provider: string;
  providerId: string;
  picture: string;
  role: string;
  __v: number;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);  
  private currentUser = signal<User | null>(null);

  getUser(): Observable<User> {
    const access_token = localStorage.getItem('access_token') ?? '';
    const tokenPayload = JSON.parse(atob(access_token?.split('.')[1]));
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${access_token}`,
    });

    return this.http
      .get<User>(
        `${environment.apiUrl}/user/getUser?email=${tokenPayload.email}`,
        {
          headers: httpHeaders,
        }
      )
      .pipe(
        tap((user) => {
          this.currentUser.set(user);
        })
      );
  }
}
