import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {
 user = new BehaviorSubject<string>("Adewale");
 username = this.user.asObservable();
  constructor() { }


  updateUser(newUsername: string) {
    this.user.next(newUsername);
  }
}
