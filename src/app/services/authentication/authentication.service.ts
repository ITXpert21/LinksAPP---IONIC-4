import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  getProfile() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    
    return this.http.post<any>('http://mobileapp.linksincdb.org/index.php', {})
        .pipe(map(catalogue => {
            return catalogue;
        }));  
  }

  login(username: string, password: string) {
    let action = "login";
    
    return this.http.post<any>('http://mobileapp.linksincdb.org/login.php', { username, password }, {})
        .pipe(map(user => {
            // login successful if there's a jwt token in the response
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
              //  localStorage.setItem('currentUser', JSON.stringify(user));
               // this.currentUserSubject.next(user);
               console.log("user=", user);

            }

            return user;
        }));
  }

}
