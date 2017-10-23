import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LoginService {

  myUrl: string = 'https://swapi.co/api/people/?search=';
  searchername = "Luke Skywalker";

  constructor(private http: Http) { }

   onLogin(user, password){
    return this.http.get(this.myUrl + user).map(res => res.json(), error => console.log('get http error'));
  }


}
