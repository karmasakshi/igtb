/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BCChartComponent } from './b-c-chart.component';

describe('BCChartComponent', () => {
  let component: BCChartComponent;
  let fixture: ComponentFixture<BCChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
