import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { aboutComponent } from './about/about.component';
import { teamComponent } from './team/team.component';
import { portfolioComponent } from './portfolio/portfolio.component';


const appRoutes: Routes = [
  { path: '', component: '' },
  { path: 'team', component: teamComponent },
  { path: 'about', component: aboutComponent },
  { path: 'portfolio', component: portfolioComponent },
];


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) 
  ],
  declarations: [ AppComponent, HelloComponent, aboutComponent, teamComponent, portfolioComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
