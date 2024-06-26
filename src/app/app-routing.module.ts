import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
  /*,
  {
    path: 'photo-form',
    loadChildren: () => import('./photo-form/photo-form.module').then( m => m.PhotoFormPageModule)
  },
  {
    path: 'photo-detail/:id',
    loadChildren: () => import('./photo-detail/photo-detail.module').then( m => m.PhotoDetailPageModule)
  }*/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
