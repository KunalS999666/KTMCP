import { Injectable } from "@angular/core";
import { HttpInterceptor,
         HttpRequest,
         HttpHandler,
         HttpEvent } from "@angular/common/http";
         
import { Observable } from "rxjs/Observable"; 
@Injectable()
export class MyInterceptor implements HttpInterceptor{
   /* intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        console.log("KT Interceptor");
        var req1= req.clone({
            setHeaders:{
                'Authorization':'Bearer S2FYced7ZleqNn2zHOM2Xc8jOZhT2Ulp'
            }
        });
        return handler.handle(req1);
    }*/
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          // Get the auth header from the service.
          console.log("KT Interceptor");
          const authHeader = 'Bearer S2FYced7ZleqNn2zHOM2Xc8jOZhT2Ulp';
          const clonedReq = req.clone({headers: req.headers.set('Authorization', authHeader)});
      
          return next.handle(clonedReq);
        }
      

}        