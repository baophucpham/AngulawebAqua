export class ListUser{
  id: string;
  username: string;
  email: string;
  phone: string;
  role: string;
  isActive: boolean;

  constructor(data: any) {
    this.id = data.user_id;
    this.username = data.user_name;
    this.email = data.email;
    this.phone = data.phone;
    this.role = data.role
    this.isActive = data.is_active;
  }
}
export const ListUserOption = [
  {
    id: 1,
    name: 'admin'
  },
  {
    id: 2,
    name: 'PPC'
  },
  {
    id: 3,
    name: 'SO'
  }
];
export class UserModel {
  id: string;
  userName: string;
  email: string;
  roleId: any;
  shopCode: string;
  shopName: string;
  phone: string;
  idCard: string;
  bankName: string;
  accountNumber: string;
  avatar: string;
  isActive: boolean;
  userNameBank: string;

  constructor(data: any) {
    this.id = data.user_id;
    this.accountNumber = data.account_number;
    this.avatar = data.avatar;
    this.bankName = data.bank;
    this.email = data.email;
    this.idCard = data.id_card;
    this.isActive = data.is_active;
    this.phone = data.phone;
    this.roleId = data.role;
    this.shopCode = data.shop_code;
    this.shopName = data.shop_name;
    this.userName = data.user_name;
    this.userNameBank = data.user_name_bank;
  }
}
