import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AuthService } from './auth.service';
import { ProfileComponent } from './profile/profile.component';
import { EmailComponent } from './email/email.component';

const firebaseConfig = {
  apiKey: 'your_keyhere_jwaeqsFdm1hNMQ',
  authDomain: 'yourdomain.firebaseapp.com',
  databaseURL: 'https://angularauth-yourlinkhere.firebaseio.com',
  projectId: 'angularauth-yourIDHere',
  storageBucket: 'angularauth-Idhere.appspot.com',
  messagingSenderId: '11240551_IDhere',
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignUppageComponent,
    ProfileComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
