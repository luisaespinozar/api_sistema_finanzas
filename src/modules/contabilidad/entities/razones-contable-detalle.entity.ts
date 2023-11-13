/* eslint-disable camelcase */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { RazonContable } from './razones-contable.entity';

@Entity({ name: 'RazonContableDetalle' })
export class RazonContableDetalle {

  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  ID_Razon_Detalle: number;

  @Column({ type: 'int', nullable: true })
  ID_Razon_Contable: number;

  @Column({ type: 'decimal', nullable: true, comment: 'Capital neto del trabajo' })
  CNT: number;

  @Column({ type: 'decimal', nullable: true, comment: 'Indice de Solvencia' })
  IS: number;

  @Column({ type: 'decimal', nullable: true, comment: 'indice de la pueba de acido' })
  acido: number;

  @Column({ type: 'decimal', nullable: true, comment: 'Rotancion de Inventaio' })
  RI: number;

  @Column({ type: 'decimal', nullable: true, comment: 'Plazo Prmedio de Inventario' })
  PPI: number;

  @Column({ type: 'decimal', nullable: true, comment: 'Rotacion de Cuentas por Cobrar' })
  RCC: number;

  @Column({ type: 'decimal', nullable: true, comment: 'Plazo Promedio Cuentas por Cobrar' })
  PPCC: number;

  @Column({ type: 'decimal', nullable: true, comment: 'Rotacion Cuentas por Pagar' })
  RCP: number;

  @Column({ type: 'decimal', nullable: true, comment: 'PlazoPromedio cuenas por pgar' })
  PPCP: number;

  @ManyToOne(() => RazonContable)
  @JoinColumn({ name: 'ID_Razon_Contable' })
  razonContable: RazonContable;
}
