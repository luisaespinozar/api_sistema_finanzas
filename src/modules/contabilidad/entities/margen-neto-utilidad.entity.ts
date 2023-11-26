/* eslint-disable camelcase */
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'MargenNetoUtilidad' })
export class MargenNetoUtilidad {

  @PrimaryColumn({ type: 'int' })
  ID: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  Ingresos: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  Costos: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  Gastos: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  Resultado: number;

  // Aquí puedes añadir relaciones con otras tablas si es necesario.
}
