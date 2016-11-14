import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

import { ENDPOINTS, TIMEOUT } from './constants';

@Injectable()
export class SummaryService {

    constructor(private _authHttp: AuthHttp) { }

    getSummary() {

        return this._authHttp.get(ENDPOINTS.GET_SUMMARY)

            .timeout(TIMEOUT, new Error('Timeout.'))

            .map((res: Response) => res.json()[0])

    }

}