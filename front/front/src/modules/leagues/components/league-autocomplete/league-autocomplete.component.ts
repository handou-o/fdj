import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { League, LeaguesService } from '../../services/leagues.service';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon'
import { Observable, debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-league-autocomplete',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule, MatIcon],
  templateUrl: './league-autocomplete.component.html',
  styleUrl: './league-autocomplete.component.scss'
})
export class LeagueAutocompleteComponent {
  @Output() leagueSelected: EventEmitter<string> = new EventEmitter<string>();
  myControl = new FormControl();
  selectedOption?: string;
  filteredOptions: Observable<any>;


  constructor(private leagueService: LeaguesService){
    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      filter(x => typeof x === 'string'),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        return this.filter(val || '')
      })       
    );
  }

  ngOnInit() {
    this.myControl.valueChanges.subscribe((value) => {
      this.selectedOption = value;
    });
  }

  filter(val: string): Observable<League[]> {
    // call the service which makes the http-request
    return this.leagueService.getLeagues(val)
     .pipe(
       map(response => response.filter(option => { 
         return option
       }))
     )
   }  

   displayFn(league?: League): string {
    return league ? league.name : '';
  }

  selected($event: any){
    this.leagueSelected.emit($event.option.value._id)
  }
}
