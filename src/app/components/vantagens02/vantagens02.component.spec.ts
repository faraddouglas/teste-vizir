import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vantagens02Component } from './vantagens02.component';

describe('Vantagens02Component', () => {
  let component: Vantagens02Component;
  let fixture: ComponentFixture<Vantagens02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vantagens02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vantagens02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
