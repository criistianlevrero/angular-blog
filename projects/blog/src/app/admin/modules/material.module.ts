import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { PostsService } from '../../shared/services/posts/posts.service';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  exports: [
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
  ],
  providers: [PostsService]
})
export class MaterialModule { }
