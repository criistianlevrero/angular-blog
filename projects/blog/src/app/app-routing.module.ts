import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  { path: '', component: MainComponent,
  children: [
    { path: '', component: HomeComponent, },
    { path: 'about', component: AboutComponent },
    { path: 'post', component: PostComponent,
      children:[
        {
          path:':postId', //:type is dynamic here
          component:PostComponent
        }
      ]
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
