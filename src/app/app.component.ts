import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@libs/components/header/header.component';
import { AuthService } from '@pages/auth/services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    HttpClientModule,
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLogin = false;

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
    this.authService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLogin = loggedIn;
    });
  }
}
