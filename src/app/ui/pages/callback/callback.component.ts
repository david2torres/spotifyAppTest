import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/infrastructure/services/auth.service';
import { Router } from '@angular/router';
import { NAVIGATE_CONST } from 'src/app/core/domain/constants/paths.constants';

@Component({
  selector: 'app-callback',
  template: '',
})
export class CallbackComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    const token = this.authService.getToken();
    if (token) {
      this.router.navigate([NAVIGATE_CONST.origin]);
    } else {
      console.error('Authentication failed');
    }
  }
}
