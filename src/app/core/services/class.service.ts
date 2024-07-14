import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IClassToStudent } from "@libs/interface";
import { tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClassService {
    constructor(
        private http: HttpClient

    ){}

    getClass() {
        return this.http.get<IClassToStudent[]>('class-user/get-classList').pipe(
            tap((res) => {
              return res
            })
        );
    }
}