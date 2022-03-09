import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingDetailsComponent } from './messaging-details.component';

describe('MessagingDetailsComponent', () => {
  let component: MessagingDetailsComponent;
  let fixture: ComponentFixture<MessagingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
