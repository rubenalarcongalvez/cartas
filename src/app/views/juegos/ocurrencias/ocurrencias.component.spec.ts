import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcurrenciasComponent } from './ocurrencias.component';

describe('OcurrenciasComponent', () => {
  let component: OcurrenciasComponent;
  let fixture: ComponentFixture<OcurrenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OcurrenciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcurrenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
