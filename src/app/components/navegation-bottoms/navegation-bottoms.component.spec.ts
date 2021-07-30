import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegationBottomsComponent } from './navegation-bottoms.component';

describe('NavegationBottomsComponent', () => {
  let component: NavegationBottomsComponent;
  let fixture: ComponentFixture<NavegationBottomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegationBottomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegationBottomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
