import { TestBed } from '@angular/core/testing';

import { TreeCargosService } from './tree-cargos.service';

describe('TreeCargosService', () => {
  let service: TreeCargosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeCargosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
