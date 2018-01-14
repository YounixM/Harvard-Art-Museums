import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  state: string = '';
  error: any;

  user = {
    email : null,
    password : null
  }

  constructor(public afAuth: AngularFireAuth, private router: Router) {

  }

  submitSignUpForm(formData) {

    console.log(this.user);

    if (formData.valid) {
        let  email =  this.user.email;
        let password = this.user.password;

        this.afAuth.auth.createUserWithEmailAndPassword(email, password).then(
          function(res){
            console.log(res);
            this.router.navigate(['user-dashboard']);
            console.log('success');
          }
        ).catch(function(error){
          console.log('error');
        })
    }
  }

}
