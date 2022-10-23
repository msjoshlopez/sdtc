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
    priceId: ["pln_p1-qy4m0wa4"],
  });

  const { userId, status, getToken, isLoggedIn, signOut } = useAuth();
  const checkout = useCheckout();

  return (
    <div className="App">
      <MemberstackProtected onUnauthorized={<SignInModal />}>
        <ProfileModal onCompleted={async (data) => console.log(data)} />
        <button
          onClick={async () =>
            checkout({
              priceId: "prc_year-g24o0wiz",
            })
          }
        >
          checkout
        </button>

        <button onClick={openPortal}>portal</button>
        <Login />
        <Signup />
      </MemberstackProtected>
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
    <button
      onClick={() =>
        openModal({
          type: "SIGNUP",
          planId: "pln_p1-qy4m0wa4",
          priceIds: "prc_year-g24o0wiz, prc_month-nn4n0wbt",
          onCompleted: (data) => {
            hideModal();
          },
        })
      }
    >
      Register23
    </button>
  );
}
function Dashboard() {
  const memberstack = useMemberstack();
  const [member, setMember] = React.useState(null);

  React.useEffect(() => {
    memberstack
      .getCurrentMember()
      .then(({ data: member }) => setMember(member));
  }, [memberstack]);

  if (!member) return <div>no member</div>;

  return <div>Welcome, {member.auth.email}</div>;
}

export default App;
