import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createform2Component } from './createform2.component';

describe('Createform2Component', () => {
  let component: Createform2Component;
  let fixture: ComponentFixture<Createform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createform2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Createform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
