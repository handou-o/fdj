import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

export class Signin {
  amount: number;
  currency: string;
}

@Schema()
export class Player {
  @Prop()
  @ApiProperty({ description: 'name' })
  name: string;

  @ApiProperty({ description: 'position' })
  @Prop()
  position: string;

  @ApiProperty({ description: 'image link' })
  @Prop()
  thumbnail: string;

  @ApiProperty({ description: 'signin history' })
  @Prop({ type: [{ type: Signin }] })
  signin: Signin[];

  @ApiProperty({ description: 'birthdate' })
  @Prop()
  born: Date;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
