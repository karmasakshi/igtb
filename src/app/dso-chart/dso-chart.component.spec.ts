/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DsoChartComponent } from './dso-chart.component';

describe('DsoChartComponent', () => {
  let component: DsoChartComponent;
  let fixture: ComponentFixture<DsoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsoChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
