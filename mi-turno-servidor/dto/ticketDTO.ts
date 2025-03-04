import { v4 as uuidv4 } from "uuid";

class TicketDTO {
  public id: string;
  public numero: number;
  public escritorio: string | null;
  public agente: string | null;

  constructor(number: number) {
    this.id = uuidv4();
    this.numero = number;
    this.escritorio = null;
    this.agente = null;
  }
}

export default TicketDTO;