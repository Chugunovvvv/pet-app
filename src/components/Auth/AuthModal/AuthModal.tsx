import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { FC, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import SignInForm from "../Forms/SignInForm";
import SignUpForm from "../Forms/SignUpForm";
interface Props {
  closeModal: () => void;
  open: boolean;
}

const AuthModal: FC<Props> = ({ closeModal, open }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const handleIsLogin = () => {
    setIsLogin(true);
  };

  return (
    <Dialog open={open} onClose={closeModal} fullWidth maxWidth="sm">
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {isLogin ? "Sign In" : "Sign Up"}

        <IconButton
          edge="end"
          color="inherit"
          onClick={closeModal}
          aria-label="close"
          size="large"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {/* Форма авторизации */}
        {isLogin ? (
          <SignInForm closeModal={closeModal} />
        ) : (
          <SignUpForm handleIsLogin={handleIsLogin} />
        )}
      </DialogContent>

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
    </Dialog>
  );
};

export default AuthModal;
