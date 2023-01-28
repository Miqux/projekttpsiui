import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { RegisteryComponent } from './components/registery/registery.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { ForumComponent } from './forum/forum.component';
import { AuthGuard } from './services/authService/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'registery', component: RegisteryComponent},
  { path: 'home', component: HomeComponent},
  { path: 'edit', component: EditUserComponent, canActivate: [AuthGuard]},
  { path: 'addPost', component: AddPostComponent, canActivate: [AuthGuard]},
  { path: 'forum', component: ForumComponent},
  { path: 'postDetails/:id', component: PostDetailsComponent, canActivate: [AuthGuard]},
  { path: 'postEdit/:id', component: EditPostComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
