import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeBoxComponent } from './poke-box.component';

describe('PokeBoxComponent', () => {
  let component: PokeBoxComponent;
  let fixture: ComponentFixture<PokeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
