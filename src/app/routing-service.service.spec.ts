/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoutingServiceService } from './routing-service.service';

describe('RoutingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutingServiceService]
    });
  });

  it('should ...', inject([RoutingServiceService], (service: RoutingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
