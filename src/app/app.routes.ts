import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NoteComponent } from './note/note.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';

export const router: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full'},
    { path: 'main', component: MainComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'search', component: SearchComponent },
    { path: 'note', component: NoteComponent },
    { path: 'register', component: RegisterComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
