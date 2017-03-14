import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HTTPService {

    constructor(private _http: Http) {}

    getTable() {
        return this._http.get("https://chloewuweb.com/test/getTables.php").map(res => res.json());
    }

}