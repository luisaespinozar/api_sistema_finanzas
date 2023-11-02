/* eslint-disable camelcase */
import { Column, Entity, PrimaryColumn } from 'typeorm';
// import { BalanceGeneral } from './BalanceGeneral';
// import { EstadoFinanciero } from './EstadoFinanciero';

@Entity({ name: 'RazonContable' })
export class RazonContable {

  @PrimaryColumn({ type: 'int' })
  ID_Razon: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  Nombre: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  Formula: string;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  Valor: number;

  @Column({ type: 'int', nullable: true })
  ID_Balance: number;

  @Column({ type: 'int', nullable: true })
  ID_EstadoFinanciero: number;

// eslint-disable-next-line max-len
//   @ManyToOne(() => BalanceGeneral, balanceGeneral => balanceGeneral.razonesContables)
//   @JoinColumn({ name: 'ID_Balance' })
//   balanceGeneral: BalanceGeneral;

// eslint-disable-next-line max-len
//   @ManyToOne(() => EstadoFinanciero, estadoFinanciero => estadoFinanciero.razonesContables)
//   @JoinColumn({ name: 'ID_EstadoFinanciero' })
//   estadoFinanciero: EstadoFinanciero;
}
