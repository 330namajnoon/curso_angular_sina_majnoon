import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  // datos
  users: IUser[] = [];
  user: IUser | undefined;

  // inputs [(ngModel)]
  userEmail: string = "";
  searchEmail: string = "";
  searched: boolean = false;

  constructor(private userService: UserService) { }

  findByEmail(): void {
    this.user = this.userService.findByEmail(this.searchEmail);
    this.searchEmail = "";
    this.searched = true;
  }
  save(): void {
    let user: IUser = {
      fullName: this.userEmail.split('@')[0],
      email: this.userEmail
    }
    this.userService.save(user);
    this.userEmail = "";
    this.users = this.userService.findAll();

  }
}
