import { TextField } from "@material-ui/core";
import React from "react";

interface propsType {
  placeholder: string;
  value: string;
  handleChange: any;
}

export default function InputText({
  placeholder,
  value,
  handleChange,
}: propsType) {
  return (
    <TextField
      id='filled-password-input'
      label='Input Value'
      autoComplete='current-password'
      value={value}
      variant='filled'
      onChange={(e) => handleChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}
