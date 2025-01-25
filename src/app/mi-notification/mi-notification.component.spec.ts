import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiNotificationComponent } from './mi-notification.component';

describe('MiNotificationComponent', () => {
  let component: MiNotificationComponent;
  let fixture: ComponentFixture<MiNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
