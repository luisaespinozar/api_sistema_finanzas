import { Controller, Get } from '@nestjs/common';
import { ContabilidadService } from './contabilidad.service';

@Controller('contabilidad')
export class ContabilidadController {
  constructor(private readonly contabilidadService: ContabilidadService) {}

  @Get()
  obtenerHolaMundo() {
    return this.contabilidadService.primeraFuncion();
  }

  @Get('/usuarios')
  async obtenerUsuariosDB() {
    return await this.contabilidadService.getUsuariosDB();
  }
}
