import { Module } from '@nestjs/common';
import { ContabilidadService } from './contabilidad.service';
import { ContabilidadController } from './contabilidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleados.entity';
import { MargenBrutoUtilidad } from './entities/margen-bruto-utilidad.entity';
import { RazonContableDetalle } from './entities/razones-contable-detalle.entity';
import { RazonContable } from './entities/razones-contable.entity';
import { RazonContableDetalle } from './entities/razones-contable-detalle.entity';
import { Pasivos } from './entities/pasivo.entity';
import { Activos } from './entities/activo.entity';
import { BalanceGeneral } from './entities/balancegeneral.entity';
import { PatrimonioNeto } from './entities/patrimonio.entity';
import { MargenUtilidadOperacional } from './entities/margenutilidadOperacional.entity';
import { CapitalTrabajoNetoOperativo } from './entities/capitaltrabajoNetoOperativo.entitty';
import { CorrienteRazon } from './entities/CorrienteRazon.entity';
import { MargenNetoUtilidad } from './entities/margen-neto-utilidad.entity';
import { RentabilidadCapital } from './entities/rentabilidad-capital.entity';
import { RotacionInventario } from './entities/rotacion-inventario.entity';
import { PruebaAcida } from './entities/prueba-acida.entity';


@Module({
  imports: [TypeOrmModule.forFeature([
    Empleado,
    RazonContable,
    RazonContableDetalle,
    Activos,
    Pasivos,
    BalanceGeneral,
    PatrimonioNeto,
    CapitalTrabajoNetoOperativo,
    MargenUtilidadOperacional,
    CorrienteRazon,
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
