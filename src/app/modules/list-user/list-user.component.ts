import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import {  User,modal } from './user';
import { UserService } from './userservice'
import { SortEvent } from 'primeng/api';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  user1: User[] = [];
  Modal1: modal[] = [];
  cities: City[] = [];
  selectedCity: City[] = [];
  displayDialogAdmin: boolean = false;
  displayDialogUser: boolean = false;
  displayNewUser: boolean = false;
  checked: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.cities = [
      {name: 'Approved', code: 'Ap'},
      {name: 'In Progress', code: 'IP'},
      {name: 'Rejected', code: 'Rj'},
      {name: 'Cancel', code: 'can'},
    ];
    // this.productService.getProductsSmall().then(data => this.products1 = data);
    //   this.productService.getProductsSmall().then(data => this.products2 = data);
    //   this.productService.getProductsSmall().then(data => this.products3 = data);
    this.userService.mockApi().subscribe((res) => {
      this.user1 = res;
      console.log(this.user1);
    })
    this.userService.mApi().subscribe((res) => {
      this.Modal1 = res;
      console.log(this.Modal1);
    })
  }

  showDialog(userRole: string) {
    if (userRole === 'Admin') {
      this.displayDialogAdmin = true;
    }
    if (userRole === 'User') {
      this.displayDialogUser = true;
    }
  }
  showNewUser() {
    this.displayNewUser = true;
  }
}
