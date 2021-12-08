import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vantagens01Component } from './vantagens01.component';

describe('Vantagens01Component', () => {
  let component: Vantagens01Component;
  let fixture: ComponentFixture<Vantagens01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vantagens01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vantagens01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
