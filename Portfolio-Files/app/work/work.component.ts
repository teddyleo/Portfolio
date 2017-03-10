import { Component, OnInit } from '@angular/core';
import { works } from "./../data/works";
import { projects } from './../data/p5';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

	works: Array<any> = works;
  projects: Array<any> = projects;

  constructor() { }

  ngOnInit() {
  }

}