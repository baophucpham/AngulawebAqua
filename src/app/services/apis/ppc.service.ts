import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detailResult, ListPPc } from './../../mocks/data';
import { delay, tap, map } from 'rxjs/operators';
import { PPCModel } from 'src/app/models/ppc.model';
import { environment } from 'environments/environment';

@Injectable()
export class PPCService {
  status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

  productNames: string[] = [
    'Bamboo Watch',
    'Black Watch',
    'Blue Band',
    'Blue T-Shirt',
    'Bracelet',
    'Brown Purse',
    'Chakra Bracelet',
    'Galaxy Earrings',
    'Game Controller',
    'Gaming Set',
    'Gold Phone Case',
    'Green Earbuds',
    'Green T-Shirt',
    'Grey T-Shirt',
    'Headphones',
    'Light Green T-Shirt',
    'Lime Band',
    'Mini Speakers',
    'Painted Phone Case',
    'Pink Band',
    'Pink Purse',
    'Purple Band',
    'Purple Gemstone Necklace',
    'Purple T-Shirt',
    'Shoes',
    'Sneakers',
    'Teal T-Shirt',
    'Yellow Earbuds',
    'Yoga Mat',
    'Yoga Set'
  ];

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getListPPC(params: {
    keyWord?: string;
    end?: string;
    start?: string;
    statusId?: string;
  }): Observable<any> {
    const { end, keyWord, start, statusId } = params;
    const getParams = new HttpParams()
      .set('keyWord', keyWord || '')
      .set('end', end || '')
      .set('start', start || '')
      .set('statusId', statusId || '');
    return this.http
      .get(`${this.baseUrl}/process-pending-case`, {
        params: getParams,
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MSIsImF1dGgiOiJhZG1pbiIsImlhdCI6MTYyMDExMTczMCwiZXhwIjoxNjIwMTE4OTMwfQ.Ho5JLQWri2t4uINmxGwqa3KwAPb8WVUqnFnPweY7Gni3TK2yB7p9io70i94FJH7XnrVxpq9O9Ujnp3lrt9fz6A'
        }
      })
      .pipe(map((res: any) => res.map((r: any) => new PPCModel(r))));
  }
}
