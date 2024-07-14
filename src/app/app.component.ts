import { Component } from '@angular/core';
import { UserStorageService } from './services/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'] // Note the plural form styleUrls
})
export class AppComponent {
  title = 'crm-frontend-2';

  isManagerLoggedIn: boolean = UserStorageService.isManagerLoggedIn();
  isAdminLoggedIn: boolean = UserStorageService.isAdminLoggedIn();

  constructor(private router: Router) {

  }


  ngOnInit() {
    console.log(this.isAdminLoggedIn  + " > " + this.isManagerLoggedIn);
    this.router.events.subscribe(event => {
      this.isManagerLoggedIn = UserStorageService.isManagerLoggedIn();
      this.isAdminLoggedIn = UserStorageService.isAdminLoggedIn();
    })
  }

  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
