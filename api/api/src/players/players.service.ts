import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './schemas/player.schema';
import { Model } from 'mongoose';
import { TeamsService } from 'src/teams/teams.service';

@Injectable()
export class PlayersService {
  constructor(
    @InjectModel(Player.name) private playerModel: Model<Player>,
    private teamService: TeamsService,
  ) {}

    /**
   * @TODO We should do some pagination if teams as more than 40 players
   */
  async findAllByTeam(teamId: string): Promise<Player[]> {
    const team = await this.teamService.findById(teamId);
    return this.playerModel
      .find(
        {
          _id: {
            $in: team.players,
          },
        },
        {
          signin: { $slice: -1 },
        },
      )
      .limit(40)
      .exec();
  }
}
