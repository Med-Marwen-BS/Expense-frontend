import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-list-expeses',
  templateUrl: './list-expeses.component.html',
  styleUrls: ['./list-expeses.component.css']
})
export class ListExpesesComponent implements OnInit {

  expenses : Expense[] = [] ;

  filters  = {
    keyword : ''
  }

  constructor(private _expenseService : ExpenseService
              ,private router : Router) { }

  ngOnInit(): void 
  { 
    this._expenseService.getExpenses().subscribe(
      data => this.expenses = data
    )
  }

  deleteExpense(id : number) {
     this._expenseService.deleteExpense(id).subscribe(
       data => {
         //this.router.navigateByUrl("/expense")
         this.ngOnInit();
       }
     )
  }


  listExpenses(){
    return this._expenseService.getExpenses().subscribe(
      data => this.expenses = this.filterExpense(data)
    )
  }

  
  filterExpense(expeses : Expense[]){
    return this.expenses.
    filter( (e) => {
      console.log(this.filters);
      
      return e.expense.toLowerCase().includes(this.filters.keyword.toLowerCase()) ;
    })
    
  }



}
