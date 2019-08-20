import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandManagerComponent } from './demand-manager.component';

describe('DemandManagerComponent', () => {
  let component: DemandManagerComponent;
  let fixture: ComponentFixture<DemandManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
