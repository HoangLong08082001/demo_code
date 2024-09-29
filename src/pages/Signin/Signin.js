import React, { useState } from "react";
import "./Signin.css";
export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(false);
  const submit = () => {};
  const Descrease = () => {
    if (number <= 0) {
      setNumber(0);
    } else {
      setNumber(number - 1);
    }
  };
  const Increase = () => {
    setNumber(number + 1);
  };
  return (
    <div className="wrapper">
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
          console.log(e.target.value);
        }}
        placeholder="Enter username"
      />
      <input
        type={show === true ? "text" : "password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          console.log(e.target.value);
        }}
        placeholder="Enter password"
      />
      <p className="hide-show-btn" onClick={() => setShow(!show)}>
        {show === true ? "hidden" : "show"}
      </p>
      <button onClick={submit}>Sign in</button>

      <div className="price">
        <button onClick={() => Descrease()}>-</button>
        <p className="number">{number}</p>
        <button onClick={() => Increase()}>+</button>
      </div>
    </div>
  );
}
