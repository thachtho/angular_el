import { Component, Input } from '@angular/core';
import { IUser } from '../user/user.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  ip: string | null = null;
  constructor(private http: HttpClient) {}

  @Input() user!: IUser;

  async ngOnInit(): Promise<void> {
    this.getIp().subscribe((res) => {
      this.ip = res.origin
    })
    
  }

  getIp() {
    return this.http.get<any>('/ip')
  }
}
