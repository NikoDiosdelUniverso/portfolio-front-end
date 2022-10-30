import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarfotoComponent } from './editarfoto.component';

describe('EditarfotoComponent', () => {
  let component: EditarfotoComponent;
  let fixture: ComponentFixture<EditarfotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarfotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarfotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
