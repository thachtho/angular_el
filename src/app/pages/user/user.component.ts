import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';

export interface IUser {
  name: string,
  age: number,
  email: string
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ProfileComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
 user: IUser = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
  };
}
