import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/AccountServices';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input()
  account:{
    name:string,
    status:string
  };

  @Input()
  id:number;

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
  }

  changeStatus(status:string)
  {
    this.accountService.updateStatus(this.id,status);
  }

  deleteAccount()
  {
     this.accountService.deleteAcount(this.id);
  }

}
