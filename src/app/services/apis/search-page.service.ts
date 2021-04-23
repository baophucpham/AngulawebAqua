import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchPersonResultModel } from 'src/app/models/person.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SearchPageService {
  constructor(private http: HttpClient) {}

  // public searchPerson(keyword: string): Observable<SearchPersonResultModel> {
  //   const params = new HttpParams().set('query', keyword);
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     }),
  //     params
  //   };
  //   return this.http
  //     .get(`${environment.baseUrl}/search_result_list`, options)
  //     .pipe(map((res: any) => new SearchPersonResultModel(res)));
  // }

  // // No using anymore
  // // Using for transform search string to history string
  // public getHistoryStringFromKeyword(keyword: string): Observable<string> {
  //   const params = new HttpParams().set('query', keyword);
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     }),
  //     params
  //   };
  //   return this.http
  //     .get(`${environment.baseUrl}/get_history`, options)
  //     .pipe(
  //       map((res: any) =>
  //         res.search_history.map((result: string) => `'${result}'`).join('、')
  //       )
  //     );
  // }
}
