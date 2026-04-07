import { Routes } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { HomeComponent } from './website/home/home.component';
import { AboutusComponent } from './website/aboutus/aboutus.component';
import { ContactusComponent } from './website/contactus/contactus.component';
import { ServicesComponent } from './website/services/services.component';
import { ProjectsComponent } from './website/projects/projects.component';
import { CareerComponent } from './website/career/career.component';


export const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./website/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about-us',
        component: AboutusComponent,
      },
      {
        path: 'contact-us',
        component: ContactusComponent,
      },
       {
        path: 'career',
        component: CareerComponent,
      },
       {
        path: 'projects',
        component: ProjectsComponent,
      },
       {
        path: 'services',
        component: ServicesComponent,
      },

    ],
  },
];
