import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'editdetails',
    loadChildren: () => import('./pages/editdetails/editdetails.module').then( m => m.EditdetailsPageModule)
  },
  {
    path: 'editskills',
    loadChildren: () => import('./pages/editskills/editskills.module').then( m => m.EditskillsPageModule)
  },
  {
    path: 'edithobbies',
    loadChildren: () => import('./pages/edithobbies/edithobbies.module').then( m => m.EdithobbiesPageModule)
  },
  {
    path: 'editwork-experience',
    loadChildren: () => import('./pages/editwork-experience/editwork-experience.module').then( m => m.EditworkExperiencePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
