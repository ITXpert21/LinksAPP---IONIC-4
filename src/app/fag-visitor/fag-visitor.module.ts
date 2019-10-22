import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FagVisitorPage } from './fag-visitor.page';

const routes: Routes = [
  {
    path: '',
    component: FagVisitorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FagVisitorPage]
})
export class FagVisitorPageModule {}
