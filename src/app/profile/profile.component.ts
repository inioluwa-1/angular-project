import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(
    private _active: ActivatedRoute,
    private _auth: AuthService
  ) {}

  username:any = '';


  users:Array<String> = [];
  ngOnInit() :void{
    // this._active.params.subscribe((param) => {
    //   this.username = param ['name']. replaceAll('-','');
    //   // console.log(this.username);      
    // })

    console.log(this._auth.username);
    this.users = this._auth.users;
    
  }

  changeName(name:string) {
    this._auth.changeUsername(name);
  }
}
