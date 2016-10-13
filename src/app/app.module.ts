import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
        NotificationCardComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: 'dashboard',
                component: DashboardComponent,
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
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }