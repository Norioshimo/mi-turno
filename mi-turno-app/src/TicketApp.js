import React from "react";
import { RouterPage } from "./pages/RouterPage";
import { BrowserRouter as Router } from "react-router-dom";
import { UiProvider } from "./context/UiContext";
import { SocketProvider } from "./context/SocketContext";
export const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
        <Router>
          <RouterPage />
        </Router>
      </UiProvider>
    </SocketProvider>
  );
};
