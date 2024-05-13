import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { LeagueAutocompleteComponent } from '../../../leagues/components/league-autocomplete/league-autocomplete.component';

import { RouterModule } from '@angular/router';
import { Team, TeamsService } from '../../services/teams.service';
@Component({
  selector: 'app-teams-list',
  standalone: true,
  imports: [RouterModule, LeagueAutocompleteComponent, MatCard, MatCardContent, MatGridList, MatGridTile],
  templateUrl: './teams-list.component.html',
  styleUrl: './teams-list.component.scss'
})
export class TeamsListComponent {

  public teams: Team[] = [];
  firstSearch = false;
  constructor(private teamService: TeamsService){}

  listTeams(ligueId: string){
    this.firstSearch = true;
    this.teamService.listTeams(ligueId).subscribe((teams) => {
      this.teams = teams; 
    });
  }
}
