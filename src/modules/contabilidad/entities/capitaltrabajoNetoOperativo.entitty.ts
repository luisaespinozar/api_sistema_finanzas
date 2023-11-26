/* eslint-disable camelcase */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CapitalTrabajoNetoOperativo' })
export class CapitalTrabajoNetoOperativo {

  @PrimaryGeneratedColumn()
  ID_Capital: number;

  @Column({ length: 50 })
  ID_Act: string;

  @Column({ length: 50 })
  ID_Pas: string;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0.00 })
  Monto_Pas: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0.00 })
  Monto_Act	: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0.00 })
  Resultado: number;

}
