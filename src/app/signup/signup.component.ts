import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  standalone: true
})
export class SignupComponent {
  // userForm: FormGroup; //creating a new instance formGroup class
  
  private fb = inject(FormBuilder);

  constructor(
    private _router: Router,
    private _auth: AuthService
  ) {}
  
  // constructor(
    // private _fb: FormBuilder,
    // private _fromGroup: FormGroup
  // ) {  }

  userForm = this.fb.group({ //equating the formBuilder group to the userForm group
    'full_name': ['', [Validators.required, Validators.minLength(5)]],
    'email': ['', [Validators.required, Validators.email]],
    'phone_number': ['', [Validators.required , Validators.minLength(11)]],
    'password': ['', [Validators.required, Validators.minLength(8)]]
  });

  ngOnInit () {
    // what we want to see on a reload of a page
    this.users =JSON.parse(localStorage['users']);
    console.log(this.users);
    
  }
  

  full_name = '';
  email = '';
  phone_number = '';
  password = ''


  users:any = [];

  register() {
    if (this.userForm.invalid) {
      console.log(this.userForm.get('full_name')?.errors);
    } else {
      const name = this.userForm.get('full_name')?.value?.replaceAll(' ','-');
      console.log(this.userForm.value);
      
      this._auth.registerUsers(this.userForm.value).subscribe({
        next: (res:any) => {
          console.log(res);
          this._router.navigate(['/user/profile', name]);
        }, error: (err:any) => {
          console.log(err);
        }
      })
      console.log(name);
      
      // this._router.navigate(['/user/profile', name]);
      
    }



    // const user = {
    //   full_name: this.full_name,
    //   email: this.email,
    //   phone_number: this.phone_number,
    //   password: this.password
    // };
    // this.users.push(user);    
    // localStorage.setItem('users', JSON.stringify(this.users));
    // console.log('user saved successfully');
    
  }

}
