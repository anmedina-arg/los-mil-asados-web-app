/*
** nombre       String
**  fecha        DateTime
**  sede         String
  usuarioId    Int
  usuario      Usuario       @relation(fields: [usuarioId], references: [id])
  asadoId      Int?
  asado        Asado?        @relation(fields: [asadoId], references: [id])
  participantes Participante[]
  gastos       Gasto[]
*/

export interface Asado {
  nombre: string;
  fecha: string;
  sede: string;
}
