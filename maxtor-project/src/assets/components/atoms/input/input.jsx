import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useId } from "react";
export default function Input() {
  const passwordHintId = useId();
  const [form, setform] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("enviado");
      }}
    >
      <label>Name </label>
      <input
        aria-describedby={passwordHintId}
        value={form.firstName}
        onChange={(e) => {
          setform({ ...form, firstName: e.target.value });
        }}
      ></input>
      <br />
      <label>lastName </label>
      <input
        aria-describedby={passwordHintId}
        value={form.lastName}
        onChange={(e) => {
          setform({ ...form, lastName: e.target.value });
        }}
      ></input>
      <br />
      <label>email </label>
      <input
        aria-describedby={passwordHintId}
        value={form.email}
        onChange={(e) => {
          setform({ ...form, email: e.target.value });
        }}
      ></input>
      <button>guardar</button>
    </form>
  );
}
