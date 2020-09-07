import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditdetailsPage } from './editdetails.page';

const routes: Routes = [
  {
    path: '',
    component: EditdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditdetailsPageRoutingModule {}
