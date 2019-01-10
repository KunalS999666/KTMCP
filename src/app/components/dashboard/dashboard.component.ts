import { Component, OnInit,Input,Output, HostListener,ViewChild,ElementRef } from '@angular/core';
import { Router } from "@angular/router";

import { DataService } from "../../services/data.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Input() Uname;

  /*@ViewChild('myDiv') myDiv: ElementRef;

triggerFalseClick() {
    let el: HTMLElement = this.myDiv.nativeElement as HTMLElement;
    el.click();
}*/
  constructor(private _router:Router,private dataService: DataService){
  }
  public logout(){
      window.localStorage.removeItem("login_details");
      this._router.navigate(["/"]);
  }

  ngOnInit() {
    this.getUser();
 }
  getUser() {
    this.dataService.currentUser.subscribe(user => {
      this.Uname = user
    }, err => {
      console.log(err);
    });
  }

}
