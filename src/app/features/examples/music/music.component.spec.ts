import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialComponent } from './music.component';
import { SafePipe } from './safe.pipe';

describe('ExampleServicesComponent', () => {
  let component: TutorialComponent;
  let fixture: ComponentFixture<TutorialComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        TutorialComponent,
        SafePipe,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
