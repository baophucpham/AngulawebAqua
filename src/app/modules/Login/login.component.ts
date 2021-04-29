
import { Component } from "@angular/core";
@Component({
  selector: 'app-login',
  templateUrl: "./login.component.html",
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  // hoten: string = "plbPhuc";
  username: string = "";
  password: string = "";

  constructor() {}
  ngOnInit() {
    this.username = "";
    this.password = "";
  }
}
