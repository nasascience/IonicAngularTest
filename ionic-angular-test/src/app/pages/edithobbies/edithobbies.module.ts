import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdithobbiesPageRoutingModule } from './edithobbies-routing.module';

import { EdithobbiesPage } from './edithobbies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdithobbiesPageRoutingModule
  ],
  declarations: [EdithobbiesPage]
})
export class EdithobbiesPageModule {}
