import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInclementEmeraldComponent } from './pokemon-inclement-emerald.component';

describe('PokemonInclementEmeraldComponent', () => {
  let component: PokemonInclementEmeraldComponent;
  let fixture: ComponentFixture<PokemonInclementEmeraldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonInclementEmeraldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInclementEmeraldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
