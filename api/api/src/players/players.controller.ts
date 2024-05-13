import { Controller, Get, Query } from '@nestjs/common';
import { Player } from './schemas/player.schema';
import { PlayersService } from './players.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @ApiOperation({ summary: 'get players by team id' })
  @ApiResponse({
    status: 200,
    description: 'Get success',
    type: Player,
  })
  @Get()
  findAllByTeam(@Query('team') team?: string): Promise<Player[]> {
    return this.playersService.findAllByTeam(team);
  }
}
