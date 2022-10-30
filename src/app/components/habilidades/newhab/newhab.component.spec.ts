import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewhabComponent } from './newhab.component';

describe('NewhabComponent', () => {
  let component: NewhabComponent;
  let fixture: ComponentFixture<NewhabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewhabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewhabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
