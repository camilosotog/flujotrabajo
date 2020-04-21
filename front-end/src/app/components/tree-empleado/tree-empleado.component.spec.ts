import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeEmpleadoComponent } from './tree-empleado.component';

describe('TreeEmpleadoComponent', () => {
  let component: TreeEmpleadoComponent;
  let fixture: ComponentFixture<TreeEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
