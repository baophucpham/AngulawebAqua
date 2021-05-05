import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ListUser } from "src/app/models/listUser.model";

@Injectable()
export class ListUserService {
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

  constructor(private http: HttpClient) { }

  getListUser(params: {
    keyWord?: string;
    role?: string;
  }): Observable<any> {
    const { keyWord,role} = params;
    const getParams = new HttpParams()
      .set('keyWord', keyWord || '')
      .set('role', role || '')
    return this.http
      .get(`${this.baseUrl}/user`, {
        params: getParams,
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MSIsImF1dGgiOiJhZG1pbiIsImlhdCI6MTYyMDEzMDg3NSwiZXhwIjoxNjIwMTM4MDc1fQ.JSb1aquICqaMn2pgy4yRzQZKL46WYgrCyROohrCVou6nGagdVFKyblA9eQ2vKUn1TKE2O9aydo8mqcTGcpeiOQ'
        }
      })
      .pipe(map((res: any) => res.map((r: any) => new ListUser(r))));
  }

  postCreateUser(
    account_number: string,
    bank_name: string,
    email: string,
    id_card: string,
    password: string,
    phone: any,
    role_id: any,
    shop_code: string,
    shop_name: string,
    user_name: string,
    user_name_bank:string,
  ) {
    const bodyCreateRequest = {
      account_number,
      bank_name,
      email,
      id_card,
      password,
      phone,
      role_id,
      shop_code,
      shop_name,
      user_name,
      user_name_bank,
    }
    return this.http.post<any>(`${environment.baseUrl}/user`, bodyCreateRequest);
  }

}
