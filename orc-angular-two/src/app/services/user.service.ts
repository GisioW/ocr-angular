import { Injectable } from '@angular/core';
import {IUser} from '../models/user.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: IUser[] = [
    {
      firstName: 'Gisio',
      lastName: 'TABERA',
      email: 'gisio@yahoo.fr',
      drinkPreference: 'eau',
      hobbies: [
        'coder',
        'chanter',
        'basket'
      ]
    }
  ];
  userSubject = new Subject<IUser[]>();

  constructor() { }

  emitUsers() {
    // slice est utilisé pour faire un copie de this.users
    this.userSubject.next(this.users.slice());
  }

  addUser(user: IUser){
    this.users.push(user);
    this.emitUsers();
  }

}
