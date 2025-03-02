import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import { Routes, Route, Navigate } from "react-router-dom"; // Asegúrate de usar Routes y Navigate
import { useNavigate } from "react-router-dom"; // Importar useNavigate

import { Ingresar } from "./Ingresar";
import { Cola } from "./Cola";
import { CrearTicket } from "./CrearTicket";
import { Escritorio } from "./Escritorio";
import { UiContext } from "../context/UiContext";

const { Sider, Content } = Layout;

export const RouterPage = () => {
  const navigate = useNavigate(); // Crear el hook de navegación

  const {ocultarMenu} = useContext(UiContext); 

  const handleMenuClick = (e) => {
    // Cambiar la ruta cuando se hace clic en el menú
    if (e.key === "1") {
      navigate("/ingresar"); // Usar navigate para redirigir
    } else if (e.key === "2") {
      navigate("/cola");
    } else if (e.key === "3") {
      navigate("/crear");
    }
  };
  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "Ingresar",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "Cola de tickets",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "Crear ticket",
    },
  ];

  return (
    <>
      <Layout style={{ height: "100vh" }}>
        <Sider collapsedWidth="0" breakpoint="md" hidden={ocultarMenu}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={handleMenuClick} // Usar el manejador de clics
            items={items}
          />
        </Sider>

        <Layout className="site-layout">
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/ingresar" element={<Ingresar />} />
              <Route path="/cola" element={<Cola />} />
              <Route path="/crear" element={<CrearTicket />} />
              <Route path="/escritorio" element={<Escritorio />} />
              <Route path="/" element={<Navigate to="/ingresar" />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
