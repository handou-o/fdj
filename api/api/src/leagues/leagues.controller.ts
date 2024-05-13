import { Controller, Get, Query } from '@nestjs/common';
import { League } from './schemas/league.schema';
import { LeaguesService } from './leagues.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('leagues')
export class LeaguesController {
  constructor(private leaguesService: LeaguesService) {}

  @ApiOperation({ summary: 'get Leagues by text search' })
  @ApiResponse({
    status: 200,
    description: 'Get success',
    type: League,
  })
  @Get()
  findAll(@Query('q') q: string | undefined): Promise<League[]> {
    return this.leaguesService.findAll(q);
  }
}
