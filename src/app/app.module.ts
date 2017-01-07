import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ArtistFormComponent } from './artist-form/artist-form.component';

import { MaterialModule } from '@angular/material';
import { RoutingServiceService } from './routing-service.service';
import { LiveFormComponent } from './live-form/live-form.component';
import { SignInWithTwitterComponent } from './sign-in-with-twitter/sign-in-with-twitter.component';

import { AngularFireModule } from 'angularfire2';

import { firebaseConfig } from './firebase-config'

@NgModule({
  declarations: [
    AppComponent,
    ArtistFormComponent,
    LiveFormComponent,
    SignInWithTwitterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  providers: [RoutingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
