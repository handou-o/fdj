import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueAutocompleteComponent } from './league-autocomplete.component';

describe('LeagueAutocompleteComponent', () => {
  let component: LeagueAutocompleteComponent;
  let fixture: ComponentFixture<LeagueAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueAutocompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeagueAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
