/* eslint-disable max-len */
/* eslint-disable camelcase */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Empleado } from './entities/empleados.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RazonContable } from './entities/razones-contable.entity';
import { RazonContableDetalle } from './entities/razones-contable-detalle.entity';
import { Activos } from './entities/activo.entity';
import { Pasivos } from './entities/pasivo.entity';
import { BalanceGeneral } from './entities/balancegeneral.entity';
import { PatrimonioNeto } from './entities/patrimonio.entity';
import { MargenUtilidadOperacional } from './entities/margenutilidadOperacional.entity';
import { CapitalTrabajoNetoOperativo } from './entities/capitaltrabajoNetoOperativo.entitty';
import { CorrienteRazon } from './entities/CorrienteRazon.entity';
import { MargenBrutoUtilidad } from './entities/margen-bruto-utilidad.entity';
import { MargenNetoUtilidad } from './entities/margen-neto-utilidad.entity';
import { RentabilidadCapital } from './entities/rentabilidad-capital.entity';
import { RotacionInventario } from './entities/rotacion-inventario.entity';
import { PruebaAcida } from './entities/prueba-acida.entity';
import { ActivosRotacion } from './entities/RotacionActivos.entity';
import { ActivosRentabilidad} from './entities/RentabilidadActivos.entity';


@Injectable()
export class ContabilidadService {

  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
    @InjectRepository(RazonContable)
    private razonContableRepo: Repository<RazonContable>,
    @InjectRepository(RazonContableDetalle)
    private razonContableDetalleRepo: Repository<RazonContableDetalle>,
    @InjectRepository(Pasivos)
    private pasivoRepository: Repository<Pasivos>,
    @InjectRepository(BalanceGeneral)
    private balancegeneralReposity: Repository<BalanceGeneral>,
    @InjectRepository(Activos)
    private activoRepository: Repository<Activos>,
    @InjectRepository(PatrimonioNeto)
    private patrimonioRepository: Repository<PatrimonioNeto>,
    @InjectRepository(MargenUtilidadOperacional)
    private margenutilidadRepository: Repository<MargenUtilidadOperacional>,
    @InjectRepository(CapitalTrabajoNetoOperativo)
    private CapitaltrabajoRepository: Repository<CapitalTrabajoNetoOperativo>,
    @InjectRepository(CorrienteRazon)
    private CorrienteRazonRepository: Repository<CorrienteRazon>,
    @InjectRepository(MargenBrutoUtilidad)
    private margenBrutoUtilidadRepo: Repository<MargenBrutoUtilidad>,
    @InjectRepository(MargenNetoUtilidad)
    private margenNetoUtilidadRepo: Repository<MargenNetoUtilidad>,
    @InjectRepository(RentabilidadCapital)
    private rentabilidadcapital: Repository<RentabilidadCapital>,
    @InjectRepository(RotacionInventario)
    private rotacionInvRepo: Repository<RotacionInventario>,
    @InjectRepository(PruebaAcida)
    private pruebaAcidaRepo: Repository<PruebaAcida>,
    @InjectRepository(ActivosRotacion)
    private ActivosRotacionRepo: Repository<ActivosRotacion>,
    @InjectRepository(ActivosRentabilidad)
    private ActivosRentabilidadRepo: Repository<ActivosRentabilidad>,
  ) {}

  public async primeraFuncion() {
    return 'Hola mundo';
  }

  async getUsuariosDB(){
    try {
      const usuarios = await this.empleadoRepository.find();
      return usuarios;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener usuarios de la base de datos: ${error}`
      );
    }
  }

  async getRazonesContablesDB(){
    try {
      const razonesContables = await this.razonContableRepo.find({select: ['ID_Razon', 'Nombre', 'Formula']});
      return razonesContables;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener las razones contables de la base de datos: ${error}`
      );
    }
  }

  async getRazonesContablesDetalleDB(qParams: {idRazonContable: number}){
    try {
      const razonesContablesDetalle =
        await this.razonContableDetalleRepo
          .findOne({where: {ID_Razon_Contable: qParams.idRazonContable}});
      return razonesContablesDetalle ?? {result: 'No se encontró el detalle de la razón contable'};
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener las razones contables de la base de datos: ${error}`
      );
    }
  }
  async getPasivoDB(){
    try {
      const pasivo = await this.pasivoRepository.find();
      return pasivo;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener pasivos de la base de datos: ${error}`
      );
    }
  }



  async getBalancegeneralDB(){
    try {
      const balancegeneral = await this.balancegeneralReposity.find();
      return balancegeneral;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener balance general de la base de datos: ${error}`
      );
    }
  }
  async getActivos(){
    try {
      const activo = await this.activoRepository.find();
      return activo;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener activos general de la base de datos: ${error}`
      );
    }
  }
  async getPatrimonioNetoDB(){
    try {
      const patrimonio = await this.patrimonioRepository.find();
      return patrimonio;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener patrimonio neto de la base de datos: ${error}`
      );
    }
  }
  async getMargenUtilidadOperacionalDB(){
    try {
      const margenutilidadnetaoperacional = await this.margenutilidadRepository.find();
      return margenutilidadnetaoperacional;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener margen de utilidad neto de la base de datos: ${error}`
      );
    }
  }
  async getCapitalTrabajoOperativoDB(){
    try {
      const capitaltrabajonetooperacional = await this.CapitaltrabajoRepository.find();
      return capitaltrabajonetooperacional;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener capital de trabajo operacional de la base de datos: ${error}`
      );
    }
  }



  async getRazonCorrienteDB(){
    try {
      const RazonCorriente = await this.CorrienteRazonRepository.find();
      return RazonCorriente;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener razon corriente de la base de datos: ${error}`
      );
    }
  }

  async getMargenBrutoUtilidadDB(){
    try {
      const margenBruto =
        await this.margenBrutoUtilidadRepo.find();
      return margenBruto ?? {result: 'No se encontró el detalle de la razón contable'};
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener el margen bruto de la base de datos: ${error}`
      );
    }
  }
  async getMargenNetoUtilidadDB(){
    try {
      const margenNeto =
        await this.margenNetoUtilidadRepo.find();
      return margenNeto ?? {result: 'No se encontró el detalle de la razón contable'};
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener el margen neto de la base de datos: ${error}`
      );
    }
  }
  async getRentabilidadCapitalDB(){
    try {
      const rentabilidadCapital =
        await this.rentabilidadcapital.find();
      return rentabilidadCapital ?? {result: 'No se encontró el detalle de la razón contable'};
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener el Rentabilidad Capital de la base de datos: ${error}`
      );
    }
  }

  async getRotacionInventarioDB(){
    try {
      const rotacionInventario =
        await this.rotacionInvRepo.find();
      return rotacionInventario ?? {result: 'No se encontró el detalle de la razón contable'};
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener la rotacion de inventario la base de datos: ${error}`
      );
    }
  }

  async getPruebaAcidaDB(){
    try {
      const pruebaAcida =
        await this.pruebaAcidaRepo.find();
      return pruebaAcida ?? {result: 'No se encontró el detalle de la razón contable'};
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener la prueba acida de la base de datos: ${error}`
      );
    }
  }

  async getActivosRotacionDB(){
    try {
      const activosrotacion =
        await this.ActivosRotacionRepo.find();
      return activosrotacion ?? {result: 'No se encontró el detalle de la razón contable'};
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener rotacion de activos de la base de datos: ${error}`
      );
    }
  }



  async getActivosRentabilidadDB(){
    try {
      const activosrentabilidad =
        await this.ActivosRentabilidadRepo.find();
      return activosrentabilidad ?? {result: 'No se encontró el detalle de la razón contable'};
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener la rentabilidad de activos de la base de datos: ${error}`
      );
    }
  }


}


