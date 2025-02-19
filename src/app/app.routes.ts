import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title:'Home'},
    {path: 'signup', component: SignupComponent, title:'Signup'},
    {path: 'login', component: LoginComponent, title:'Login'},
    {path: 'home', redirectTo: '', pathMatch: 'full'},
    {path: 'user', children: [
        {path: '', component: UsersComponent},
        {path: 'profile/:name', component: ProfileComponent}
    ]},
    {path: '**', component: PageNotFoundComponent, title:'404 | Page Not Found'}
];
