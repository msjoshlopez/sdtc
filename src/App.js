import logo from "./logo.svg";
import "./App.css";
import {
  MemberstackProtected,
  SignInModal,
  useMemberstack,
} from "@memberstack/react";
import React from "react";
import { SignUpModal, ProfileModal } from "@memberstack/react";
import {
  useMemberstackModal,
  useCustomerPortal,
  useCheckout,
} from "@memberstack/react";
import { useAuth } from "@memberstack/react";

function App() {
  const openPortal = useCustomerPortal({
    priceId: ["prc_year-g24o0wiz"],
  });

  const { userId, status, getToken, isLoggedIn, signOut } = useAuth();
  const checkout = useCheckout();

  return (
    <div className="App">
      <Login />
      <Signup />
    </div>
  );
}
function Login() {
  const { openModal } = useMemberstackModal();

  return (
    <div
      onClick={() =>
        openModal({
          type: "LOGIN",
          // priceId: "prc_..."

          onCompleted: (data) => {},
          onError: (err) => {
            console.log(err);
          },
        })
      }
    >
      Log in
    </div>
  );
}
function Signup() {
  const { openModal, hideModal } = useMemberstackModal();

  return (
    <div>
      <button
        onClick={() =>
          openModal({
            type: "SIGNUP",
            planId: "pln_p1-qy4m0wa4",
            onCompleted: (data) => {
              console.log("complete", data);
            },
            onError: (err) => {
              console.log("error", err);
            },
          })
        }
      >
        Register
      </button>
      - should register under plan pln_p1-qy4m0wa4
    </div>
  );
}
export default App;
