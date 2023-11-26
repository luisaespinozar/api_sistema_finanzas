/* eslint-disable camelcase */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'PatrimonioNeto' })
export class PatrimonioNeto {

  @PrimaryGeneratedColumn()
  ID_Balance: number;

  @Column({ length: 50 })
  Tipo_Patrimonio: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  Monto: number;

  @Column({ type: 'date' })
  Fecha: Date;
}
