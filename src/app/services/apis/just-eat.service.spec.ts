import { TestBed, inject } from '@angular/core/testing';

import { JustEatService } from './just-eat.service';
import { HttpModule } from '@angular/http';

describe('JustEatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [JustEatService]
    });
  });

  it('should be created', inject([JustEatService], (service: JustEatService) => {
    expect(service).toBeTruthy();
  }));

  it('should be build proper url', inject([JustEatService], (service: JustEatService) => {
    expect(service.buildURL('restaurants'))
    .toEqual('https://public.je-apis.com/restaurants');

    expect(service.buildURL('restaurants', {q: 'se19'}))
    .toEqual('https://public.je-apis.com/restaurants?q=se19');

    expect(service.buildURL('restaurants', {q: 'se19', r: 'se20'}))
    .toEqual('https://public.je-apis.com/restaurants?q=se19&r=se20');
  }));
});
