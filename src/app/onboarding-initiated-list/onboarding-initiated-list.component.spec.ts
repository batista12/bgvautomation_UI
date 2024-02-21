import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingInitiatedListComponent } from './onboarding-initiated-list.component';

describe('OnboardingInitiatedListComponent', () => {
  let component: OnboardingInitiatedListComponent;
  let fixture: ComponentFixture<OnboardingInitiatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingInitiatedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingInitiatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
