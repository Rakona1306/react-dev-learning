import Input from "../../atoms/Input-m/input-m";
import { useState, useId } from "react";

import Separator from "../../atoms/separator/separator";
import Label from "../../atoms/label/label-m";
import Button from "../../atoms/button/button-m";
import ButtonSubmit from "../../atoms/button/button-m-submit";
import Box from "../../atoms/box/box";

export default function Day4Exercise1() {
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
  const passwordHintId = useId();
 
  function handleClean() {
    console.log("precionado");
    setform({ firstName: "", lastName: "", email: "" });
  }
  return (
    <div>
      <Separator margin="0">Exercise 1 Day 4</Separator>
      <Label>Name</Label>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}>
        <Input
          value={form.firstName}
          passwordHintId={passwordHintId}
          onChange={(e) => {
            setform({ ...form, firstName: e.target.value });
          }}
        ></Input>
        <Label>LastName</Label>
        <Input
          value={form.lastName}
          passwordHintId={passwordHintId}
          onChange={(e) => {
            setform({ ...form, lastName: e.target.value });
          }}
        ></Input>
        <Label>Email</Label>
        <Input
          value={form.email}
          passwordHintId={passwordHintId}
          onChange={(e) => {
            setform({ ...form, email: e.target.value });
          }}
        ></Input>
        <ButtonSubmit>Enviar</ButtonSubmit>
        <Button onClick={handleClean}>limpiar</Button>
        {isSubmit && (
        <Box>
          {form.email} <br />
          {form.firstName} <br />
          {form.lastName} <br />
        </Box>
      )}

      </form>
    </div>
  );
}
