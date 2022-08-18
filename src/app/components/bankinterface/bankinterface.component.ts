import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/interface/Bank';
import { BankService } from 'src/service/bank.service';

@Component({
  selector: 'app-bankinterface',
  templateUrl: './bankinterface.component.html',
  styleUrls: ['./bankinterface.component.css']
})
export class BankinterfaceComponent implements OnInit {

  bankList:any[]=[]
  banks! : Bank[]
  constructor(
    private  bankService: BankService
  ) { }

  ngOnInit(): void {
    this.getBanks();
  }


  private getBanks(){
    this.bankService.getBankList().subscribe((data)=>{
      this.banks = data;
    });
  }

}