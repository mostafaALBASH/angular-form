import {Component} from "angular2/core";
import {ControlGroup, FormBuilder, Validators} from'angular2/common';
import {OnInit} from 'angular2/core';

@Component({
  selector:'my-template-driven',
  template:`
    <h2>Sign Up Form يابن الشرموطة</h2>
    <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
      <label for="mail">Mail</label>
      <input [ngFormControl]="myForm.controls['email']" type="text" id="mail"/>
      <br>
      <label for="password">Password</label>
      <input [ngFormControl]="myForm.controls['password']" type="text" id="password"/>
      <br>
      <label for="confirm-password">Password</label>
      <input [ngFormControl]="myForm.controls['confirm-password']" type="text" id="confirm-password"/>
      <br>
      <button type="submit">submit</button>
    </form>
  `
})
export class TemplateDrivenFormComponent implements OnInit{
  myForm:ControlGroup;
  user={mail:'',password:''};

  constructor(private _formBuilder: FormBuilder) {}
  onSubmit(form){
    console.log(this.myForm);
  }
  ngOnInit():any{
    this.myForm = this._formBuilder.group({
      'email':['',Validators.required],
      'password':['',Validators.compose([
        Validators.maxLength(15),
        Validators.required
      ])],
      'confirm-password':['',Validators.required],

    });
  }
}
