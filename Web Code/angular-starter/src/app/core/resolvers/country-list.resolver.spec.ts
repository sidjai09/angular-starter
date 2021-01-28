import {TestBed} from '@angular/core/testing';

import {CountryListResolver} from './country-list.resolver';

describe('CountryListResolver', () => {
  let resolver: CountryListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CountryListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
