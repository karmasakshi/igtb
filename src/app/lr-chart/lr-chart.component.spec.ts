/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LrChartComponent } from './lr-chart.component';

describe('LrChartComponent', () => {
  let component: LrChartComponent;
  let fixture: ComponentFixture<LrChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
