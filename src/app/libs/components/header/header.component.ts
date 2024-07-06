import { Component } from '@angular/core';
import { LogoutComponent } from '../icons/logout/logout.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoutComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}