import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoEnergia, ConsumoEnergiaSchema } from './consumo_energia.model';
import { ConsumoEnergiaService } from './consumo_energia.service';
import { ConsumoEnergiaController } from './consumo_energia.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ConsumoEnergia.name, schema: ConsumoEnergiaSchema },
    ]),
  ],
  providers: [ConsumoEnergiaService],
  controllers: [ConsumoEnergiaController],
})
export class ConsumoEnergiaModule {}
