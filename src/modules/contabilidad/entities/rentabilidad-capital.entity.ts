
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'RentabilidadCapital' })
export class RentabilidadCapital {

  @PrimaryColumn({ type: 'int' })
  ID: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  Ingresos: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  Costos: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  Gastos: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  Patrimonio: number;

  @Column({ type: 'decimal', precision: 15, scale: 2, nullable: true })
  Resultado: number;
}
