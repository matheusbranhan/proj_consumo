import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoEnergiaModule } from './consumo_energia/consumo_energia.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-consumo'),
    ConsumoEnergiaModule,
  ],
})
export class AppModule {}
