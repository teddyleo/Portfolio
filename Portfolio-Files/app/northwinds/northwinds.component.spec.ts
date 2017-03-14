/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NorthwindsComponent } from './northwinds.component';

describe('NorthwindsComponent', () => {
  let component: NorthwindsComponent;
  let fixture: ComponentFixture<NorthwindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthwindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthwindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
