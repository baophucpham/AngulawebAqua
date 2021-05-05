import { ListPPCComponent } from './../list-ppc/list-ppc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonComponent } from './common.component';
import { ListUserComponent } from './../list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    component: CommonComponent,
    children: [
      {
        path: 'list-ppc',
        component: ListPPCComponent
      },
      {
        path: 'list-user',
        component: ListUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule {}
