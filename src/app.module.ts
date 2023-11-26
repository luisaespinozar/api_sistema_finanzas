import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContabilidadModule } from './modules/contabilidad/contabilidad.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    autoLoadEntities: true,
    type: 'mysql',
    host: '3.81.95.53',
    port: 3306,
    username: 'usap',
    password: 'Usap1234!',
    database: 'contableDB',
    // entities: [
    //   Empleado,
    //   RazonContable,
    //   RazonContableDetalle,
    //   MargenBrutoUtilidad
    // ],
    synchronize: true,
    //logging: true,
  }),
  ContabilidadModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
