import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiateBgvComponent } from './initiate-bgv.component';

describe('InitiateBgvComponent', () => {
  let component: InitiateBgvComponent;
  let fixture: ComponentFixture<InitiateBgvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitiateBgvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitiateBgvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
