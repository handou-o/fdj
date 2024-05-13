import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../../players/services/players.service';
import { TeamsService } from '../../services/teams.service';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { first, firstValueFrom, of } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-item',
  standalone: true,
  imports: [MatCard, MatCardContent, MatToolbar, MatIcon, MatGridList, MatGridTile, CommonModule, RouterLink],
  templateUrl: './team-item.component.html',
  styleUrl: './team-item.component.scss'
})
export class TeamItemComponent implements OnInit {
  public players: Player[] = [];
  public clubName?: string;
  @Input() id!: string;

  constructor(private teamService: TeamsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.clubName = this.route.snapshot.fragment ?? '';
    if (this.players.length == 0 || this.clubName == null) {
      this.initData();
    }
  }

  async initData() {
    this.players = await firstValueFrom(this.teamService.listPlayers(this.id));
    this.clubName = (await firstValueFrom(this.teamService.getTeam(this.id)))?.name;
  }

  fixIssue(currency: string){
    if (currency == 'gpp') return 'gbp'; // database issue with currency
    return currency;
  }
}
