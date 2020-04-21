import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeCargoComponent } from './tree-cargo.component';

describe('TreeCargoComponent', () => {
  let component: TreeCargoComponent;
  let fixture: ComponentFixture<TreeCargoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreeCargoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
