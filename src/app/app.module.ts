import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {AppComponent} from './app.component';
import {LoginpageComponent} from './components/login/loginpage/loginpage.component';
import {MatInputModule} from '@angular/material/input';
import {SignuppageComponent} from './components/login/signuppage/signuppage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SideComponent} from './components/login/side/side.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Routes, RouterModule} from '@angular/router';
import { ForgotpasswordComponent } from './components/login/forgotpassword/forgotpassword.component';

const appRoutes: Routes = [
  {path : 'login' , component : LoginpageComponent},
  {path : 'signup', component : SignuppageComponent},
  {path : 'forgotpassword', component : ForgotpasswordComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    SignuppageComponent,
    SideComponent,
    ForgotpasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
