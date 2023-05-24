import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = []

  constructor() { }

  save(user: IUser): void {
    this.users.push(user);
  }
  findByEmail(email: string): IUser | undefined {
    return this.users.find(user => user.email === email);
  }
  findAll(): IUser[] {
    // return new Array(...this.users);
    return Array.from(this.users);
  }
  /*
   1. En el componente UserDetailComponent agregar en el constructor
   el servicio UserService encapsulado
     constructor(private userService: UserService){}


   2. Creamos un input con ngModel en user-detail.component.html
   Cuando se da a un botón se lee el input y se crea un nuevo
   objeto usuario y se guardar en UserService.save

   3. En otro input con ngModel permitir filtrar por email
   si el usuario existe entonces lo mostramos
   si no existe mostramos un texto en rojo de que no existe

  */


}
