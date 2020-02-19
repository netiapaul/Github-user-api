import { Users } from './../interface/users';
import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Service/users.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userservice:UsersService,private route:ActivatedRoute,private location:Location) { }

  ngOnInit() {
    this.getUser()
  }

  user:Users;
 
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userservice.getUser(id).subscribe(data => this.user = data);
  }

  goBack():void{
    this.location.back()
  }

  onSubmit(){
    console.log(name)
    this.userservice.updateUSer(this.user).subscribe(() => this.goBack())
  }

}
