import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenido',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./componente/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./componente/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'bienvenido',
    loadChildren: () => import('./bienvenido/bienvenido.module').then( m => m.BienvenidoPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./modulo/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'ventas',
    loadChildren: () => import('./modulo/ventas/ventas.module').then( m => m.VentasPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
