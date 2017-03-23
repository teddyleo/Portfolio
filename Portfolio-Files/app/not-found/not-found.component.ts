import { Component, OnInit } from '@angular/core';
import { projects } from './../data/p5';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

    projects: Array<any> = projects;

    constructor() { }

    ngOnInit() {
    }

}
