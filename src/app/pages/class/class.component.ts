import { Component } from "@angular/core";

@Component({
    selector: 'app-class',
    standalone: true,
    imports: [],
    templateUrl: './class.component.html'
})
export class ClassComponent {
    classList = [
        { id: 1, name: 'Lớp 1' },
        { id: 2, name: 'Lớp 2' },
        { id: 3, name: 'Lớp 3' },
        { id: 4, name: 'Lớp 4' },
    ]
}