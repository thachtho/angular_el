import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER } from '@libs/enum/router';
import { AuthService } from '@core/services/auth.service';
import { LogoutComponent } from '../icons/logout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoutComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(
    private readonly authService: AuthService,
    private router: Router,
  ) {}

  async logOut() {
    this.authService.logOut()
    this.router.navigate([ROUTER.LOGIN]);
  }
}