import { isPlatformBrowser } from '@angular/common';
import { inject, Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, catchError } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isBrowser: boolean;
  private http = inject(HttpClient);
  private authState = signal(false);

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  public setToken(token: string): void {
    if (this.isBrowser) localStorage.setItem('access_token', token);
  }

  public getToken(): string | null {
    if (this.isBrowser) return localStorage.getItem('access_token');
    return null;
  }

  public logout(): void {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  public isAuthenticated(): Observable<boolean> {
    const token = this.getToken();

    if (!token) {
      this.authState.set(false);
      return of(false);
    }

    return this.http
      .post<{ status: boolean }>(`${environment.apiUrl}/auth/validate`, {
        token,
      })
      .pipe(
        map((response) => {
          const isAuth = response.status || false;
          this.authState.set(isAuth);
          return isAuth;            
        }),
        catchError(() => {
          this.authState.set(false);
          return of(false);
        })
      );
  }
}
