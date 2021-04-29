import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { LoginRoutingModule } from './login-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SlideMenuModule } from 'primeng/slidemenu';
import { InputTextModule } from 'primeng/inputtext';
//import { ListPPCComponent } from "./list-ppc.component";
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { LoginComponent } from './login.component';
@NgModule({
  imports: [
    TieredMenuModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    SlideMenuModule,
    InputTextModule,
    RippleModule,
    CalendarModule,
    MultiSelectModule,
    LoginRoutingModule,
    PasswordModule,
    FormsModule
  ],
  declarations: [LoginComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoginModule {}
