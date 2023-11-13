/* eslint-disable max-len */
import { Controller, Get, Query } from '@nestjs/common';
import { ContabilidadService } from './contabilidad.service';

@Controller('contabilidad')
export class ContabilidadController {
  constructor(private readonly contabilidadService: ContabilidadService) {}

  @Get()
  obtenerHolaMundo() {
    return this.contabilidadService.primeraFuncion();
  }

  @Get('/empleados')
  async obtenerUsuariosDB() {
    return await this.contabilidadService.getUsuariosDB();
  }

  @Get('/razonesContables')
  async obtenerRznContablesDB() {
    return await this.contabilidadService.getRazonesContablesDB();
  }

  @Get('/razonesContablesDetalle')
  async obtenerRznContablesDetDB(@Query() idRazonContable: {idRazonContable: number}) {
    return await this.contabilidadService
      .getRazonesContablesDetalleDB(idRazonContable);
  }
}
