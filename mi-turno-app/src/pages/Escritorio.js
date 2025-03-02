import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Typography } from "antd";
import React, { useContext, useState } from "react";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUsuarioStorage } from "../helpers/getUsuarioStorage";
import { useNavigate } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
const { Title, Text } = Typography;

export const Escritorio = () => {
  const [usuario] = useState(getUsuarioStorage());
  const { socket } = useContext(SocketContext);
  const [ticket, setTicket] = useState(null);

  const navigate = useNavigate(); // Crear el hook de navegación

  useHideMenu(false);

  const salir = () => {
    console.log("Salir");
    localStorage.clear();
    navigate("/ingresar", { replace: true });
  };

  const siguienteTicket = () => {
    console.log("Siguiente ticket", usuario);

    socket.emit("siguiente-ticket-trabajar", usuario, (ticket) => {
      setTicket(ticket);
    });
  };

  if (!usuario.agente && !usuario.escritorio) {
    navigate("/ingresar");
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{usuario.agente}</Title>
          <Text>Usted está trabajando en el escritorio: </Text>
          <Text type="success"> {usuario.escritorio}</Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={salir}>
            <CloseCircleOutlined />
            Salir
          </Button>
        </Col>
      </Row>

      <Divider />

      {ticket && (
        <Row>
          <Col>
            <Text>Está atendiendo el ticket número: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}
      <Row>
        <Col offset={18} span={6} align="right">
          <Button shape="round" type="primary" onClick={siguienteTicket}>
            <RightOutlined />
            Sguiente
          </Button>
        </Col>
      </Row>
    </>
  );
};
