import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ConsumoEnergia extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  kwh: number;

  @Prop({ required: true })
  leituraEm: Date;
}

export const ConsumoEnergiaSchema = SchemaFactory.createForClass(ConsumoEnergia);
