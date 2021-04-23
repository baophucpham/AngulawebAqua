import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {AvatarModule} from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import {SlideMenuModule} from 'primeng/slidemenu';
import { InputTextModule } from 'primeng/inputtext';
import { ListPPCComponent } from "./list-ppc.component";
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  imports: [
    BrowserModule,
    TieredMenuModule,
    ButtonModule,
    AppRoutingModule,
    AvatarModule,
    AvatarGroupModule,
    SlideMenuModule,
    InputTextModule,
    RippleModule,
    CalendarModule,
    MultiSelectModule
  ],
  declarations:[ListPPCComponent],
})
export class ListPPCModule{}
