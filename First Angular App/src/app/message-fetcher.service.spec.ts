import { TestBed } from '@angular/core/testing';

import { MessageFetcherService } from './message-fetcher.service';

describe('MessageFetcherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageFetcherService = TestBed.get(MessageFetcherService);
    expect(service).toBeTruthy();
  });
});
