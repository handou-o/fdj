import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Team } from '../../teams/schemas/team.schema';
import { ApiProperty } from '@nestjs/swagger';

export type LeagueDocument = HydratedDocument<League>;

@Schema()
export class League {
  @ApiProperty({
    description: 'name, champ indexé pour faciliter la recherche',
  })
  @Prop({ index: true })
  name: string;

  @ApiProperty({ description: 'sport' })
  @Prop()
  sport: string;

  @ApiProperty({ description: 'team by ids' })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Team' }] })
  teams: Team[];
}

export const LeagueSchema = SchemaFactory.createForClass(League);
