import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { User, modal } from './user';
import { ListUser, ListUserOption } from 'src/app/models/listUser.model';
import { ListUserService } from 'src/app/services/apis/user.service';
import { SpinnerService } from 'src/app/sharedComponent/spinner/spinner.service';
import {
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { bank } from 'src/app/models/bank.model';
import { Listbank } from 'src/app/services/apis/bank.service';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss'],
})
export class ListUserComponent implements OnInit {
  UserOtion: any[] = ListUserOption;
  Listuser: ListUser[] = [];
  selectedUserId = '';
  searchKeyWord = '';
  displayDialogAdmin: boolean = false;
  displayDialogUser: boolean = false;
  displayNewUser: boolean = false;
  checked: boolean = false;

  Bank: bank[] = [];
  selectedBank = '';

  username: string = '';
  email: string = '';
  usernamebank: string = '';
  shopname: string = '';
  shopcode: string = '';
  roleid: any = '';
  phone: any = '';
  password: string = '';
  idcard: string = '';
  bankname: string = '';
  accountnumber: string = '';
  createForm: FormGroup = new FormGroup({});

  constructor(
    private userService: ListUserService,
    private spinnerService: SpinnerService,
    private listBanksService: Listbank
  ) {}

  ngOnInit(): void {
    this.username = '';
    this.email = '';
    this.usernamebank = '';
    this.shopcode = '';
    this.shopname = '';
    this.roleid = '';
    this.phone = '';
    this.password = '';
    this.idcard = '';
    this.bankname = '';
    this.accountnumber = '';
    this.handleGetListUser();
  }

  showDialog(userRole: string) {
    if (userRole === 'admin') {
      this.displayDialogAdmin = true;
    }
    if (userRole === 'user') {
      this.displayDialogUser = true;
    }
  }
  showNewUser() {
    this.displayNewUser = true;
  }

  handleGetListUser(): void {
    this.spinnerService.show();
    this.userService
      .getListUser({
        keyWord: this.searchKeyWord,
        role: this.selectedUserId || '',
      })
      .subscribe((res) => {
        this.Listuser = res;
        this.spinnerService.hide();
      });
  }

  handleGetListBank(): void {
    this.spinnerService.show();
    this.listBanksService.getBank({}).subscribe((res) => {
      this.Bank = res;
      this.spinnerService.hide();
    });
  }

  handleCreate(): void {
    this.spinnerService.show();
    this.userService
      .postCreateUser(
        this.username,
        this.email,
        this.usernamebank,
        this.shopcode,
        this.shopname,
        this.roleid,
        this.phone,
        this.password,
        this.idcard,
        this.bankname,
        this.accountnumber
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
