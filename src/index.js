import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MemberstackProvider } from "@memberstack/react";
import { SignUpModal } from "@memberstack/react";
const config = { publicKey: "pk_26071989784f93ddd807" };
const root = ReactDOM.createRoot(document.getElementById("root"));

function Index() {
  return (
    <MemberstackProvider config={config}>
      <App />
    </MemberstackProvider>
  );
}
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
