import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

//  private Uname = 'Kunal Singh';  
  private Uname; 
  
  public authenticate(login_details):any{
      this.Uname = login_details;
  }
  
  private userIdSource = new BehaviorSubject<any>(this.Uname);
  currentUser = this.userIdSource.asObservable();

  constructor() { }

  setUser(userid: any) {
    
    this.userIdSource.next(this.Uname);
  } 
  
  
}
