/* eslint-disable camelcase */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Empleado } from './entities/empleados.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RazonContable } from './entities/razones-contable.entity';
import { RazonContableDetalle } from './entities/razones-contable-detalle.entity';
import { MargenBrutoUtilidad } from './entities/margen-bruto-utilidad.entity';
import { MargenNetoUtilidad } from './entities/margen-neto-utilidad.entity';
import { RentabilidadCapital } from './entities/rentabilidad-capital.entity';
import { RotacionInventario } from './entities/rotacion-inventario.entity';
import { PruebaAcida } from './entities/prueba-acida.entity';

@Injectable()
export class ContabilidadService {

  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
    @InjectRepository(RazonContable)
    private razonContableRepo: Repository<RazonContable>,
    @InjectRepository(RazonContableDetalle)
    private razonContableDetalleRepo: Repository<RazonContableDetalle>,
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
        `Error al obtener la preuba acida de la base de datos: ${error}`
      );
    }
  }
}


