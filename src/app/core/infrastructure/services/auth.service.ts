import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { APP_CONSTANTS, URL_CONST } from '../../domain/constants/app.constants';
import { NAVIGATE_CONST } from '../../domain/constants/paths.constants';
import { AUTH_CONST } from '../../domain/constants/auth.constants';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private clientId = AUTH_CONST.clientId;
  private redirectUri = AUTH_CONST.redirectUri;
  private authEndpoint = AUTH_CONST.authEndPoint;
  private scopes = AUTH_CONST.scopes;

  constructor(private router: Router) {}

  login() {
    const url = `${this.authEndpoint}${URL_CONST.clientId}${this.clientId}${
      URL_CONST.redirect
    }${this.redirectUri}${URL_CONST.scope}${this.scopes.join(URL_CONST.join)}${
      URL_CONST.responseShow
    }`;
    window.location.href = url;
  }

  logout() {
    localStorage.removeItem(APP_CONSTANTS.session);
    this.router.navigate([NAVIGATE_CONST.callback]);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(APP_CONSTANTS.session);
  }

  getToken() {
    const hash = window.location.hash;
    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const token = params.get(APP_CONSTANTS.access);
      if (token) {
        localStorage.setItem(APP_CONSTANTS.session, token);
        return token;
      }
    }
    return null;
  }
}
