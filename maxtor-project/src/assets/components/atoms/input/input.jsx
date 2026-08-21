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
  const [isSubmit, setIsSubmit] = useState(false);
  function handleSubmit() {
    setIsSubmit(true);
    alert("enviado");
  }
  function handleClean() {
    setform({ firstName: "", lastName: "", email: "" });
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
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
        <button type="submit">guardar</button>
        <button type="button" onClick={handleClean}> limpiar </button>
      </form>
      {isSubmit && (
        <>
          {form.email} <br />
          {form.firstName} <br />
          {form.lastName} <br />
        </>
      )}
    </>
  );
}
