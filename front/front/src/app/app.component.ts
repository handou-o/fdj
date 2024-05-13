import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeagueAutocompleteComponent } from '../modules/leagues/components/league-autocomplete/league-autocomplete.component';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon'
import { MatNavList } from '@angular/material/list'
import { MatToolbar } from '@angular/material/toolbar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenav, MatSidenavContainer, MatSidenavContent, MatIcon, MatNavList, MatToolbar],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';
}
