/* eslint-disable camelcase */
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ name: 'RotacionInventario' })
export class RotacionInventario {

  @PrimaryColumn({ type: 'int' })
  ID: number;

  @Column({ type: 'int', nullable: true })
  CostoDeVentas: number;

  @Column({ type: 'int', nullable: true })
  InventarioPromedio: number;

  @Column({ type: 'int', nullable: true })
  Resultado: number;

  // Aquí puedes añadir relaciones con otras tablas si es necesario.
}
