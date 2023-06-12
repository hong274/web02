import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { ServiesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
  {
    path: 'services',
    component: ServiesComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

export default appRoutes;