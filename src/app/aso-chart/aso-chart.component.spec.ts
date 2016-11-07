/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AsoChartComponent } from './aso-chart.component';

describe('AsoChartComponent', () => {
  let component: AsoChartComponent;
  let fixture: ComponentFixture<AsoChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsoChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
