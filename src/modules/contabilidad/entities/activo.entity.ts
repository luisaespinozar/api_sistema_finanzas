/* eslint-disable camelcase */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Activos' })
export class Activos {

  @PrimaryGeneratedColumn()
  ID: number;

  @Column({ length: 50 })
  NombreActivo: string;

  @Column({ length: 255 })
  Descripcion: string;

  @Column({ type: 'date' })
  FechaRegistro: Date;

  @Column({ type: 'decimal', precision: 18, scale: 2, default: 0.00 })
  monto: number;

}
