import { UsersService } from './../../Service/users.service';
import { Users } from './../interface/users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users:Users[];

  constructor(private userservice:UsersService) { }

  ngOnInit() {
   this.userservice.getUsers().subscribe(
     data => this.users = data
   )
  }

  delete(user: Users): void {
    this.users = this.users.filter(h => h !== user);
    this.userservice.deleteUser(user).subscribe();
  }  
  
}
