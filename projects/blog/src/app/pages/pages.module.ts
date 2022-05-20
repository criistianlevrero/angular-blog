import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { PostComponent } from './post/post.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    MainComponent,
    PostComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class PagesModule { }
