import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../app/protected/protected.module').then(
        (m) => m.ProtectedModule
      ),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard],
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false, // Forma de trabajar con Hash para evitar problemas de rutas en los navegadores web en producción, pero si queremos controlarlo desde node lo ponemos a false
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
