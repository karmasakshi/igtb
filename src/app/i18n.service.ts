import { Injectable } from '@angular/core';

import { TranslateService } from 'ng2-translate';

@Injectable()
export class I18nService {

    constructor(private translateService: TranslateService) {

        translateService.use('en');

    }

    public getActiveLocale(): string {

        return this.translateService.getBrowserLang();

    }

    public setLocale(locale): void {

        this.translateService.use(locale);

    }

    public getLocales(): any[] {

        return [
            { name: 'French', value: 'fr' },
            { name: 'English', value: 'en' }
        ];

    }

}