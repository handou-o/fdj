import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';
import { LeaguesModule } from './leagues/leagues.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL),
    PlayersModule,
    TeamsModule,
    LeaguesModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
