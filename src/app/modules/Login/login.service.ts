import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private http: HttpClient) { }

  login(user_name: string, password: string) {
    const bodyLoginRequest = {
      password,
      user_name
    }
    return this.http.post<any>(`${environment.baseUrl}/user/login`, bodyLoginRequest);
  }
}
