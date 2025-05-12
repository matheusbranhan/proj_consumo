import { Controller, Get, Post, Body, Query, Param } from '@nestjs/common';
import { ConsumoEnergiaService } from './consumo_energia.service';
import { CreateConsumoDto } from './dto/create-consumo.dto';
import { QueryConsumoDto } from './dto/query-consumo.dto';

@Controller('consumo')
export class ConsumoEnergiaController {
  constructor(private readonly service: ConsumoEnergiaService) {}

  @Post()
  async create(@Body() createDto: CreateConsumoDto) {
    return this.service.create(createDto);
  }

  @Get()
  async findAll(@Query() query: QueryConsumoDto) {
    return this.service.findAll(query);
  }

  @Get('alertas/:userId')
  async alert(@Param('userId') userId: string) {
    const alert = await this.service.checkAlert(userId);
    return { alert };
  }
}
