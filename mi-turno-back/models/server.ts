import express, { Application, Request, Response } from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import path from "path";
import cors from "cors";
import Sockets from "./sockets";
 

class Server {
  private app: Application;
  private port: string | number;
  private server: http.Server;
  private io: typeof SocketIOServer.prototype;
  private sockets: Sockets;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    // Http server
    this.server = http.createServer(this.app);

    // Configuración de sockets
    this.io = new SocketIOServer(this.server, {
      cors: {
        origin: "*"
      },
    });

    // Inicializar sockets
    this.sockets = new Sockets(this.io);
  }

  private middlewares(): void {
    // Desplegar el directorio público
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    // CORS
    this.app.use(cors());

    // Endpoint para obtener los últimos tickets
    this.app.get("/ultimos", (req: Request, res: Response) => {
      res.json({
        ok: true,
        ultimos: this.sockets.ticketListInstance.ultimos13,
      });
    });
  }

  public execute(): void {
    // Inicializar Middlewares
    this.middlewares();

    // Inicializar Server
    this.server.listen(this.port, () => {
      console.log("Server corriendo en puerto:", this.port);
    });
  }
}

export default Server;
