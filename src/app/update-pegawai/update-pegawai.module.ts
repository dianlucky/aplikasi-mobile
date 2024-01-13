import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePegawaiPageRoutingModule } from './update-pegawai-routing.module';

import { UpdatePegawaiPage } from './update-pegawai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePegawaiPageRoutingModule,
  ],
  declarations: [UpdatePegawaiPage],
})
export class UpdatePegawaiPageModule {}
