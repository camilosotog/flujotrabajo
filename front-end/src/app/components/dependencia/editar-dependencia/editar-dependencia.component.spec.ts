import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDependenciaComponent } from './editar-dependencia.component';

describe('EditarDependenciaComponent', () => {
  let component: EditarDependenciaComponent;
  let fixture: ComponentFixture<EditarDependenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDependenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
