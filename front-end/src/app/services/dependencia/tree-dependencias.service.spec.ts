import { TestBed } from '@angular/core/testing';

import { TreeDependenciasService } from './tree-dependencias.service';

describe('TreeDependenciasService', () => {
  let service: TreeDependenciasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeDependenciasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
