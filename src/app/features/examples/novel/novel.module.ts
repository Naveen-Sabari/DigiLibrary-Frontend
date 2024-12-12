import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './novel-routing.module';
import { TutorialComponent } from './novel.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    // TutorialComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    // TutorialRoutingModule,
    HttpClientModule,
  ],

    exports: [TutorialRoutingModule ],
  
  providers: [
    
  ],
})
export class TutorialModule { }
