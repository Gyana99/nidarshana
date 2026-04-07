import { ContactusComponent } from './contactus/contactus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      {
        path: '/home',
        component:WebsiteComponent
      },
      {
        path:'about-us',
        component:AboutusComponent
      },
      {
        path:'contact-us',
        component:ContactusComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule {}
