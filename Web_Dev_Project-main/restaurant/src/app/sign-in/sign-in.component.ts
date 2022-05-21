import { Component, OnInit } from '@angular/core';
import {MenusService} from '../menus.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  logged = false;
  username = '';
  password = '';

  constructor(private menuService: MenusService) { }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  // tslint:disable-next-line:typedef
  login() {
    this.menuService.login(this.username, this.password).subscribe((data) => {

      localStorage.setItem('token', data.token);

      this.logged = true;
      this.username = '';
      this.password = '';
      window.alert('You are successfully logged in!');
    });
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.logged = false;
    window.alert('You have successfully logged out!');
    localStorage.removeItem('token');
  }

}
