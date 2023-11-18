/* eslint-disable camelcase */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'BalanceGeneral' })
export class BalanceGeneral {

  @PrimaryColumn()
  ID_Balance: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0.00 })
  Total_Activos: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0.00 })
  Total_Pasivos: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, default: 0.00 })
  Patrimonio_Neto: number;
}
