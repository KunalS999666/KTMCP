import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { LoginService } from "../../services/login.service";
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup,FormControl} from "@angular/forms";
import { HttpClient,HttpHeaders,HttpErrorResponse} from "@angular/common/http";
import { DataService } from "../../services/data.service";
@Component({
  selector: 'logincomp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

@Output() sendData:EventEmitter<any>=new EventEmitter();

  private myForm:FormGroup;  
  private KTresponse:any;

  constructor(private _service:LoginService,
    private router:Router,private _http:HttpClient,private dataService:DataService){}
  ngOnInit() {

    this.myForm = new FormGroup({
      Uname: new FormControl(),
      password: new FormControl()

    });
  }

  onSubmit() {
    this.dataService.setUser(this.myForm.value.Uname); 
  } 

 /* public dashUname(){
    this.sendData.emit(this.myForm.value.Uname);
 }
*/
 public clickMe():any{
    var arg1 = this.myForm.value
      console.log('Kun',this.myForm.value.Uname);  
      this.dataService.setUser(this.myForm.value.Uname);
      //this.dataService.authenticate(this.myForm.value.Uname); 
    //this.sendData.emit(arg1.Uname);
    //console.log('KT',arg1,JSON.stringify(arg1));
      
      /*this.dataService.authenticate(arg1).subscribe(res=>{
      if(res.KTresponse == "true"){
          window.localStorage.setItem("login_details",JSON.stringify(res));
          this.router.navigate(["/dashboard"]);
      }else{
          alert("Login Fail !");
      }
      },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
          console.log("Client Side Error !");
      }else{
          console.log("Server Side Error !");
      }
      });
}*/
        const url = 'https://elastic.snaplogic.com/api/1/rest/slsched/feed/snaplogictrial/projects/MCP2019/AdminCheck_Task?';
        const header = new HttpHeaders({'Authorization':'Bearer S2FYced7ZleqNn2zHOM2Xc8jOZhT2Ulp'});  

      this._http.get(url+'Uname='+arg1.Uname+'&password='+arg1.password,{headers: header})
      .subscribe(res=>{
          this.KTresponse = res;
         // console.log(this.KTresponse[0]);
          //if (this.KTresponse[0].result==true){
          if (this.KTresponse.length!=0){
              console.log('logged sucessfuly');  
              window.localStorage.setItem("login_details",JSON.stringify(res));
              this.router.navigate(["/dashboard"]);  
          }else{
            console.log('Please check the credentials');  
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
