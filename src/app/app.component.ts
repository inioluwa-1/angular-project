import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-project';
  num1: number = 5;
  num2: number = 2;
  name = 'inioluwa'
  day = 'Tuesday'
  toggleDays() {
    if (this.day == 'Monday') {
      console.log('it is Monday');
    } else if (this.day == 'Tuesday') {
      console.log('it is Tuesday');
    } else {
      console.log('Today is not Monday');
    }
  }

  iSeeFood = false;
  username = ""
  myFunction() {
    console.log()
  }

  condition = true;

  products = [
    {
      id: 1,
      name: "Toothbrush",
      price: 1000,
      available:true
    },
    {
      id: 2,
      name: "toothpaste",
      price: 700,
      available:false
    },
    {
      id: 3,
      name: "shoe polish",
      price: 1000,
      available:false
    },
    {
      id: 4,
      name: "T-shirt",
      price: 7000,
      available:true
    },
    {
      id: 5,
      name: "belt",
      price: 2000,
      available:true
    },
  ]

  cart: any = [];
  addToCart(product: any) {
    this.cart.push(product);
    console.log(this.cart);
  }


  condition1 = true;
  condition2 = false;
}
