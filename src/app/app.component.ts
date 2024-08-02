import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/infrastructure/services/auth.service';
import { APP_CONSTANTS } from './core/domain/constants/app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoggedIn = localStorage.getItem(APP_CONSTANTS.session) ? true : false;
    }, 10);
  }

  login() {
    this.authService.login();
    this.isLoggedIn = true;
  }

  logout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
