import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisteryComponent } from './components/registery/registery.component';
import { AuthGuard } from './services/authService/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registery', component: RegisteryComponent},
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard]},
  { path: 'home', component: HomeComponent},
  { path: 'edit', component: EditUserComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
