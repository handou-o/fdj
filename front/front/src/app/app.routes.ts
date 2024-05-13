import { Routes } from '@angular/router';
import { TeamsListComponent } from '../modules/teams/components/teams-list/teams-list.component';
import { TeamItemComponent } from '../modules/teams/components/team-item/team-item.component';

export const routes: Routes = [
  {
    path: '',
    component: TeamsListComponent,
    title: 'Welcome'
  },
  {
    path: 'team/:id',
    component: TeamItemComponent,
    title: 'page'
  },
];
