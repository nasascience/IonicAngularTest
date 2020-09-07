import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdithobbiesPage } from './edithobbies.page';

const routes: Routes = [
  {
    path: '',
    component: EdithobbiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdithobbiesPageRoutingModule {}
