import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RformsComponent implements OnInit {

  genders=['Male','Female'];

  constructor() { }

  signupForm:FormGroup;

  ngOnInit(): void {
    this.signupForm=new FormGroup({
      username:new FormControl(null,[Validators.required,this.checkUserNames.bind(this)]),
      email:new FormControl(null,[Validators.required,Validators.email]),
      gender:new FormControl('Male')
    })
  }

  onSubmit(){
    console.log(this.signupForm.value);
  }

  forbiddenUserNames=['admin','administrator','master','main'];
  checkUserNames(control:FormControl):{[s:string]:boolean}{
    if(this.forbiddenUserNames.indexOf(control.value)>=0)
    {
      return {nameIsForbidden:true};
    }
    return null;
  }

}
