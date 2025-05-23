import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username = "Nnamdi George";
  users = ['James', 'Blessing', 'Peace', 'Wonderful', 'Nnamdi George Chuks']

  changeUsername(name:string) {
    this.username = name;
    console.log(this.username);
    
  }
  constructor(
    private _http: HttpClient
  ) { }

  url = 'https://jsonplaceholder.typicode.com/users';
  site = 'https://jsonplaceholder.typicode.com/photos';
  fetchUsers() {
   return this._http.get(this.url);
  }
  fetchPhotos() {
    return this._http.get(this.site);
  }

  api_url = "http://localhost/level 4 xampp class";

  registerUsers(data:any) {
   return this._http.post(`${this.api_url}/form.php`, data);
  }
}
