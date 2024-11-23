import { TextField } from "@mui/material";
import { FC } from "react";

const SignUpForm: FC = () => {
  return (
    <>
      <TextField margin="normal" required fullWidth label="Name" type="text" />
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
        autoComplete="new-password"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Avatar"
        type="text"
      />
    </>
  );
};

export default SignUpForm;
