import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BehaviourService } from '../services/behaviour.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-parent',
  imports: [ChildComponent, FormsModule, CommonModule, RouterLink],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  constructor(private _behaviour: BehaviourService) { }

  username = ''
  ngOnInit(): void {
    this._behaviour.username.subscribe((name) => this.username = name);
  }

  message = "hello child. this is your parent"

  item =  '';
  cart:any = []

  addToCart() {
    this.cart.push(this.item);
  }

  changeUser() {
    this._behaviour.updateUser('Adedotun')
    console.log(this._behaviour.user);
    
  }
}
