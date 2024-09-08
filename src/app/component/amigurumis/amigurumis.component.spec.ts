import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmigurumisComponent } from './amigurumis.component';

describe('AmigurumisComponent', () => {
  let component: AmigurumisComponent;
  let fixture: ComponentFixture<AmigurumisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmigurumisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmigurumisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
