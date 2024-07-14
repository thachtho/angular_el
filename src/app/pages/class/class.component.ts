import { Component } from "@angular/core";
import { ClassService } from "@core/services/class.service";
import { IClassToStudent } from "@libs/interface";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-class',
    standalone: true,
    imports: [],
    templateUrl: './class.component.html'
})
export class ClassComponent {
    classList: IClassToStudent[] | null = null;
    constructor(
        private classService: ClassService,
        private toastrService: ToastrService
    ){}

    async ngOnInit(): Promise<void> {
        this.classService.getClass().subscribe({
          next: (classList) => {
            this.classList = classList
          },
          error: (error) => {
            this.toastrService.error(error.message);
          }
        });
    }
}