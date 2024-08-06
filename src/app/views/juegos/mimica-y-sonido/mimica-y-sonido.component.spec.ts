import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MimicaYSonidoComponent } from './mimica-y-sonido.component';

describe('MimicaYSonidoComponent', () => {
  let component: MimicaYSonidoComponent;
  let fixture: ComponentFixture<MimicaYSonidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MimicaYSonidoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MimicaYSonidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
