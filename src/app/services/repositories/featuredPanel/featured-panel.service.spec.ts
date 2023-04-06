import { TestBed } from '@angular/core/testing';

import { FeaturedPanelService } from './featured-panel.service';

describe('FeaturedPanelService', () => {
  let service: FeaturedPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeaturedPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
