/* eslint-disable camelcase */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'RentabilidadActivo' })
export class ActivosRentabilidad {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  utilidad_neta: number;
  
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  activos_totales: number;


  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  rentabilidad_activo: number;


}
