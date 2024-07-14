import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL_SERVER } from '@libs/constant';
import { Observable } from 'rxjs';

@Injectable()
export class HandleHttpInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = httpRequest.clone({ 
      url: `${BASE_URL_SERVER}/${httpRequest.url}`,
      withCredentials: true
     });
    
    return next.handle(apiReq);
  }
}