import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { RegisteryComponent } from './components/registery/registery.component';
import { ForumComponent } from './forum/forum.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { EditPostComponent } from './edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent,
    LoginComponent,
    MenuComponent,
    HomeComponent,
    RegisteryComponent,
    ForumComponent,
    AddPostComponent,
    PostDetailsComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
