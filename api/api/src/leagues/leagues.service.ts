import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { League } from './schemas/league.schema';
import { Model } from 'mongoose';

@Injectable()
export class LeaguesService {
  constructor(@InjectModel(League.name) private leagueModel: Model<League>) {}

  findById(id: string) {
    return this.leagueModel.findById(id);
  }

  findAll(q: string): Promise<League[]> {
    if (q) {
      return this.leagueModel
        .find({
          name: {
            $regex: `.*${q}.*`,
            $options: 'i',
          },
        })
        .limit(5)
        .select({
          name: 1,
          _id: 1,
        })
        .exec();
    } else return this.leagueModel.find().limit(10).exec();
  }
}
