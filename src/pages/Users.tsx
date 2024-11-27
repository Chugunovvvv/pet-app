import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Alert,
  Avatar,
} from "@mui/material";
import Loader from "../components/Loader/Loader";
import { useGetUsersQuery } from "../services/api/userApi";

const Users = () => {
  // Делаем запрос на получение пользователей
  const { isLoading, data, isError, error } = useGetUsersQuery();

  if (isLoading) {
    // Если данные еще загружаются, показываем индикатор загрузки
    return <Loader />;
  }

  if (isError) {
    // Если произошла ошибка, показываем сообщение об ошибке
    return (
      <Box sx={{ padding: "20px" }}>
        <Alert severity="error">
          Ошибка загрузки данных: {error?.message || "Неизвестная ошибка"}
        </Alert>
      </Box>
    );
  }

  // Если данные успешно загружены, отображаем их
  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Список пользователей
      </Typography>

      {data && data.length > 0 ? (
        <List
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "10px",
          }}
        >
          {data.map((user) => (
            <ListItem
              key={user.id}
              sx={{
                width: "auto",
                border: "1px solid #e8e8e8",
                padding: "10px",
                borderRadius: "20px",
              }}
            >
              <Avatar
                alt={user.name}
                src={user.avatar || undefined}
                sx={{ marginRight: 2 }}
              >
                {/* Если аватар не задан, отображаем инициал из первого символа имени */}
                {!user.avatar && user.name.charAt(0)}
              </Avatar>
              <ListItemText
                primary={`${user.name} (${user.email})`}
                secondary={`Роль: ${user.role}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" sx={{ color: "gray" }}>
          Пользователи не найдены.
        </Typography>
      )}
    </Box>
  );
};

export default Users;
