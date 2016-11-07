import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate';

import { ENV } from './constants';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { SummaryComponent } from './summary/summary.component';
import { SummaryDefaultComponent } from './summary-default/summary-default.component';
import { SummaryAccountsComponent } from './summary-accounts/summary-accounts.component';
import { SummarySpendingsComponent } from './summary-spendings/summary-spendings.component';
import { SummaryIncomesComponent } from './summary-incomes/summary-incomes.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { NotificationComponent } from './notification/notification.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';

import { Auth0Service } from './auth0.service';
import { GuardService } from './guard.service';
import { I18nService } from './i18n.service';
import { NotificationService } from './notification.service';
import { EPChartComponent } from './e-p-chart/e-p-chart.component';
import { BCChartComponent } from './b-c-chart/b-c-chart.component';
import { AsoChartComponent } from './aso-chart/aso-chart.component';
import { DsoChartComponent } from './dso-chart/dso-chart.component';
import { LrChartComponent } from './lr-chart/lr-chart.component';
import { CccChartComponent } from './ccc-chart/ccc-chart.component';

let i18nPath = ENV === 'DEV' ? '/assets/i18n' : '/igtb/assets/i18n';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LoginComponent,
        NavComponent,
        SummaryComponent,
        SummaryDefaultComponent,
        SummaryAccountsComponent,
        SummarySpendingsComponent,
        SummaryIncomesComponent,
        SummaryCardComponent,
        NotificationComponent,
        NotificationCardComponent,
        EPChartComponent,
        BCChartComponent,
        AsoChartComponent,
        DsoChartComponent,
        LrChartComponent,
        CccChartComponent
    ],
    imports: [
        BrowserModule,
        ChartsModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [GuardService],
                children: [
                    {
                        path: '',
                        component: SummaryDefaultComponent
                    },
                    {
                        path: 'accounts',
                        component: SummaryAccountsComponent
                    },
                    {
                        path: 'incomes',
                        component: SummaryIncomesComponent
                    },
                    {
                        path: 'spendings',
                        component: SummarySpendingsComponent
                    }
                ]
            },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
        ]),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, i18nPath, '.json'),
            deps: [Http]
        })
    ],
    providers: [AUTH_PROVIDERS, Auth0Service, GuardService, I18nService, NotificationService],
    bootstrap: [AppComponent]
})
export class AppModule { }