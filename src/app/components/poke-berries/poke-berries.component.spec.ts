import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeBerriesComponent } from './poke-berries.component';

describe('PokeBerriesComponent', () => {
  let component: PokeBerriesComponent;
  let fixture: ComponentFixture<PokeBerriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeBerriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeBerriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
