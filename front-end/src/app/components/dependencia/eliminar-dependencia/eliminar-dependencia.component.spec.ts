import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDependenciaComponent } from './eliminar-dependencia.component';

describe('EliminarDependenciaComponent', () => {
  let component: EliminarDependenciaComponent;
  let fixture: ComponentFixture<EliminarDependenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarDependenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
