import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Createform3Component } from './createform3.component';

describe('Createform3Component', () => {
  let component: Createform3Component;
  let fixture: ComponentFixture<Createform3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Createform3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Createform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
