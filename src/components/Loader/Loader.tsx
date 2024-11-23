import { CircularProgress, Box } from "@mui/material";
import { FC } from "react";

const Loader: FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
