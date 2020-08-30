import { TestBed } from '@angular/core/testing';

import { BirdService } from './bird.service';

describe('BirdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BirdService = TestBed.get(BirdService);
    expect(service).toBeTruthy();
  });
});
