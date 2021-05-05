import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { detailResult, ListPPc } from './../../mocks/data';
import { delay, tap, map } from 'rxjs/operators';
import {
  PPCDetailModel,
  PPCDetailValidationModel,
  PPCItemModel
} from 'src/app/models/ppc.model';
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
  accessToken =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MSIsImF1dGgiOiJhZG1pbiIsImlhdCI6MTYyMDEzMTcxNCwiZXhwIjoxNjIwMTM4OTE0fQ.HR_0_rNNuYwzouVao7n3BsYSfL6nA0WsNKzaC5NlqIwy-ydSZ3cE12cCtDq_P2vEiI1khB_jwwOT-BfB90DAUg';

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
          Authorization: this.accessToken
        }
      })
      .pipe(map((res: any) => res.map((r: any) => new PPCItemModel(r))));
  }

  getPPCDetail(id: string): Observable<any> {
    return this.http
      .get(`${this.baseUrl}/process-pending-case/${id}`, {
        headers: {
          Authorization: this.accessToken
        }
      })
      .pipe(map((res: any) => new PPCDetailModel(res)));
  }

  checkValidation(data: {
    customer_name: string;
    customer_phone: string;
    id: string;
    model_name: string;
    sell_out_date: Date;
    serial_number: string;
  }): Observable<any> {
    return this.http
      .post(`${this.baseUrl}/process-pending-case/validation`, data, {
        headers: {
          Authorization: this.accessToken
        }
      })
      .pipe(
        map((res: any) => res.map((r: any) => new PPCDetailValidationModel(r)))
      );
  }

  updatePPC(data: {
    customer_name: string;
    customer_phone: string;
    model_name: string;
    sell_out_date: Date;
    id: string;
    serial_number: string;
    note: string;
    status: string;
    validation: PPCDetailValidationModel[];
  }): Observable<any> {
    return this.http.put(
      `${this.baseUrl}/process-pending-case/${data.id}`,
      data,
      {
        headers: {
          Authorization: this.accessToken
        }
      }
    );
  }


}
