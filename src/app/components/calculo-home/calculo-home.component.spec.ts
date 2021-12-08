import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculoHomeComponent } from './calculo-home.component';

describe('CalculoHomeComponent', () => {
  let component: CalculoHomeComponent;
  let fixture: ComponentFixture<CalculoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculoHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
