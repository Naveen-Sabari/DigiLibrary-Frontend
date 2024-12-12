import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAngularComponent } from './library-angular.component';
import { CommonModule } from '@angular/common';


describe('LibraryAngularComponent', () => {
  let component: LibraryAngularComponent;
  let fixture: ComponentFixture<LibraryAngularComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibraryAngularComponent],
      imports: [
        CommonModule,
        
      ]      
    });
    fixture = TestBed.createComponent(LibraryAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
