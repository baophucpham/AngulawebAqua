import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPPCComponent } from './modules/list-ppc/list-ppc.component';
import { LoginComponent } from './modules/Login/login.component';
import { CommonComponent } from "./modules/common/common.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'list-PPC',
    component: ListPPCComponent
  },
  {
    path: 'common',
    component: CommonComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
