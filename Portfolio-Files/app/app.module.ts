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
import { HTTPComponent } from './northwinds/http.component';
import { HTTPService } from './northwinds/http.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    WorkComponent,
    PfiveComponent,
    NorthwindsComponent, 
    HTTPComponent
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
        path: 'pfive',
        component: PfiveComponent
      }, {
        path: 'northwinds',
        component: NorthwindsComponent
      }
    ])
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }