import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingCompletedListComponent } from './onboarding-completed-list.component';

describe('OnboardingCompletedListComponent', () => {
  let component: OnboardingCompletedListComponent;
  let fixture: ComponentFixture<OnboardingCompletedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingCompletedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingCompletedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
