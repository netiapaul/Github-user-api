import { UsersService } from './../../Service/users.service';
import { Users } from './../interface/users';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users:Users[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;
  constructor(private userservice:UsersService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
   this.userservice.getUsers().subscribe(
     data => this.users = data
   );
   
   this.firstFormGroup = this._formBuilder.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    number: ['', Validators.required],
    email: ['', Validators.required],
  });
  this.secondFormGroup = this._formBuilder.group({
    nationalid: ['', Validators.required],
    krapin: ['', Validators.required]
  });
  this.thirdFormGroup = this._formBuilder.group({
    companyname: ['', Validators.required],
    companylocation: ['', Validators.required],
    companyrevenue: ['', Validators.required]
  });

  }

  delete(user: Users): void {
    this.users = this.users.filter(h => h !== user);
    this.userservice.deleteUser(user).subscribe();
  }  

  addUser(){
    // this.userservice.addUser().subscribe()
  }

}
