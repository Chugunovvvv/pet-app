import { FC, useEffect, useState } from "react";
import { useGetCurrentProfileQuery } from "../services/api/authApi";
import {
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Typography,
  Box,
  IconButton,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import { useUpdateUserMutation } from "../services/api/userApi";
import Loader from "../components/Loader/Loader";

const Profile: FC = () => {
  const { data: profile, isLoading, refetch } = useGetCurrentProfileQuery();
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  // Локальное состояние для редактируемых полей
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: profile?.name || "",
    email: profile?.email || "",
  });
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    if (!profile) return;
    try {
      await updateUser({ id: profile.id, body: formData }).unwrap();
      setIsEditing(false);
      refetch();
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (!profile) return;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "16px",
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          width: "100%",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              src={profile.avatar || ""}
              alt={profile.name}
              sx={{ width: 64, height: 64 }}
            >
              {profile.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {profile.name}
            </Typography>
          }
          subheader={profile.role}
        />
        <CardContent>
          {/* Email */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            {isEditing ? (
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                size="small"
              />
            ) : (
              <Typography variant="body1">
                <strong>Email:</strong> {profile.email}
              </Typography>
            )}
            <IconButton onClick={() => setIsEditing(!isEditing)} sx={{ ml: 1 }}>
              <EditIcon />
            </IconButton>
          </Box>

          {/* Name */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            {isEditing ? (
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                size="small"
              />
            ) : (
              <Typography variant="body1">
                <strong>Name:</strong> {profile.name}
              </Typography>
            )}
            <IconButton onClick={() => setIsEditing(!isEditing)} sx={{ ml: 1 }}>
              <EditIcon />
            </IconButton>
          </Box>

          {/* Save/Cancel Buttons */}
          {isEditing && (
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                startIcon={<SaveIcon />}
                disabled={isUpdating}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setIsEditing(false)}
                startIcon={<CancelIcon />}
              >
                Cancel
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
