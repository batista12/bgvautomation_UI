import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingPendingListComponent } from './onboarding-pending-list.component';

describe('OnboardingPendingListComponent', () => {
  let component: OnboardingPendingListComponent;
  let fixture: ComponentFixture<OnboardingPendingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardingPendingListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardingPendingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
