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

  @Get('/margenBrutoUtilidad')
  async obtenerMrgBrutoUti() {
    return await this.contabilidadService
      .getMargenBrutoUtilidadDB();
  }
  @Get('/margenNetoUtilidad')
  async obtenerMrgNetoUti() {
    return await this.contabilidadService
      .getMargenNetoUtilidadDB();
  }

  @Get('/rentabilidadCapital')
  async obtenerrentacap() {
    return await this.contabilidadService
      .getRentabilidadCapitalDB();
  }

  @Get('/rotacionInventario')
  async obtenerRinv() {
    return await this.contabilidadService
      .getRotacionInventarioDB();
  }

  @Get('/pruebaAcida')
  async obtenerPruebaAcida() {
    return await this.contabilidadService
      .getPruebaAcidaDB();
  }
}
