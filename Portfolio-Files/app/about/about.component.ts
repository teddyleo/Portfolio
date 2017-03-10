import { Component, OnInit } from '@angular/core';
import { experiences } from './../data/experiences';
import { projects } from './../data/p5';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    exptab: string = '';
    tab: string = '';
    experiences: Array<any> = experiences;
    projects: Array<any> = projects;

    constructor() { }

    ngOnInit() {
    }

}
