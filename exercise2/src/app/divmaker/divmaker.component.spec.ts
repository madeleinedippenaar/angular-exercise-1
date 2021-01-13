import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivmakerComponent } from './divmaker.component';

describe('DivmakerComponent', () => {
  let component: DivmakerComponent;
  let fixture: ComponentFixture<DivmakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivmakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
