import logo from "./logo.svg";
import "./App.css";
import { useMemberstack } from "@memberstack/react";
import React from "react";
import { SignUpModal } from "@memberstack/react";
import { useMemberstackModal } from "@memberstack/react";
import { useAuth } from "@memberstack/react";

function App() {
  const { userId, status, getToken, isLoggedIn, signOut } = useAuth();
  return (
    <div className="App">
      sd
      <button
        onClick={() => {
          signOut();
          window.location.href = "/";
        }}
      >
        logout
      </button>
      <Dashboard />
      <Signup />
      <Login />
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
          planId: "pln_freeb-1dhn0w7x",
          // priceId: "prc_..."

          onCompleted: (data) => {
            debugger;
          },
          onError: (err) => {
            debugger;
          },
        })
      }
    >
      Log in
    </div>
  );
}
function Signup() {
  const { openModal } = useMemberstackModal();

  return (
    <div
      onClick={() =>
        openModal({
          type: "SIGNUP",
          planId: "pln_freeb-1dhn0w7x",
        })
      }
    >
      Sign up
    </div>
  );
}
function Dashboard() {
  const memberstack = useMemberstack();
  const [member, setMember] = React.useState(null);

  React.useEffect(() => {
    memberstack
      .getCurrentMember()
      .then(({ data: member }) => setMember(member));
  }, []);

  if (!member) return <div>no member</div>;

  return <div>Welcome, {member.auth.email}</div>;
}

export default App;
