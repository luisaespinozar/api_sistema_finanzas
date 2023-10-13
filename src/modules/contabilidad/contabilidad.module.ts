import { Module } from '@nestjs/common';
import { ContabilidadService } from './contabilidad.service';
import { ContabilidadController } from './contabilidad.controller';
import { Empleado } from './entities/empleados.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado])],
  controllers: [ContabilidadController],
  providers: [ContabilidadService],
})
export class ContabilidadModule {}
