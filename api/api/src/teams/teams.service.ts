import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './schemas/team.schema';
import { Model } from 'mongoose';
import { LeaguesService } from 'src/leagues/leagues.service';

@Injectable()
export class TeamsService {
  constructor(
    @InjectModel(Team.name) private teamModel: Model<Team>,
    private leaguesService: LeaguesService,
  ) {}

  /**
   * @TODO We should do some pagination if league as more than 30
   */
  async findAllByLeague(leagueId: string): Promise<Team[]> {
    let query = {};
    const league = await this.leaguesService.findById(leagueId);
    query = {
      _id: {
        $in: league.teams,
      },
    };
    return this.teamModel.find(query).limit(30).exec();
  }

  findById(id: string) {
    return this.teamModel.findById(id);
  }

}
