import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "@core/services/auth.service";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html'
})
export class LoginComponent {
    nickname: string = '';
    password: string = '';

    constructor(
        private authService: AuthService, 
        private router: Router,
    ) {}

    login() {
        this.authService.login().subscribe({
            next: (res) => {
              this.router.navigate([`/`]);
            },
        });
    }
}