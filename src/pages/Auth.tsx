import { FC, useState } from "react";
import { Box, Button } from "@mui/material";

import SignInForm from "../components/Forms/SignInForm";
import SignUpForm from "../components/Forms/SignUpForm";

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const handleIsLogin = () => {
    setIsLogin(true);
  };
  return (
    <Box>
      {/* Форма авторизации */}
      {isLogin ? <SignInForm /> : <SignUpForm handleIsLogin={handleIsLogin} />}

      <Box sx={{ padding: "16px", textAlign: "center" }}>
        <Button
          sx={{ fontSize: "0.875rem" }}
          onClick={() => setIsLogin(!isLogin)}
          color="inherit"
        >
          {isLogin
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </Button>
      </Box>
    </Box>
  );
};

export default Auth;
