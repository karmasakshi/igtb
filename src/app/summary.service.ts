import { Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SummaryService {

    constructor(private _authHttp: AuthHttp) { }

    getSummary() {

        return this._authHttp.get('https://robin-daniel-consultants.cloud.tyk.io/accounts/summary')

            .map((res: Response) => res.json()[0])

    }

    private extractData(res: Response) {

        let body = res.json();

        return body[0];

    }

}
