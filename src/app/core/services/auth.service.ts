import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import LOCAL_STORAGE_KEY from "@libs/enum/local-storage";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { LocalStorageService } from "./local-storage.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(
        private localStorageService: LocalStorageService, 
        private http: HttpClient

    ) {
        const isLoggedIn = this.localStorageService.getItem(LOCAL_STORAGE_KEY.USER_LOGIN);

        if (isLoggedIn) {
            this.isLoggedInSubject.next(true);
        } else {
            this.isLoggedInSubject.next(false);
        }
    }

    private isLoggedInSubject = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this.isLoggedInSubject.asObservable();

    login(): Observable<number> {
        const bodyLogin = {
            "nickname": "pct",
            "password": "111111"
        }

        return this.http.post<number>('auth/login', bodyLogin).pipe(
          tap((res) => {
            this.localStorageService.setItem(LOCAL_STORAGE_KEY.USER_LOGIN, JSON.stringify(res))
            return res
          })
        );
    }

    logOut() {
        this.localStorageService.clear()
    }
}