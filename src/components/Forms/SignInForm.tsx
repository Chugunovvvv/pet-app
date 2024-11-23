import { TextField } from "@mui/material";
import { FC } from "react";

const SignInForm: FC = () => {
  return (
    <>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email"
        type="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
        autoComplete="current-password"
      />
    </>
  );
};

export default SignInForm;
