import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteOnboardingComponent } from './complete-onboarding.component';

describe('CompleteOnboardingComponent', () => {
  let component: CompleteOnboardingComponent;
  let fixture: ComponentFixture<CompleteOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompleteOnboardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
