import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigurumisDetalleComponent } from './amigurumis-detalle.component';

describe('AmigurumisDetalleComponent', () => {
  let component: AmigurumisDetalleComponent;
  let fixture: ComponentFixture<AmigurumisDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmigurumisDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmigurumisDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
