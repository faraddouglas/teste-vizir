import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vantagens03Component } from './vantagens03.component';

describe('Vantagens03Component', () => {
  let component: Vantagens03Component;
  let fixture: ComponentFixture<Vantagens03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vantagens03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vantagens03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
