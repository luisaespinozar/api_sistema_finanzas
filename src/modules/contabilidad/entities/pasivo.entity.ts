/* eslint-disable camelcase */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Pasivos' })
export class Pasivos {

  @PrimaryGeneratedColumn()
  id_pasivo: number;

  @Column({ length: 50 })
  tipo_pasivo: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  monto: number;

  @Column({ type: 'date' })
  fecha_registro: Date;
}
