import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [ CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {


  constructor(
    private _auth: AuthService
  ) {}

  users:any = []
  photos:any = []

  ngOnInit() : void {
    this._auth.fetchUsers().subscribe({
      next: (res) => {
        this.users = res;
        // console.log(this.users[0].thumbnailUrl);
        
      }, error : (err) => {
        console.log(err);
      }
    });

    this._auth.fetchPhotos().subscribe({
      next: (res) => {
        this.photos = res;
        // console.log(this.photos);
      }, error : (err) => {
        console.log(err);
      }
    });
  }
  
}
