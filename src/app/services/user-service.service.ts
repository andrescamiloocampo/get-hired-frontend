import { environment } from './../../environments/environment.development';
import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import type { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  private currentUser = signal<User | null>(null);

  public getUser(): Observable<User> {
    if (this.currentUser() !== null) {
      return new Observable<User>((observer) => {
        observer.next(this.currentUser()!);
        observer.complete();
      });
    }
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

  public getUserEnrollment(
    id: string
  ): Observable<{ message: string; status: boolean | null }> {
    const access_token = localStorage.getItem('access_token') ?? '';
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${access_token}`,
    });

    return this.http.get<{ message: string; status: boolean | null }>(
      `${environment.apiUrl}/user/getEnrollment?id=${id}`,
      {
        headers: httpHeaders,
      }
    );
  }
}
