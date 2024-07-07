import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserStorageService } from '../storage/user-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http: HttpClient,
              private userStorageService: UserStorageService  ) { }

  login(username: any, password: any) : any{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = {username, password};
    console.log(body);
    return true;
    /*
    this.http.post('url later' + 'login', body, {headers, observe: 'response'} ).pipe(
      map((res)=> {
         const token = res.headers.get('authorization')!.substring(7);
         const user =  res.body;
         if (token && user) {
            this.userStorageService.saveToken(token);
            this.userStorageService.saveUser(user);
            console.log("Yes");
            return true;
         }
         console.log("No");
         return false;
      })
    )*/
  }


}
