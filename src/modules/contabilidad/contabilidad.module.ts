import { Module } from '@nestjs/common';
import { ContabilidadService } from './contabilidad.service';
import { ContabilidadController } from './contabilidad.controller';
import { Empleado } from './entities/empleados.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RazonContable } from './entities/razones-contable.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empleado, RazonContable])],
  controllers: [ContabilidadController],
  providers: [ContabilidadService],
})
export class ContabilidadModule {}
