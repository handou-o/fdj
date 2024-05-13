import { Module } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { MongooseModule } from '@nestjs/mongoose';
import { League, LeagueSchema } from './schemas/league.schema';
import { LeaguesController } from './leagues.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }]),
  ],
  providers: [LeaguesService],
  controllers: [LeaguesController],
  exports: [LeaguesService],
})
export class LeaguesModule {}
