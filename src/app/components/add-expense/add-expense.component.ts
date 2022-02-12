import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expense : Expense = new Expense();
  
  constructor(private _expenseService : ExpenseService
              ,private router :Router
              ,private _activatedroute : ActivatedRoute) { }

  ngOnInit(): void {

    const isPresent =  this._activatedroute.snapshot.paramMap.has('id');
    if(isPresent){
      const id = Number(this._activatedroute.snapshot.paramMap.get('id'));
      this._expenseService.getExpense(id).subscribe(
        data => this.expense = data 
      )
    }
  }

  addExpense()
  {

    this._expenseService.addExpense(this.expense).subscribe(
      data => {
        this.router.navigateByUrl("/expense");
    }

      
    )
  }

}
