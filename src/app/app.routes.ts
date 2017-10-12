import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NotesComponent } from './notes/notes.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_services/auth.guard';

export const router: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about', component: AboutComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'notes', component: NotesComponent, canActivate: [AuthGuard]},
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
