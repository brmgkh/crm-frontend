import React, { useState } from "react";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password-reset/PasswordReset.comp";
import "./entry.style.css";
export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frmLoad, setFrmLoad] = useState("login");
  const handelChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("fill up all the form!");
    }
    //todo call the api to submit the form
    console.log(`email :${email} / pass : ${password} `);
  };
  const handelResetSubmit = (e) => {
    e.preventDefault();
    if (!email ) {
      return alert("Please enter the email!");
    }
    //todo call the api to submit the form
    console.log(`email :${email}`);
  };

  const frmSwitcher = (frmtype) => {
    setFrmLoad(frmtype);
  };
  return (
    <div className="entry-page bg-info">
      {frmLoad === "login" && (
        <LoginForm
          handelChange={handelChange}
          email={email}
          pass={password}
          handelSubmit={handelSubmit}
          frmSwitcher={frmSwitcher}
        />
      )}
      {frmLoad === "reset" && (
        <ResetPassword
          handelChange={handelChange}
          email={email}
          handelResetSubmit={handelResetSubmit}
          frmSwitcher={frmSwitcher}
        />
      )}
    </div>
  );
};
