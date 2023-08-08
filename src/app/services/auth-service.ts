import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  logIn(username: string, password: string): boolean {
    if (username != null) {
      localStorage.setItem('currentUser', username);
      return true;
    }
    return false;
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/landing');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }

  getPseudo(): string | null {
    if (localStorage.getItem('currentUser') != null)
      return (localStorage.getItem('currentUser'));
    else {
      return '';
    }
  }

}
