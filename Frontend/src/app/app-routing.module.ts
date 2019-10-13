import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'regist', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'stages', loadChildren: './pages/stages/stages.module' },
  { path: 'adm-stages', loadChildren: './pages/adm-stages/adm-stages.module#AdmStagesPageModule' },
  { path: 'regist', loadChildren: './pages/regist/regist.module#RegistPageModule' },
  { path: 'authenticate', loadChildren: './pages/authenticate/authenticate.module#AuthenticatePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
