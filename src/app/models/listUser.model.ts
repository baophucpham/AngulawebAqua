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
    id: 0,
    name: 'admin'
  },
  {
    id:1,
    name: 'user'
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
