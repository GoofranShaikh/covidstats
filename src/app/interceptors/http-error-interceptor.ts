import { HttpEvent, HttpHandler, HttpRequest, } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {catchError} from 'rxjs/operators'

@Injectable()
export class HttpErrorInterceptor {
    intercept(
        request:HttpRequest<any>,
        next:HttpHandler
    ):Observable<HttpEvent<any>>{
        return next.handle(request).pipe(
            catchError((err:any)=>{
                console.log(err);
                return throwError(err);
            })
        )
    }
}
