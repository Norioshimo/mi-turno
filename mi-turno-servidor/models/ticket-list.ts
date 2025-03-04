import TicketDTO from "../dto/ticketDTO";
import Ticket from "./ticket";



class TicketList {
  private ultimoNumero: number;
  private pendientes: TicketDTO[];
  private asignados: TicketDTO[];

  constructor() {
    this.ultimoNumero = 0;
    this.pendientes = [];
    this.asignados = [];
  }

  get siguienteNumero(): number {
    this.ultimoNumero++;
    return this.ultimoNumero;
  }

  // 3 que se verán en las tarjetas y 10 en historial
  get ultimos13(): TicketDTO[] {
    return this.asignados.slice(0, 13);
  }

  createTicket(): TicketDTO {
    const nuevoTicket = new TicketDTO(this.siguienteNumero);
    this.pendientes.push(nuevoTicket);

    console.log('Insertando nuevo registros: ', nuevoTicket);

    Ticket.create({ ...nuevoTicket });


    return nuevoTicket;
  }

  assignTicket(agente: string, escritorio: string): TicketDTO | null {
    if (this.pendientes.length === 0) {
      return null;
    }

    const siguienteTicket = this.pendientes.shift()!;
    siguienteTicket.agente = agente;
    siguienteTicket.escritorio = escritorio;

    console.log('Atendiendo: ', siguienteTicket);

    this.asignados.unshift(siguienteTicket);

    console.log('actualizar id: ' + siguienteTicket.id);

    setTimeout(async () => {
      const ti = await Ticket.update({
        fecha_atencion: new Date(),
        estado: 'A'//Atendiendo
      }, {
        where: {
          id: siguienteTicket.id
        }
      });
      if (ti) {
        console.log(`Ticket actualizado con esito: `, ti) 
      } else {
        console.log('Ticket no actualziado: ' + siguienteTicket.id);
      }

    }, 100)

    return siguienteTicket;
  }
}

export default TicketList;
