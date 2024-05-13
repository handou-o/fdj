import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from './schemas/player.schema';
import { PlayersController } from './players.controller';
import { TeamsModule } from 'src/teams/teams.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }]),
    TeamsModule,
  ],
  providers: [PlayersService],
  controllers: [PlayersController],
})
export class PlayersModule {}
