import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UserDataProvider } from "./context/UserDataProvider.tsx";
import App from "./App.tsx";

// import { Provider } from "react-redux";
import "./api/firebase_api.ts";

const app = document.getElementById("root")!;

ReactDOM.createRoot(app).render(
  <BrowserRouter>
    <React.StrictMode >
      <UserDataProvider>
       
          <App />
      
      </UserDataProvider>
    </React.StrictMode>
  </BrowserRouter>,
);
