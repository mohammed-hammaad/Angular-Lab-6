import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean;
  constructor(private _userSerivce: UserService, private router: Router) {}
  ngOnInit(): void {
    this.state();
  }
  state() {
    this._userSerivce.getUserState().subscribe({
      next: (state) => {
        this.isLoggedIn = state;
      },
    });
  }
  changeState() {
    if (this.isLoggedIn) {
      this._userSerivce.logout();
    } else {
      this.router.navigate(['login']);
    }
  }
}
