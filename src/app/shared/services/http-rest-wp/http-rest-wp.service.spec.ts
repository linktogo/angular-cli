import { TestBed, inject } from '@angular/core/testing';

import { HttpRestWpService } from './http-rest-wp.service';

describe('HttpRestWpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpRestWpService]
    });
  });

  it('should be created', inject([HttpRestWpService], (service: HttpRestWpService) => {
    expect(service).toBeTruthy();
  }));
});
