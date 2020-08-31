import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_1280/https://www.computershala.com/wp-content/uploads/2019/12/eatsapp-web.jpg"
          alt=""
        />
        <h1>Sign in to Kapil's WhatsApp Clone</h1>
        <p>KapilWhatsAppClone.wwb.app</p>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
}

export default Login;
