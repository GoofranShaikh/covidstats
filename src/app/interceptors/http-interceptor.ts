import { Injectable } from "@angular/core";
import { HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class HttpInterceptor {
   intercept(
    request: HttpRequest<any>,
    next: HttpHandler
   ):Observable<HttpEvent<any>>{
       request=request.clone({
           setHeaders:{
            'x-rapidapi-key': 'aa9922cd72msha3269b9729044e2p125c30jsnc285c77716a4',
            'x-rapidapi-host': 'covid-193.p.rapidapi.com'
           }
       });
       return next.handle(request)

   }   
}
