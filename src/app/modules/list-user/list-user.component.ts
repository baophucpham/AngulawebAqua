import { UserModel } from './../../models/listUser.model';
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
import { CommonService } from 'src/app/services/apis/common.service';
import { forkJoin } from 'rxjs';
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
  showInfoForSO = false;
  isShopCodeValid = true;
  createForm: FormGroup = new FormGroup({});

  userDetailData: UserModel = new UserModel({});
  isEditUserDetail = false;

  constructor(
    private userService: ListUserService,
    private spinnerService: SpinnerService,
    private commonService: CommonService
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

  showDialog(userRole: string, userId: string) {
    this.spinnerService.show();
    if (userRole === 'admin') {
      this.displayDialogAdmin = true;
    }
    if (userRole === 'PPC' || userRole === 'SO') {
      this.displayDialogUser = true;
      // this.handleGetListBank();
    }

    forkJoin([this.userService.getUserDetail(userId), this.commonService.getBank()]).subscribe(([userData, listBankData]) => {
      this.userDetailData = userData;
      this.Bank = listBankData;
      this.spinnerService.hide();
    }, error => {
      this.spinnerService.hide();
    })
    // this.userService.getUserDetail(userId).subscribe(res => {
    //   console.log(res);
    //   this.userDetailData = res;
    //   this.spinnerService.hide();
    // }, error => {
    //   this.spinnerService.hide();
    // })
  }
  showNewUser() {
    this.displayNewUser = true;
    this.handleGetListBank();

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
        this.shopcode = '';
        this.shopname = '';
        this.bankname = '';
        this.accountnumber = '';
        this.usernamebank = '';
      }, error => {
        this.spinnerService.hide();
      });
  }

  handleGetListBank(): void {
    this.spinnerService.show();
    this.commonService.getBank().subscribe((res) => {
      this.Bank = res;
      this.spinnerService.hide();
    });
  }

  handleCreate(): void {
    this.spinnerService.show();
    this.userService
      .postCreateUser(
        this.accountnumber,
        this.bankname,
        this.email,
        this.idcard,
        this.password,
        this.phone,
        this.roleid,
        this.shopcode,
        this.shopname,
        this.username,
        this.usernamebank,
      )
      .subscribe((res) => {
        this.displayNewUser = false;
        this.spinnerService.hide();
        this.handleGetListUser();
        console.log(res);
      }, error => {
        this.spinnerService.hide();
      }
    );
  }

  handleUpdateUser(isChangeActive?: boolean): void {
    this.spinnerService.show();

    const {accountNumber, avatar, bankName, email, idCard, isActive, phone, shopName, shopCode, userName, userNameBank, id } = this.userDetailData;

    const dataUpdate = {
      account_number: accountNumber,
      avatar,
      bank_name: bankName,
      email,
      id_card: idCard,
      is_active: isChangeActive ? !isActive : isActive,
      phone,
      shop_code: shopCode,
      shop_name: shopName,
      user_name: userName,
      user_name_bank: userNameBank,
      user_id: id
    };

    this.userService.updateUserDetail(dataUpdate).subscribe(res => {
      console.log(res);
      this.spinnerService.hide();
      this.handleGetListUser();
      this.userDetailData.isActive = isChangeActive ? !isActive : isActive;
    }, error => {
      this.spinnerService.hide();
    })
  }

  handleChangeRole() {
    this.showInfoForSO = this.roleid === 3;
    this.shopname = "";
    this.shopcode = "";
    this.bankname = "";
    this.accountnumber = "";
    this.usernamebank = "";
  }

  getShopNameByShopCode() {
    this.spinnerService.show();

    this.commonService.getShopNameByShopCode(this.shopcode).subscribe(res => {
      console.log(res);
      this.shopname = res.shop_name;
      this.isShopCodeValid = res.exist_status;
      this.spinnerService.hide();
    }, error => {
      this.spinnerService.hide();
    })
  }
}
