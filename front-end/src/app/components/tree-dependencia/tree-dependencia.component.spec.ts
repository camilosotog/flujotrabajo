import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeDependenciaComponent } from './tree-dependencia.component';

describe('TreeDependenciaComponent', () => {
  let component: TreeDependenciaComponent;
  let fixture: ComponentFixture<TreeDependenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeDependenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeDependenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
