import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Component({
  selector: 'app-sign-in-with-twitter',
  templateUrl: './sign-in-with-twitter.component.html',
  styleUrls: ['./sign-in-with-twitter.component.css']
})
export class SignInWithTwitterComponent implements OnInit {

  ngOnInit() {
  }

  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }
  login() {
    this.af.auth.login({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Popup,
    });
  }

  signOut() {
    this.af.auth.logout();
  }
}
