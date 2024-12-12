import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsComponent } from './trailer.component';
import { NewsRoutingModule } from './trailer-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoryPipe } from './category.pipe';
import { SafePipe } from './safe.pipe';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    NewsComponent
  ],
  declarations: [
    NewsComponent,
    CategoryPipe,
    SafePipe,
  ],
  providers: [
  ],
})
export class NewsModule { }