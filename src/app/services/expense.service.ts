import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private geturl : string = "http://localhost:8082/expense"

  

  constructor(private _httpClient:HttpClient) { }

  getExpenses():Observable<Expense[]>{
    return this._httpClient.get<Expense[]>(this.geturl).pipe(
      map( response => response)
    )
  }


  addExpense(expense : Expense):Observable<Expense>{
    return this._httpClient.post<Expense>(this.geturl,expense) ;
  
  }

  getExpense(id : number):Observable<Expense>{
    return this._httpClient.get<Expense>(`${this.geturl}/${id}`).pipe(
      map(response => response)
    )
  }

  updateExpense(expense : Expense):Observable<Expense>{
    return this._httpClient.put<Expense>(this.geturl,expense) ;
  
  }

  deleteExpense(id : number) :Observable<any>{
    return this._httpClient.delete(`${this.geturl}/${id}` , {responseType : 'text'}) ;
  }
}
