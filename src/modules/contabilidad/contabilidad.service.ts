import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Empleado } from './entities/empleados.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContabilidadService {

  constructor(
    @InjectRepository(Empleado)
    private empleadoRepository: Repository<Empleado>,
  ) {}

  public async primeraFuncion() {
    return 'Hola mundo';
  }

  async getUsuariosDB(){
    try {
      const usuarios = this.empleadoRepository.find();
      return usuarios;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error al obtener usuarios de la base de datos: ${error.message}`
      );
    }
  }
}
