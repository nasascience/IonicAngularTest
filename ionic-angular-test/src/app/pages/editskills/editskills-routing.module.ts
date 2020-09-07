import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditskillsPage } from './editskills.page';

const routes: Routes = [
  {
    path: '',
    component: EditskillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditskillsPageRoutingModule {}
