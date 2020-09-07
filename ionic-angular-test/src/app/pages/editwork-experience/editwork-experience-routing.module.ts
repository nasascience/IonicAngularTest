import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditworkExperiencePage } from './editwork-experience.page';

const routes: Routes = [
  {
    path: '',
    component: EditworkExperiencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditworkExperiencePageRoutingModule {}
