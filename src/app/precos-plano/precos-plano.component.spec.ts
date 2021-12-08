import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecosPlanoComponent } from './precos-plano.component';

describe('PrecosPlanoComponent', () => {
  let component: PrecosPlanoComponent;
  let fixture: ComponentFixture<PrecosPlanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecosPlanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecosPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
