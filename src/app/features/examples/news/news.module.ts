import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsRoutingModule } from './news-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../example-modal /model.module'; 
import { NewsComponent } from './news.component';  

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    ModelModule,
    RouterModule,
    FormsModule
  ],
 
  exports: [NewsRoutingModule]
})
export class NewsModule {}
