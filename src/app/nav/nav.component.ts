import { Component, OnInit } from '@angular/core';

// Other vendors
import { Auth0Service } from '../auth0.service';

// Services
import { I18nService } from '../i18n.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    // Declarations
    private activeLocale: string;
    private locales: any[];

    constructor(private i18nService: I18nService, private auth0Service: Auth0Service) { }

    ngOnInit() {

        this.locales = this.i18nService.getLocales();

        this.setLocale(this.i18nService.getActiveLocale());

    }

    setLocale(locale) {

        this.activeLocale = locale;

        this.i18nService.setLocale(locale);

    }

}