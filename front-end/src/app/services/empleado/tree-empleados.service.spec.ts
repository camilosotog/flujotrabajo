import { TestBed } from '@angular/core/testing';

import { TreeEmpleadosService } from './tree-empleados.service';

describe('TreeEmpleadosService', () => {
  let service: TreeEmpleadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeEmpleadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
