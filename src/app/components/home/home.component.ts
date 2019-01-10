import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../services/login.service";
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup,FormControl} from "@angular/forms";
import { HttpClient,HttpHeaders,HttpErrorResponse} from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private myForm:FormGroup;  
  private KTresponse:any;

  constructor(private _service:LoginService,
    private router:Router,private _http:HttpClient){}
  ngOnInit() {

    this.myForm = new FormGroup({
      Uname: new FormControl()
    });
  }
  public clickMe():any{
    var arg1 = this.myForm.value
        const url = 'https://elastic.snaplogic.com/api/1/rest/slsched/feed/snaplogictrial/projects/MCP2019/AdminCheck_Task?';
        const header = new HttpHeaders({'Authorization':'Bearer S2FYced7ZleqNn2zHOM2Xc8jOZhT2Ulp'});  

      this._http.get(url+'Uname='+arg1.Uname,{headers: header})
      .subscribe(res=>{
          this.KTresponse = res;
         if (this.KTresponse.length!=0){
              
          }else{
            
          }

      },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
          console.log("Client Side Error !");
      }else{
          console.log("Server Side Error !");
      }
      });
    }
}