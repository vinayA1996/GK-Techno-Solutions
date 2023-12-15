import { Routes } from '@angular/router';
import { HomeComponent } from './default/home/home.component';
import { ServicesComponent } from './default/services/services.component';
import { TeamComponent } from './default/team/team.component';
import { ContactComponent } from './default/contact/contact.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent },
];
