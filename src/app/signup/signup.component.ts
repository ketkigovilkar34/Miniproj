import { Component, OnInit } from '@angular/core';
import { Signup} from './Signup'
import { FormControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup;
  signup:Signup[]=[];

  register()
  {
    console.log(this.form.value)
  }
  constructor() { }

  ngOnInit(): void {
    this.form=new FormGroup({
      uname: new FormControl(""),
      uemail: new FormControl(""),
      upass: new FormControl(""),
      unumb: new FormControl(""),



    })
  }

}
