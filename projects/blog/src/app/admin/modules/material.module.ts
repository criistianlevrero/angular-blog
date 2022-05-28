import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PostsService } from '../../shared/services/posts/posts.service';

@NgModule({
  declarations: [],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  providers: [PostsService]
})
export class MaterialModule { }
