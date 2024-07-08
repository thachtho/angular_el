import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(private router: Router) {}
  screens = [
    { id: 1, name: 'A', path: 'class' },
    { id: 2, name: 'B', path: 'user' },
    { id: 3, name: 'C', path: 'class' },
    { id: 4, name: 'D', path: 'class' },
  ]

  trackById(index: number, item: any): number {
    return item.id;
  }

  navigateScreen(path: string) {
    this.router.navigate([`/${path}`]);
  }
}
