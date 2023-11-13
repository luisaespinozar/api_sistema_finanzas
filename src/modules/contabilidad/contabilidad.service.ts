/* eslint-disable camelcase */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Empleado } from './entities/empleados.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RazonContable } from './entities/razones-contable.entity';
import { RazonContableDetalle } from './entities/razones-contable-detalle.entity';

@Injectable()
export class ContabilidadService {

  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
    @InjectRepository(RazonContable)
    private razonContableRepo: Repository<RazonContable>,
    @InjectRepository(RazonContableDetalle)
    private razonContableDetalleRepo: Repository<RazonContableDetalle>,
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
      console.log('idRazonContable: ', qParams.idRazonContable);
      console.log('idRazonContable 2: ', typeof qParams);

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
}
