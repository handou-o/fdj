import { Controller, Get, Param, Query } from '@nestjs/common';
import { Team } from './schemas/team.schema';
import { TeamsService } from './teams.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @ApiOperation({ summary: 'get teams by league id' })
  @ApiResponse({
    status: 200,
    description: 'Get success',
    type: Team,
  })
  @Get()
  findAll(@Query('league') league?: string): Promise<Team[]> {
    return this.teamsService.findAllByLeague(league);
  }

  @ApiOperation({ summary: 'get team by id' })
  @ApiResponse({
    status: 200,
    description: 'Get success',
    type: Team,
  })
  @Get('/:id')
  findById(@Param('id') teamId): Promise<Team> {
    return this.teamsService.findById(teamId);
  }

}
