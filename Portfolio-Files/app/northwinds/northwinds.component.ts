import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { projects } from './../data/p5';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-northwinds',
  templateUrl: './northwinds.component.html',
  styleUrls: ['./northwinds.component.css']
})
export class NorthwindsComponent implements OnInit {

    projects: Array<any> = projects;
    tables: Array<any> = [
      "Employee Privileges", 
      "Employees",
      "Inventory Transaction Types",
      "Inventory Transactions",
      "Invoices",
      "Order Details",
      "Order Details Status",
      "Orders",
      "Orders Status",
      "Orders Tax Status",
      "Privileges",
      "Products",
      "Purchase Order Details",
      "Purchase Order Status",
      "Purchase Orders",
      "Sales Reports",
      "Shippers",
      "Suppliers"
    ];

    constructor() {}

    ngOnInit() {}

}
