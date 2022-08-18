import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BankinterfaceComponent } from 'src/app/components/bankinterface/bankinterface.component';
import { Bank } from 'src/app/interface/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private  baseURL = 'http://localhost:8086//api/v1/bank';
  constructor(
    private httpClient :HttpClient
  ) { }

  getBankList():Observable<Bank[]>{
    return this.httpClient.get<Bank[]>(`${this.baseURL}`);
  }

  createBank(bank: Bank):Observable<Bank>{
    return this.httpClient.post<Bank>(`${this.baseURL}`,bank);
    }

  getBankByID(id:number):Observable<Bank>{
    return this.httpClient.get<Bank>(`${this.baseURL}/${id}`);
  }

  updatebank(id:number,bank:Bank):Observable<Bank>{
    return this.httpClient.put<Bank>(`${this.baseURL}/${id}`,bank);
  }
  deleteBank(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
 