import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { PfiveComponent } from './pfive/pfive.component';
import { NorthwindsComponent } from './northwinds/northwinds.component';
import { HTTPService } from './northwinds/http.service';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkComponent,
    PfiveComponent,
    NorthwindsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: WorkComponent
      }, {
        path: 'about',
        component: AboutComponent
      }, {
        path: 'northwinds',
        component: NorthwindsComponent
      }, {
        path: '404',
        component: NotFoundComponent
      }, {
        path: '**',
        redirectTo: '/404'
      }
    ])
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }