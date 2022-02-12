import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { ListExpesesComponent } from './components/list-expeses/list-expeses.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';

import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { UpdateExpenseComponent } from './components/update-expense/update-expense.component';
import { getLocaleExtraDayPeriodRules } from '@angular/common';

 const routers : Routes = [
   {path:'expense',component:ListExpesesComponent},
   {path:'addExpense',component:AddExpenseComponent},
   {path:'EditExpense/:id',component:AddExpenseComponent},
   {path:'updateExpense',component:UpdateExpenseComponent},
   {path:'',redirectTo : 'expense', pathMatch:'full'},
 ];

@NgModule({
  declarations: [
    AppComponent,
    ListExpesesComponent,
    AddExpenseComponent,
    UpdateExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
