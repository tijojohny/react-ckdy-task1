import React, { useState, useEffect } from "react";
import imgs from "./images/imagesama.png";
import {
  LinkedinFilled,
  FacebookOutlined,
  GooglePlusCircleFilled,
  UserOutlined,
  MailOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

function Singup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validationMessage, setValidationMessage] = useState(false);
  const [errMail, setErrEmail] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [submitOpen, setIsSubmitOpen] = useState(false);

  const onName = (name) => {
    console.log("Name", name);
    if (!name) {
      setValidationMessage("Name is required.");
    } else if (name?.length < 4) {
      setValidationMessage("Name must be at least 4 characters long.");
    } else if (name?.length > 20) {
      setValidationMessage("Name must be at most 20 characters long.");
    } else {
      setValidationMessage("");
      setName(name);
    }
  };
  const emailCheck = (e) => {
    const mail = e.target.value;
    if (/\S+@\S+\.\S+/.test(mail) || mail === "") {
      setErrEmail(false);
      setEmail(mail);
    } else {
      setErrEmail(true);
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    if (/[A-Z]/.test(newPassword)) {
      setIsValid(false);
      setPassword(newPassword);
    } else {
      setIsValid(true);
    }
    if (/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(newPassword)) {
      setPassword(newPassword);
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    if (/\d/.test(newPassword)) {
      setPassword(newPassword);
      setIsValid(false);
    } else {
      setIsValid(true);
      setIsSubmitOpen(false);
    }
  };

  useEffect(() => {
    console.log("11", name, password, email);
    if (name && password && email) {
      setIsSubmitOpen(true);
    } else {
      setIsSubmitOpen(false);
    }
  }, [name, password, email]);

  const onSubmit = () => {
    const formData = {
      name,
      email,
      password,
    };
    console.log("Form Data:", formData);
  };

  return (
    <div className="">
      <div className="parent">
        <div className="welcome-logo">
          <div className="imgess">
            <img src={imgs} alt="Diperlla" width={"100px"} height={"60px"} />{" "}
            <p>Diperlla</p>
          </div>{" "}
          <div className="welcome">
            <h1>Welcome Back!</h1>
            <h3>
              To keep connected with us please login with your personal info
            </h3>
            <button className="button-change">SIGH IN</button>
          </div>
        </div>
        <div className="second">
          <h1> Create Account</h1>
          <LinkedinFilled className="large-icon" />
          <FacebookOutlined className="large-icon" />
          <GooglePlusCircleFilled className="large-icon" />
          <h3> Or use your email for registraction</h3>
          <div>
            <label htmlFor="Name" className="inputBox">
              {/* <src /> */}
              <Input
                className="input-button"
                size="large"
                id="Name"
                name="Name"
                placeholder="Name"
                prefix={<UserOutlined />}
                onChange={(e) => onName(e.target.value)}
                //   value={name}
              />
            </label>
            {validationMessage && <div>{validationMessage}</div>}
            <br />
            <label htmlFor="Email" className="inputBox">
              {/* <src /> */}
              <Input
                className="input-button"
                size="large"
                id="Email"
                prefix={<MailOutlined />}
                name="Email"
                placeholder="Email"
                onChange={(e) => emailCheck(e)}
                //   value={email}
              />
            </label>
            {errMail && <div>Invalid Email ID </div>}
            <br />
            <label htmlFor="Password" className="inputBox">
              {/* <src /> */}
              <Input
                className="input-button"
                prefix={<LockOutlined />}
                size="large"
                id="Password"
                name="Password"
                placeholder="Password"
                onChange={(e) => handlePasswordChange(e)}
                //   value={password}
              />
            </label>
            {isValid && (
              <p>
                Password is invalid. Make sure it has at least one uppercase
                letter, one symbol, and one number.
              </p>
            )}
            <br />{" "}
            {submitOpen ? (
              <button className="sinup-button" onClick={onSubmit}>
                Submit
              </button>
            ) : (
              <button className="sinup-button-disabled" disabled>
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Singup;
