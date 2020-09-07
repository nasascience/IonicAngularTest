import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditdetailsPageRoutingModule } from './editdetails-routing.module';

import { EditdetailsPage } from './editdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditdetailsPageRoutingModule
  ],
  declarations: [EditdetailsPage]
})
export class EditdetailsPageModule {}
