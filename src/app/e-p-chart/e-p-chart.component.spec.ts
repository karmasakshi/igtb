/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EPChartComponent } from './e-p-chart.component';

describe('EPChartComponent', () => {
  let component: EPChartComponent;
  let fixture: ComponentFixture<EPChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EPChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EPChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
