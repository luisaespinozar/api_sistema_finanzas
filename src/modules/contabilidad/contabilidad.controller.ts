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
  @Get('/pasivos')
  async obtenerPasivos() {
    return await this.contabilidadService.getPasivoDB();
  }
  @Get('/activos')
  async obtenerActivos() {
    return await this.contabilidadService.getActivos();
  }
  @Get('/balancegeneral')
  async obtenerbalancegeneral() {
    return await this.contabilidadService.getBalancegeneralDB();
  }
  @Get('/patrimonioneto')
  async obtenerPatrimonioNetoDB() {
    return await this.contabilidadService.getPatrimonioNetoDB();
  }
  @Get('/margenutilidadnetaoperacional')
  async obtenerMargenUtilidadOperacionalDB() {
    return await this.contabilidadService.getMargenUtilidadOperacionalDB();
  }
  @Get('/capitaltrabajonetooperacional')
  async CapitalTrabajoOperativoDB() {
    return await this.contabilidadService.getCapitalTrabajoOperativoDB();
  }
  @Get('/razoncorriente')
  async RazonCorrienteDB() {
    return await this.contabilidadService.getRazonCorrienteDB();
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

  @Get('/rotacionactivos')
  async obteneractivosrotacion() {
    return await this.contabilidadService
      .getActivosRotacionDB();
  }

  @Get('/rentabilidadactivos')
  async obteneractivosrentabilidad() {
    return await this.contabilidadService
      .getActivosRentabilidadDB();
  }
}



