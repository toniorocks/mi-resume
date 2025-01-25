import { TestBed } from '@angular/core/testing';

import { MiModalService } from './mi-modal.service';

describe('MiModalService', () => {
  let service: MiModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
