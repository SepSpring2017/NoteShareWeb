import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { NoteComponent } from './note/note.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_services/auth.guard';
import { UserService } from './_services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProfileComponent,
    SearchComponent,
    NoteComponent,
    AboutComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    FormsModule,
    HttpModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    BaseRequestOptions,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
