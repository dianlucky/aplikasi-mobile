import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatePegawaiPage } from './update-pegawai.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatePegawaiPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatePegawaiPageRoutingModule {}
