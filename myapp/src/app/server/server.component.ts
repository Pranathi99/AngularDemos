import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  serverId:number=1;
  serverStatus:string="online";
  isServerEnabled:boolean=false;
  serverMsg:string="OFF";
  serverName:string="Server";
  serverDescription:string="";

  getServerStatus(){
    return this.serverStatus;
  }

  onPowerButtonClick(){
    if(this.serverMsg=="OFF")
    {
      this.serverMsg="ON";
      this.serverStatus="online";

    }
    else
    {
      this.serverMsg="OFF";
      this.serverStatus="offline";
    }
  }

  getPowerButtonLabel(){
    if(this.serverStatus=="online")
    {
      return "ON";
    }
    return "OFF";
  }

  onUpdateServerName(event:any){
    this.serverName=event.target.value;
  }

  getServerColor(){
    return this.serverStatus=='online'?'green':'red';
  }

  getServerClass(){
    return this.serverStatus=='online'?'btn-success':'btn-danger';
  }

}
