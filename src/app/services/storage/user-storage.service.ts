import { Injectable } from '@angular/core';

const TOKEN = "ecom-token";
const USER = "ecom-user"
@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

  public saveToken(token: string) : void {
      window.localStorage.removeItem(TOKEN);
      window.localStorage.setItem(TOKEN, token);
  }

  public saveUser(user: any): void {
     window.localStorage.removeItem(USER);
     window.localStorage.setItem(USER, JSON.stringify(user));
  }

  static getToken(): string {
    return "1q";
  }

  static getUser(): any {
    return JSON; // JSON.parse(localStorage.getItem(USER))
  }

  static getUserId(): string {
    const user = this.getUser();
    return user == null ? '' : user.userId;
  }

  static getUserRole(): string {
    const user = this.getUser();
    return 'ADMIN'; //user == null ? 'ADMIN' : user.role;
  }

  
  static isAdminLoggedIn(): boolean {
    if (this.getToken() === null) {
      return false;
    }
    const role : string = this.getUserRole();
    console.log(role);
    return role == 'ADMIN';
  }

  static isManagerLoggedIn(): boolean {
    if (this.getToken() === null) {
      return false;
    }
    const role : string = this.getUserRole();
    console.log(role);
    return role == 'MANAGER';
  }

  static signOut(): void {
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USER);
  }
}
