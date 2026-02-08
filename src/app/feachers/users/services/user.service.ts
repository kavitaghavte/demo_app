import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Config } from '../../../app-constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private config: Config) { 
    console.log(this.config.addUser);
  }
  public getUsersService():Observable<HttpEvent<any>>{
    return this.http.get<any>(this.config.getUsers);
  }
  public addUserService(params:any):Observable<HttpEvent<any>>{
    return this.http.post<any>(this.config.addUser,params);
  }
  public updateUserService(params:any):Observable<HttpEvent<any>>{
    return this.http.post<any>(this.config.updateUser,params);
  }
  public getUserByIdService(id:any):Observable<HttpEvent<any>>{
    return this.http.get<any>(this.config.getUserById+id);
  }
  public deleteUserService(id:any):Observable<HttpEvent<any>>{
    return this.http.delete<any>(this.config.deleteUser+id);
  }
}
