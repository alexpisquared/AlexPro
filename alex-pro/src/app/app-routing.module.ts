import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { MyFamilyComponent } from './my-family/my-family.component';
import { MyClientsComponent } from './my-clients/my-clients.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-apps', component: MyAppsComponent },
  { path: 'my-family', component: MyFamilyComponent },
  { path: 'my-clients', component: MyClientsComponent },
  { path: 'my-projects', component: MyProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
