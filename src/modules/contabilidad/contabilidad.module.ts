import { Module } from '@nestjs/common';
import { ContabilidadService } from './contabilidad.service';
import { ContabilidadController } from './contabilidad.controller';
import { Empleado } from './entities/empleados.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RazonContable } from './entities/razones-contable.entity';
import { RazonContableDetalle } from './entities/razones-contable-detalle.entity';
import { Pasivos } from './entities/pasivo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Empleado,
    RazonContable,
    RazonContableDetalle,
    Pasivos,
  ])],
  controllers: [ContabilidadController],
  providers: [ContabilidadService],
})
export class ContabilidadModule {}
