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
    SummaryIncomesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: DashboardComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: '/', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }