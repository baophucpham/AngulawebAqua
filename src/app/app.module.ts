import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import { SpinnerComponent } from 'src/app/sharedComponent/spinner/spinner.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../app/modules/Login/login.component';
import {InputTextModule} from 'primeng/inputtext';
import { ListPPCComponent } from '../app/modules/list-ppc/list-ppc.component';
import { CommonComponent } from './modules/common/common.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';


@NgModule({
  declarations: [AppComponent, SpinnerComponent,LoginComponent, ListPPCComponent, CommonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    AvatarModule,
    AvatarGroupModule,
    TieredMenuModule,
    ButtonModule,
    RippleModule,
    CalendarModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
