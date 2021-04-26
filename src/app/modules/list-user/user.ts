export class User {
  username?: string;
  Email?: string;
  phone?: number;
  role?: string;

  constructor(data: any) {
    this.username = data.Username;
    this.Email = data.Email;
    this.phone = data.Phone;
    this.role = data.Role;
  }
}
