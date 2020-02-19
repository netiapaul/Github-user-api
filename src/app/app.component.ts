import { Component, OnInit } from '@angular/core';
import { Users } from './views/interface/users';
import { UsersService } from './Service/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  users:Users[];
  constructor(private userservice:UsersService){}

  title = 'pezesha';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userservice.getUsers().subscribe(
      data => this.users = data
    )

  }

  
}
