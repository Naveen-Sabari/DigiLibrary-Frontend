import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './music-routing.module';
import { TutorialComponent } from './music.component';

import { SafePipe } from './safe.pipe';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@NgModule({
  declarations: [
    TutorialComponent,
    SafePipe,
  ],
  imports: [
    CommonModule,
    TutorialRoutingModule, 
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    TutorialComponent,
  ],
})
export class TutorialModule { }
