/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PfiveComponent } from './pfive.component';

describe('PfiveComponent', () => {
  let component: PfiveComponent;
  let fixture: ComponentFixture<PfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
