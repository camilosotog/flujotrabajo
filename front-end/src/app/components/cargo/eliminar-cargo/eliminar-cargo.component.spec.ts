import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCargoComponent } from './eliminar-cargo.component';

describe('EliminarCargoComponent', () => {
  let component: EliminarCargoComponent;
  let fixture: ComponentFixture<EliminarCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
