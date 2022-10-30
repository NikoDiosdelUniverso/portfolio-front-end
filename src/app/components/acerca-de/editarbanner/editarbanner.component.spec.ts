import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarbannerComponent } from './editarbanner.component';

describe('EditarbannerComponent', () => {
  let component: EditarbannerComponent;
  let fixture: ComponentFixture<EditarbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarbannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
