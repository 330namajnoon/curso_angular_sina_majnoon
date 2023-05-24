import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user.model';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users: IUser[] = [];
  error: string = "";

  constructor(private userService: UserService){}

  ngOnInit(): void {
    // https://angular.io/guide/observables#defining-observers

    // Opción 1: función next simple
    // this.userService.findAll().subscribe(data => this.users = data.body ?? []);

    // Opción 2:  función next bloque {}
    // this.userService.findAll().subscribe(data => {
    //   console.log(data);
    //   console.log(data.status);
    //   console.log(data.body);
    //   this.users = data.body ?? [];
    // });

    // Opción 3: función next (obligatoria), función error (opcional), complete (opcional)
    // this.userService.findAll().subscribe({
    //   next: (data: HttpResponse<IUser[]>) => this.users = data.body ?? [],
    //   error: (err: Error) => console.error('Error: ' + err.message),
    //   complete: () => console.log('findAll completado'),
    // });

    // Opción 4: funciones con bloques
    // this.userService.findAll().subscribe({
    //   next: (data: HttpResponse<IUser[]>) => {
    //     console.log(data.status);
    //     this.users = data.body ?? [];
    //   },
    //   error: (err: Error) => { 
    //     console.error('Error: ' + err.message);
    //     this.showError(err);
    //   },
    //   complete: () => console.log('findAll completado'),
    // });

    // Opción 5: funciones con bloques separados como variables
    let nextFunction = (data: HttpResponse<IUser[]>) => {
      console.log(data.status);
      this.users = data.body ?? [];
    }
    let errorFunction = (err: Error) => { 
      console.error('Error: ' + err.message);
      this.showError(err);
    }
    let completeFunction = () => console.log('findAll completado');

    this.userService.findAll().subscribe({
      next: nextFunction,
      error: errorFunction,
      complete: completeFunction,
    });

  }

  showError(err: Error) {
    this.error = err.message;
    setTimeout(() => this.error = "", 5000);
  }

  
}
