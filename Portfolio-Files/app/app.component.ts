import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule }   from '@angular/router';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { PfiveComponent } from './pfive/pfive.component';
import { NorthwindsComponent } from './northwinds/northwinds.component';
import { HTTPComponent } from './northwinds/http.component';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  url: boolean = true;

  loc: string = location.pathname;

}