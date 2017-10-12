import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseRequestOptions } from '@angular/http';
import { GravatarModule } from 'ng2-gravatar-directive';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_services/auth.guard';
import { UserService } from './_services/user.service';
import { SubjectService } from './_services/subject.service';
import { DocumentService } from './_services/document.service';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProfileComponent,
    AboutComponent,
    MainComponent,
    RegisterComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routes,
    FormsModule,
    HttpModule,
    GravatarModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    BaseRequestOptions,
    UserService,
    SubjectService,
    DocumentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
