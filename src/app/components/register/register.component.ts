import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:  User = {
    name: '',
    password: '',
    email: '',
    password2: ''
  }
  users: User[];
  @ViewChild('signupForm') form: any;

  constructor() { }

  ngOnInit() {
  }
  addUser(user: User) {
    this.users.push(user);
  }
  onSubmit({value}: {value: User}) {
     
    this.addUser(value);
      console.log(value);
    this.form.reset();

  }
}
