import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  screens = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
  ]

  trackById(index: number, item: any): number {
    return item.id;
  }

  navigateScreen(screenId: number) {
    alert(screenId)
  }
}
