import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  menuType: string = "reveal";
  currentRoute!: string;
  pseudo!: string | null;

  constructor(private menuController: MenuController, private router: Router,
    private auth: AuthService) {
  }

  ngOnInit() {
    //this.openMenu();
  }

  isActive = (path: string) => {
    return path === this.router.url;
  };

  // Method to programmatically open the menu
  openMenu() {
    this.menuController.open('navbar');
  }

  // Method to programmatically close the menu
  closeMenu() {
    this.menuController.close('navbar');
  }

  onLogOut(): void {
    this.auth.logOut();
  }

  get isLogged() {
    this.pseudo = this.auth.getPseudo();
    return this.auth.loggedIn;
  }
}
