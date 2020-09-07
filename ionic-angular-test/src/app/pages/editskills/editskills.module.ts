import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditskillsPageRoutingModule } from './editskills-routing.module';

import { EditskillsPage } from './editskills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditskillsPageRoutingModule
  ],
  declarations: [EditskillsPage]
})
export class EditskillsPageModule {}
