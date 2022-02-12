import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css']
})
export class UpdateExpenseComponent implements OnInit {
  expense : Expense = new Expense();
  constructor(private _expenseService : ExpenseService
    ,private router :Router) { }

  ngOnInit(): void {
  }

  
  updateExpense()
  {

    this._expenseService.updateExpense(this.expense).subscribe(
      data => {
        this.router.navigateByUrl("/expense");
    }

      
    )
  }

}
