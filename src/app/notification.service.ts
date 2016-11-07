import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { ENV } from './constants';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';

@Injectable()
export class NotificationService {

    constructor(private _authHttp: AuthHttp) { }

    getNotifications() {

        let src = ENV === 'DEV' ? '/assets/notifications.json' : '/igtb/assets/notifications.json';

        return this._authHttp.get(src)

            .timeout(3000, new Error('Timeout.'))

            .map((res: Response) => res.json())

    }

}