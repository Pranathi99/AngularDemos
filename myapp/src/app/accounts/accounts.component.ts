import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/AccountServices';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
})
export class AccountsComponent implements OnInit {

  accounts:{name:string,status:string}[]=[];

  constructor(private accountService:AccountService) { 
      console.log(this.accountService.accounts);
      this.accounts=this.accountService.accounts;
  }

  ngOnInit(): void {
  }

}
