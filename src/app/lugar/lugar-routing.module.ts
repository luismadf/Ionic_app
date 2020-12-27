import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugarPage } from './lugar.page';

const routes: Routes = [
  {
    path: '',
    component: LugarPage
  },
  {
    path: 'place-detail',
    loadChildren: () => import('./place-detail/place-detail.module').then( m => m.PlaceDetailPageModule)
  },
  {
    path: 'place-add',
    loadChildren: () => import('./place-add/place-add.module').then( m => m.PlaceAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugarPageRoutingModule {}