import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import { useLoginMutation, UserLoginRequest } from "../../services/api/authApi";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Routes";

const initialFormData: UserLoginRequest = {
  email: "",
  password: "",
};

const SignInForm: FC = () => {
  const [login, { isError, isLoading, error }] = useLoginMutation();
  const [formData, setFormData] = useState<UserLoginRequest>(initialFormData);
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData).unwrap();
      navigate(routes.PROFILE);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        name="email"
        required
        fullWidth
        label="Email"
        type="email"
        value={formData.email}
        autoComplete="email"
        onChange={handleChange}
        autoFocus
      />
      <TextField
        margin="normal"
        name="password"
        required
        value={formData.password}
        onChange={handleChange}
        fullWidth
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      {isError && (
        <p style={{ color: "red", marginTop: "10px" }}>
          Login failed - {error.data.message}. Please try again.
        </p>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={isLoading}
        sx={{ marginTop: "7px", fontSize: "14px" }}
      >
        {isLoading ? "Logging in..." : "Sign In"}
      </Button>
    </form>
  );
};

export default SignInForm;
