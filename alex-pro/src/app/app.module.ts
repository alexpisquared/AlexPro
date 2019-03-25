import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyClientsComponent } from './my-clients/my-clients.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { MyFamilyComponent } from './my-family/my-family.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MyClientsComponent,
    MyProjectsComponent,
    MyFamilyComponent,
    MyAppsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
