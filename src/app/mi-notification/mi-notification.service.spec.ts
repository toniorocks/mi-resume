import { TestBed } from '@angular/core/testing';

import { MiNotificationService } from './mi-notification.service';

describe('MiNotificationService', () => {
  let service: MiNotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiNotificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
