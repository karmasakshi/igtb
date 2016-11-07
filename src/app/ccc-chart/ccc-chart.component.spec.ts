/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CccChartComponent } from './ccc-chart.component';

describe('CccChartComponent', () => {
  let component: CccChartComponent;
  let fixture: ComponentFixture<CccChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CccChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CccChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
