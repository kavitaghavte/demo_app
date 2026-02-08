import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';

@Injectable({
    providedIn: 'root'
})
export class Config {
  baseUrl = environments.developmentUrl;
  
  public addUser:string = this.baseUrl+'/createUser';
  public getUsers:string = this.baseUrl+'/getUsers';
  public updateUser:string = this.baseUrl+'/updateUser/';
  public getUserById:string = this.baseUrl+'/getUserById/';
  public deleteUser:string = this.baseUrl+'/deleteUser/';
}
