import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewexpComponent } from './newexp.component';

describe('NewexpComponent', () => {
  let component: NewexpComponent;
  let fixture: ComponentFixture<NewexpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewexpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewexpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
