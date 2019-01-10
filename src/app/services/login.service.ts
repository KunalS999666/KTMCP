import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse} from "@angular/common/http";
//import {RequestOptions, Request, Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private _http:HttpClient){}
    public authenticate(login_details):any{
        console.log(login_details);
        //var body = 'Uname='+login_details.Uname+'&password='+login_details.password;

      const url = 'https://elastic.snaplogic.com/api/1/rest/slsched/feed/snaplogictrial/projects/MCP2019/AdminCheck_Task?';
        const header = new HttpHeaders({'Authorization':'Bearer S2FYced7ZleqNn2zHOM2Xc8jOZhT2Ulp'});
        return this._http.get(url+'Uname='+login_details.Uname+'&password='+login_details.password,{headers: header})
        .subscribe((data) => {
              console.log(data);
          },
          (err: HttpErrorResponse) => {
              if (err.error instanceof Error) {
                  console.log('Client-side error occured.');
              } else {
                  console.log('Server-side error occured.');
              }
          });
    }
}
