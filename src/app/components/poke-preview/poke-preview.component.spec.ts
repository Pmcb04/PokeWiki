import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokePreviewComponent } from './poke-preview.component';

describe('PokePreviewComponent', () => {
  let component: PokePreviewComponent;
  let fixture: ComponentFixture<PokePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
