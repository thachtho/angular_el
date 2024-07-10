import { Injectable } from "@angular/core";
import LOCAL_STORAGE_KEY from "@libs/enum/local-storage";
import { LocalStorageService } from "@libs/services/local-storage.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private localStorageService: LocalStorageService, 
    ) {
        const isLoggedIn = this.localStorageService.getItem(LOCAL_STORAGE_KEY.IS_LOGIN);

        if (isLoggedIn === '1') {
            this.isLoggedInSubject.next(true);
        } else {
            this.isLoggedInSubject.next(false);
        }
    }

    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    login() {
        this.isLoggedInSubject.next(true);
    }
}