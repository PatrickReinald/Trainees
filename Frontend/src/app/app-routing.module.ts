import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'stages', loadChildren: './pages/stages/stages.module#StagesPageModule' },
  { path: 'adm-stages', loadChildren: './pages/adm-stages/adm-stages.module#AdmStagesPageModule' },
  { path: 'regist', loadChildren: './pages/regist/regist.module#RegistPageModule' },
  { path: 'auth', loadChildren: './pages/authenticate/authenticate.module#AuthenticatePageModule' },
  { path: 'stage-details', loadChildren: '.pages/stage-details/stage-details.module#StageDetailsPageModule' },
  { path: 'update', loadChildren: '.pages/update/update.module#UpdatePageModule' },
  { path: 'details', loadChildren: '.pages/details/details.module#DetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
