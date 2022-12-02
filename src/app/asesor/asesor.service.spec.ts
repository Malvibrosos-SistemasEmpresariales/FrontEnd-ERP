/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AsesorService } from './asesor.service';

describe('Service: Asesor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsesorService]
    });
  });

  it('should ...', inject([AsesorService], (service: AsesorService) => {
    expect(service).toBeTruthy();
  }));
});
