/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IslaService } from './isla.service';

describe('Service: Isla', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IslaService]
    });
  });

  it('should ...', inject([IslaService], (service: IslaService) => {
    expect(service).toBeTruthy();
  }));
});
