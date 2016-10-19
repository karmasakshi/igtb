import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class SummaryService {

    constructor(private _authHttp: AuthHttp) { }

    getSummary() {

        return this._authHttp.get('https://robin-daniel-consultants.cloud.tyk.io/accounts/summary')

            .map((res: Response) => res.json()[0])

    }

}
