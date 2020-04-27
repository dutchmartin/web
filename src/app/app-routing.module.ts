import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },

  // page routes
  {
    path: 'boats',
    loadChildren: () => import('./boats/boats.module').then(m => m.BoatsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'certificates',
    loadChildren: () => import('./certificates/certificates.module').then(m => m.CertificatesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'reservations',
    loadChildren: () => import('./reservations/reservations.module').then(m => m.ReservationsModule),
    canActivate: [AuthGuard]
  },

  // wildcard route, default when nothing else matches
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
