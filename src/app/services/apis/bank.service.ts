import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { bank } from 'src/app/models/bank.model';

@Injectable()
export class Listbank {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getBank(params: {}): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/user`, {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MSIsImF1dGgiOiJhZG1pbiIsImlhdCI6MTYyMDEzMDg3NSwiZXhwIjoxNjIwMTM4MDc1fQ.JSb1aquICqaMn2pgy4yRzQZKL46WYgrCyROohrCVou6nGagdVFKyblA9eQ2vKUn1TKE2O9aydo8mqcTGcpeiOQ'
        }
      })
      .pipe(map((res: any) => res.map((r: any) => new bank(r))));
  }
}
