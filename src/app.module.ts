import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContabilidadModule } from './modules/contabilidad/contabilidad.module';
import { Empleado } from './modules/contabilidad/entities/empleados.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '3.81.95.53',
    port: 3306,
    username: 'usap',
    password: 'Usap1234!',
    database: 'contableDB',
    entities: [Empleado],
    synchronize: true,
  }),
  ContabilidadModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
