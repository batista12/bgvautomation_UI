import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateOnboardingComponent } from './initiate-onboarding.component';

describe('InitiateOnboardingComponent', () => {
  let component: InitiateOnboardingComponent;
  let fixture: ComponentFixture<InitiateOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateOnboardingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiateOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
