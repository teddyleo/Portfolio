import { Component, OnInit } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { projects } from './../data/p5';
import { Http } from '@angular/http';
import { HTTPService } from './http.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-northwinds',
  templateUrl: './northwinds.component.html',
  styleUrls: ['./northwinds.component.css']
})
export class NorthwindsComponent implements OnInit {

    projects: Array<any> = projects;
    tabID : number = 1;
    tableTabID : number = 1;
    queryTabID : number = 1;
    tabNames = [
      {name : "Tables", id : 1},
      {name : "Queries", id : 2}
    ];
    tableNames = [
      {name : "Customers", id : 1}, 
      {name : "Employee Privileges", id : 2}, 
      {name : "Employees", id : 3},
      {name : "Inventory Transaction Types", id : 4},
      {name : "Inventory Transactions", id : 5},
      {name : "Invoices", id : 6},
      {name : "Order Details", id : 7},
      {name : "Order Details Status", id : 8},
      {name : "Orders", id : 9},
      {name : "Orders Status", id : 10},
      {name : "Orders Tax Status", id : 11},
      {name : "Privileges", id : 12},
      {name : "Products", id : 13},
      {name : "Purchase Order Details", id : 14},
      {name : "Purchase Order Status", id : 15},
      {name : "Purchase Orders", id : 16},
      {name : "Sales Reports", id : 17},
      {name : "Shippers", id : 18},
      {name : "Suppliers", id : 19}
    ];
    queryNames = [
      {name : "Customers Extended", id : 1}, 
      {name : "Order Summary", id : 2}, 
    ];
    tables: Array<any> = [];


    constructor (private _httpService : HTTPService) {
        this._httpService.getTable()
            .subscribe(
                data => this.tables = data,
                error => console.log("Error: " + error), 
                () => console.log("Output: " + JSON.stringify(this.tables))
            );  
    }

    ngOnInit() {}

}
