import { UsersService } from './../../Service/users.service';
import { Users } from './../interface/users';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { Observable } from 'rxjs';

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

  originalusersettings:Users={
    avatar_url:null,
    first_name:null,
    last_name:null,
    Phone_number:null,
    National_id:null,
    email:null,
    KRA_Pin:null,
    Company_Name:null,
    Company_Location:null,
    Company_Revenue: null,

}

newUser:Users = {...this.originalusersettings}

  constructor(private userservice:UsersService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
   this.userservice.getUsers().subscribe(
     data => this.users = data
   );
   
   this.firstFormGroup = this._formBuilder.group({
    avatar_url: ['', Validators.required],
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


  submitDetail(details:NgForm):void{
    
    if(details.valid){
      console.log('Details added ')
    }
  }
    submitSecurity(security:NgForm){
      if(security.valid){
        console.log('Security Added')
      }
    }
    submitProfessional(professional:NgForm){
      if(professional.valid){
        console.table('is submited: ',this.newUser)
        this.userservice.addUser(this.newUser).subscribe(
          result => this.users.push(result)
        )
      }
    }
   

}
