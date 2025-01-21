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
  day = 'Sunday'
  toggleDays() {
    
  }

  iSeeFood = false;
  username = ""
  myFuntion() {
    console.log()
  }
}
