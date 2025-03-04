import { Server as SocketIOServer } from "socket.io";
import type { Socket } from "socket.io";
import TicketList from "./ticket-list";

class Sockets {
  private io: SocketIOServer;
  private ticketList: TicketList;

  constructor(io: SocketIOServer) {
    this.io = io;
    this.ticketList = new TicketList();
    this.socketEvents();
  }

  // Getter para obtener la lista de tickets
  get ticketListInstance(): TicketList {
    return this.ticketList;
  }

  private socketEvents(): void {
    // On connection
    this.io.on("connection", (socket: Socket) => {
      console.log("Cliente conectado con ID:", socket.id);

      socket.on("solicitar-ticket", (data: any, callback: (ticket: any) => void) => {
        const nuevoTicket = this.ticketList.createTicket(); 
        callback(nuevoTicket);
      });

      socket.on(
        "siguiente-ticket-trabajar",
        (
          { agente, escritorio }: { agente: string; escritorio: string },
          callback: (ticket: any) => void
        ) => {
          console.log(agente, escritorio);
          const suTicket = this.ticketList.assignTicket(agente, escritorio);
          callback(suTicket);

          this.io.emit("ticket-asignado", this.ticketList.ultimos13);
        }
      );
    });
  }
}

export default Sockets;
