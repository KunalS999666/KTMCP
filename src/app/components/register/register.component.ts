import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormControl} from "@angular/forms";
import { HttpClient,HttpHeaders,HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private myForm:FormGroup;  
  private KTresponse:any;

  constructor(private router:Router,private _http:HttpClient){}
  ngOnInit() {

    this.myForm = new FormGroup({
      namesurname: new FormControl(),
      empid: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmpassword: new FormControl()

    });
  }

 public register():any{
    var arg1 = this.myForm.value
    const url = 'https://elastic.snaplogic.com:443/api/1/rest/slsched/feed/snaplogictrial/projects/MCP_Kunal/ConRegisterKT?';
    const header = new HttpHeaders({'Authorization':'Bearer 1sbQBGoUAZttw42OjJXYTjy2tGJp3iBP'});  
    const body = 'namesurname='+arg1.namesurname+'&empid='+arg1.empid+'&email='+arg1.email+'&method=post' 
      //this._http.get(url+'namesurname='+arg1.namesurname+'&password='+arg1.password,{headers: header})
      this._http.get(url+body,{headers: header})
      .subscribe(res=>{
          this.KTresponse = res;
         // console.log(this.KTresponse[0]);
         console.log(this.KTresponse); 
          //if (this.KTresponse[0].result==true){
          if (this.KTresponse.length!=0){
              console.log('registered'); 
               
              //window.localStorage.setItem("login_details",JSON.stringify(res));
              this.router.navigate(["/"]);  
          }else{
            console.log('failed');  
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
