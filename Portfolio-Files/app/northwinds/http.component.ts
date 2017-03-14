import { Component } from '@angular/core';
import { HTTPService } from './http.service';
declare var tables : any;

@Component({
    selector: 'http',
    template: `
        <p>HTTP Section</p>
        <p>{{ getData }}</p>
        <button (click)="onReady()">Get Table</button>
    `,
    providers: [HTTPService]
})
export class HTTPComponent {

    getData: string;

    constructor (private _httpService : HTTPService) {}

    onReady() {
        this._httpService.getTable()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => console.log("Error: " + error + "\nOutput: " + this.getData), 
                () => console.log("Output: " + this.getData)
            );  
        // console.log(tables);
    }

}