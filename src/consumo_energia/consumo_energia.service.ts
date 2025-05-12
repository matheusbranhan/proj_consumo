import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConsumoEnergia } from './consumo_energia.model';
import { CreateConsumoDto } from './dto/create-consumo.dto';
import { QueryConsumoDto } from './dto/query-consumo.dto';

@Injectable()
export class ConsumoEnergiaService {
  constructor(
    @InjectModel(ConsumoEnergia.name)
    private consumoModel: Model<ConsumoEnergia>,
  ) {}

  async create(createDto: CreateConsumoDto): Promise<ConsumoEnergia> {
    const created = new this.consumoModel(createDto);
    return created.save();
  }

  async findAll(query: QueryConsumoDto): Promise<ConsumoEnergia[]> {
    return this.consumoModel
      .find({
        leituraEm: { $gte: query.start, $lte: query.end },
      })
      .exec();
  }

  async checkAlert(userId: string): Promise<boolean> {
    const records = await this.consumoModel
      .find({ userId })
      .sort({ leituraEm: -1 })
      .limit(2)
      .exec();

    if (records.length < 2) {
      return false;
    }

    return records[0].kwh > records[1].kwh;
  }
}
