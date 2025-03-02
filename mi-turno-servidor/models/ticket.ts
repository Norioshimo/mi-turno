import { v4 as uuidv4 } from "uuid";

class Ticket {
  public id: string;
  public number: number;
  public escritorio: string | null;
  public agente: string | null;

  constructor(number: number) {
    this.id = uuidv4();
    this.number = number;
    this.escritorio = null;
    this.agente = null;
  }
}

export default Ticket;