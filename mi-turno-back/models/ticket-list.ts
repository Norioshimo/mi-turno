import Ticket from "../models/ticket";

class TicketList {
  private ultimoNumero: number;
  private pendientes: Ticket[];
  private asignados: Ticket[];

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
  get ultimos13(): Ticket[] {
    return this.asignados.slice(0, 13);
  }

  createTicket(): Ticket {
    const nuevoTicket = new Ticket(this.siguienteNumero);
    this.pendientes.push(nuevoTicket);
    return nuevoTicket;
  }

  assignTicket(agente: string, escritorio: string): Ticket | null {
    if (this.pendientes.length === 0) {
      return null;
    }

    const siguienteTicket = this.pendientes.shift()!;
    siguienteTicket.agente = agente;
    siguienteTicket.escritorio = escritorio;

    this.asignados.unshift(siguienteTicket);

    return siguienteTicket;
  }
}

export default TicketList;
