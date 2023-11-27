/* eslint-disable camelcase */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'RotacionActivos' })
export class ActivosRotacion {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  VentasNetas: number;
  
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  ActivosPromedio: number;


  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  RotacionActivos: number;


}
