import { Users } from './../views/interface/users';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,) { }
  private usersUrl = 'api/users';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  /** GET users from the server */
getUsers(): Observable<Users[]> {
  return this.http.get<Users[]>(this.usersUrl)
}

deleteUser(user):Observable<Users>{
  const id = typeof user === 'number' ? user : user.id;
  const url = `${this.usersUrl}/${id}`;
  return this.http.delete<Users>(url,this.httpOptions)
}

// get a single user by id
getUser(id:number):Observable<Users>{
  const URl=`${this.usersUrl}/${id}`
  return this.http.get<Users>(URl)
}

updateUSer(user:Users):Observable<Users>{
  return this.http.put<Users>(this.usersUrl,user,this.httpOptions)
}

}
