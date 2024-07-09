import { Component } from "@angular/core";
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "@libs/services/local-storage.service";
import LOCAL_STORAGE_KEY from "@libs/enum/local-storage";

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
        private localStorageService: LocalStorageService, 
        private router: Router
    ) {}

    login() {
        this.authService.login()
        this.localStorageService.setItem(LOCAL_STORAGE_KEY.IS_LOGIN, '1')
        this.router.navigate([`/`]);
    }
}