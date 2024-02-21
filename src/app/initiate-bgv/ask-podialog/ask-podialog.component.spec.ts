import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskPODialogComponent } from './ask-podialog.component';

describe('AskPODialogComponent', () => {
  let component: AskPODialogComponent;
  let fixture: ComponentFixture<AskPODialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskPODialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AskPODialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
