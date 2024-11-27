import { Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import {
  useRegisterMutation,
  UserRegisterRequest,
} from "../../services/api/userApi";
import { BASE_AVATAR_URL } from "../../utils/constans";

const initialFormData: UserRegisterRequest = {
  email: "",
  password: "",
  name: "",
  avatar: BASE_AVATAR_URL,
};

interface Props {
  handleIsLogin: () => void;
}
const SignUpForm: FC<Props> = ({ handleIsLogin }) => {
  const [register, { isLoading, isError, error }] = useRegisterMutation();

  const [formData, setFormData] = useState(initialFormData);
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
      await register(formData).unwrap();
      handleIsLogin();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Name"
        type="text"
        name="name"
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email"
        type="email"
        autoComplete="email"
        autoFocus
        name="email"
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
        autoComplete="new-password"
        name="password"
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        fullWidth
        label="Avatar"
        type="text"
        name="avatar"
        onChange={handleChange}
      />
      {isError && (
        <p style={{ color: "red", marginTop: "10px" }}>
          Register failed - {error.data.message}. Please try again.
        </p>
      )}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ marginTop: "7px", fontSize: "14px" }}
      >
        {isLoading ? "Registering..." : "Sing Up"}
      </Button>
    </form>
  );
};

export default SignUpForm;
