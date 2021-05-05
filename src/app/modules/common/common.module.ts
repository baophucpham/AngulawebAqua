import { LoginService } from './../Login/login.service';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SlideMenuModule } from 'primeng/slidemenu';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import { ListPPCComponent } from '../list-ppc/list-ppc.component';
import { CommonRoutingModule } from './common-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../list-ppc/productservice';
import { ListUserComponent } from './../list-user/list-user.component';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { UserService } from '../list-user/userservice';
import { DialogModule } from 'primeng/dialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CommonModule } from '@angular/common';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { PasswordModule } from 'primeng/password';
import { PPCService } from 'src/app/services/apis/ppc.service';
import { DateCompactPipe } from 'src/app/pipes/date-pipe/date-compact.pipe';
import { ListUserService } from 'src/app/services/apis/user.service';
import { CommonService } from "src/app/services/apis/common.service";
import { DateTimePipe } from 'src/app/pipes/date-pipe/date-time.pipe';

@NgModule({
  imports: [
    TieredMenuModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
    TieredMenuModule,
    SlideMenuModule,
    FormsModule,
    CalendarModule,
    MultiSelectModule,
    DropdownModule,
    CommonRoutingModule,
    InputTextModule,
    TableModule,
    HttpClientModule,
    CascadeSelectModule,
    DialogModule,
    InputSwitchModule,
    CommonModule,
    InputTextareaModule,
    SelectButtonModule,
    PasswordModule
  ],
  declarations: [
    CommonComponent,
    ListPPCComponent,
    ListUserComponent,
    DateCompactPipe,
    DateTimePipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProductService, PPCService, ListUserService,CommonService]
})
export class CustomCommonModule {}
