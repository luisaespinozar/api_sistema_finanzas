/* eslint-disable camelcase */
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'PruebaAcida' })
export class PruebaAcida {

  @PrimaryColumn({ type: 'int' })
  ID: number;

  @Column({ type: 'int', nullable: true })
  ANIO: number;

  @Column({ type: 'int', nullable: true })
  ACTIVOS_CIRCULANTES: number;

  @Column({ type: 'int', nullable: true })
  INVENTARIO: number;

  @Column({ type: 'int', nullable: true })
  PASIVOS_CIRCULANTES: number;

  @Column({ type: 'int', nullable: true })
  RESULTADO: number;

  // Aquí puedes añadir relaciones con otras tablas si es necesario.
}
