import { TestBed, inject } from '@angular/core/testing';

import { JustEatService } from './just-eat.service';

describe('JustEatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JustEatService]
    });
  });

  it('should be created', inject([JustEatService], (service: JustEatService) => {
    expect(service).toBeTruthy();
  }));
});
