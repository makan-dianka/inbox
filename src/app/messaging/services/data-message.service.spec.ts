import { TestBed } from '@angular/core/testing';

import { DataMessageService } from './data-message.service';

describe('DataMessageService', () => {
  let service: DataMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
