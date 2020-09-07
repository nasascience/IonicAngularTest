import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditworkExperiencePageRoutingModule } from './editwork-experience-routing.module';

import { EditworkExperiencePage } from './editwork-experience.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditworkExperiencePageRoutingModule
  ],
  declarations: [EditworkExperiencePage]
})
export class EditworkExperiencePageModule {}
