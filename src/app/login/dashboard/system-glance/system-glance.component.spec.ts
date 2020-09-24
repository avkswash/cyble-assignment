/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SystemGlanceComponent } from './system-glance.component';

describe('SystemGlanceComponent', () => {
  let component: SystemGlanceComponent;
  let fixture: ComponentFixture<SystemGlanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemGlanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
