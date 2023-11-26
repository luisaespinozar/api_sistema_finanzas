import { Module } from '@nestjs/common';
import { ContabilidadService } from './contabilidad.service';
import { ContabilidadController } from './contabilidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleados.entity';
import { MargenBrutoUtilidad } from './entities/margen-bruto-utilidad.entity';
import { RazonContableDetalle } from './entities/razones-contable-detalle.entity';
import { RazonContable } from './entities/razones-contable.entity';
import { MargenNetoUtilidad } from './entities/margen-neto-utilidad.entity';
import { RentabilidadCapital } from './entities/rentabilidad-capital.entity';
import { RotacionInventario } from './entities/rotacion-inventario.entity';
import { PruebaAcida } from './entities/prueba-acida.entity';


@Module({
  imports: [TypeOrmModule.forFeature([
    Empleado,
    RazonContable,
    RazonContableDetalle,
    MargenBrutoUtilidad,
    MargenNetoUtilidad,
    RentabilidadCapital,
    RotacionInventario,
    PruebaAcida,
  ])],
  controllers: [ContabilidadController],
  providers: [ContabilidadService],
})
export class ContabilidadModule {}
