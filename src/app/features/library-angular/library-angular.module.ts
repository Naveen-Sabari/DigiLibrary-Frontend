import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryAngularComponent } from './library-angular.component';
import { LibraryAngularRoutingModule } from './library-angular-routing.module';

import { HeaderComponent } from '../examples/header/header.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    LibraryAngularRoutingModule,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LibraryAngularComponent
  ],
  declarations: [
    LibraryAngularComponent
  ],
  providers: [
  ],
})
export class LibraryAngularModule { }