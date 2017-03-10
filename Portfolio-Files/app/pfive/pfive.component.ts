import { Component, OnInit } from '@angular/core';
import { projects } from './../data/p5';
import './../../assets/js/p5.min.js';
import './../../assets/js/sketch.js';

@Component({
    selector: 'app-pfive',
    templateUrl: './pfive.component.html',
    styleUrls: ['./pfive.component.css']
})
export class PfiveComponent implements OnInit {

    projects: Array<any> = projects;

    constructor() { }

    ngOnInit() {
    }

}