import { TestBed, inject } from '@angular/core/testing';

import { StreamClientService } from './stream-client.service';

describe('StreamClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StreamClientService]
    });
  });

  it('should ...', inject([StreamClientService], (service: StreamClientService) => {
    expect(service).toBeTruthy();
  }));
});
