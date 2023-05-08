import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css']
})
export class SecretComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 logs=[];
 showSecret:boolean;

 toggleShowSecret()
 {
    let dateTime=new Date();
    this.showSecret=!this.showSecret;
    this.logs.push("Button pushed at "+dateTime.toLocaleTimeString());
 }

 onResetLogs(){
  this.logs=[];
 }

}
