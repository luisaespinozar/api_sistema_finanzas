import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'razon_corriente' })
export class CorrienteRazon {

  @PrimaryGeneratedColumn()
  id: number;


  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  activos: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  pasivos: number;
  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
  resultado: number;

}