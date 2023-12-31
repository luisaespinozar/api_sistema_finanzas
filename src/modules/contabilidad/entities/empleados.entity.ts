/* eslint-disable camelcase */
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({name: 'Empleado'})
export class Empleado {

  @PrimaryColumn({type: 'int'})
  ID_Empleado: number;

  @Column({ length: 50, nullable: true })
  Nombre: string;

  @Column({ length: 50, nullable: true })
  Apellido: string;

  @Column({ length: 15, nullable: true })
  DNI: string;

  @Column({ length: 100, nullable: true })
  Direccion: string;

  @Column({ length: 20, nullable: true })
  Telefono: string;

  @Column({ length: 50, nullable: true })
  Rol: string;
}