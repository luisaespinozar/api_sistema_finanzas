/* eslint-disable camelcase */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'MargenUtilidadOperacional' })
export class MargenUtilidadOperacional {

  @PrimaryGeneratedColumn()
  ID_MargenO: number;

  @Column({ length: 50 })
  Ingresos_Oper: string;

  @Column({ length: 50 })
  Ingreso_Cos: string;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0.00 })
  Monto_Oper: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0.00 })
  Monto_Cos: number;

  @Column({ type: 'decimal', precision: 10, scale: 0, default: 0.00 })
  Resultado: number;

}
