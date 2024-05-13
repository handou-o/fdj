import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Player } from '../../players/schemas/player.schema';
import { ApiProperty } from '@nestjs/swagger';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @ApiProperty({ description: 'name' })
  @Prop()
  name: string;

  @ApiProperty({ description: 'image link' })
  @Prop()
  thumbnail: string;

  @ApiProperty({ description: 'players by ids' })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }] })
  players: Player[];
}

export const TeamSchema = SchemaFactory.createForClass(Team);
