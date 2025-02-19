import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(
    private _active: ActivatedRoute
  ) {}

  username:any = '';

  ngOnInit() :void{
    this._active.params.subscribe((param) => {
      this.username = param ['name']. replaceAll('-','');
      console.log(this.username);
      
    })
  }
}
