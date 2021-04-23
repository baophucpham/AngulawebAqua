import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonComponent } from './common.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {AvatarModule} from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SlideMenuModule } from 'primeng/slidemenu';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    TieredMenuModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    TieredMenuModule,
    SlideMenuModule,
    CalendarModule],
  declarations: [CommonComponent],
})
export class CommonModule {}
