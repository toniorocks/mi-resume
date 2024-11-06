import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TlItemComponent } from './tl-item.component';

describe('TlItemComponent', () => {
  let component: TlItemComponent;
  let fixture: ComponentFixture<TlItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TlItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TlItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
