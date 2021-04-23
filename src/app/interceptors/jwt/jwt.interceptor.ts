import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, Observable, ObservableInput, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: any) {} // replace any type by AuthenticationService class
  private refreshTokenInProgress = false;
  // Refresh Token Subject tracks the current token, or is null if no token is currently
  // available (e.g. refresh pending).
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // const currentUser = this.authenticationService.currentUserValue;
    // if (currentUser && currentUser.access_token) {
    //   // User was login
    //   request = this.addTokenToRequest(request, currentUser.access_token);
    // }
    // if (
    //   request.method === 'POST' ||
    //   request.method === 'PUT' ||
    //   request.method === 'DELETE'
    // ) {
    //   this.trimAllValue(request.body);
    // }
    return next.handle(request);
    // .pipe(
    //   catchError(error => {
    //     // Unauthorize error occur => access_token expire
    //     if (error instanceof HttpErrorResponse && error.status === 401) {
    //       return this.handle401Error(request, next, error); // Get new access_token
    //     } else {
    //       if (request.url.includes('/oauth/token/')) {
    //         this.authenticationService.logout();
    //       }
    //       return throwError(error);
    //     }
    //   })
    // );
  }

  // Handle when access_token expire
  // handle401Error(
  //   request: HttpRequest<any>,
  //   next: HttpHandler,
  //   error: any
  // ): ObservableInput<any> {
  //   // Uncheck for login api
  //   if (!request.url.includes('/oauth/')) {
  //     if (!this.refreshTokenInProgress) {
  //       // Refresh token
  //       this.refreshTokenInProgress = true;
  //       this.refreshTokenSubject.next(null);
  //       return this.authenticationService.refreshAccessToken().pipe(
  //         switchMap((refreshData: any) => {
  //           this.refreshTokenInProgress = false;
  //           this.refreshTokenSubject.next(refreshData); // Use in else case below
  //           const previousUser = JSON.parse(
  //             localStorage.getItem('currentUser') || JSON.stringify({})
  //           );
  //           const currentUser = Object.assign({}, previousUser, {
  //             access_token: refreshData.access_token,
  //             refresh_token: refreshData.refresh_token,
  //             access_token_expires_in: refreshData.access_token_expires_in,
  //             refresh_token_expires_in: refreshData.refresh_token_expires_in,
  //             token_type: refreshData.token_type
  //           });
  //           localStorage.setItem('currentUser', JSON.stringify(currentUser));
  //           this.authenticationService.currentUserSubject.next(currentUser);
  //           return next.handle(
  //             this.addTokenToRequest(request, refreshData.access_token)
  //           );
  //         }),
  //         catchError((err: any) => {
  //           // Refesh token fail => refesh_token expire => logout user
  //           this.refreshTokenInProgress = false;
  //           this.authenticationService.logout();
  //           return throwError(error);
  //         })
  //       );
  //     } else {
  //       // Token have been refresh
  //       return this.refreshTokenSubject.pipe(
  //         filter(result => result !== null),
  //         take(1),
  //         switchMap(refreshData =>
  //           next.handle(
  //             this.addTokenToRequest(request, refreshData.access_token)
  //           )
  //         )
  //       );
  //     }
  //   } else {
  //     return throwError(error);
  //   }
  // }

  // addTokenToRequest(
  //   request: HttpRequest<any>,
  //   token: string
  // ): HttpRequest<any> {
  //   return request.clone({
  //     setHeaders: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
  // }
  // trimAllValue(body: any): void {
  //   Object.keys(body).forEach(index => {
  //     const value = body[index];
  //     const type = typeof value;
  //     if (
  //       value != null &&
  //       (type === 'string' || type === 'object') &&
  //       body.hasOwnProperty(index)
  //     ) {
  //       if (type === 'object') {
  //         this.trimAllValue(body[index]);
  //       } else {
  //         body[index] = body[index].trim();
  //       }
  //     }
  //   });
  // }
}
