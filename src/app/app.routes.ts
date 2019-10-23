import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthGuard } from './services/auth.guard';
import { MapaComponent } from './components/mapa/mapa.component';

const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'mapa', component: MapaComponent , canActivate: [AuthGuard]},
    { path: 'callback', component: CallbackComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES);
