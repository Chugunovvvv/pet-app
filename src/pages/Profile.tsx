import { FC } from "react";
import { useGetCurrentProfileQuery } from "../services/api/authApi";

const Profile: FC = () => {
  const { data: profile, isLoading, isError } = useGetCurrentProfileQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !profile) {
    return <div>You are not authorized. Please log in.</div>;
  }

  return (
    <div>
      <h1>Welcome, {profile.name}!</h1>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Role:</strong> {profile.role}
      </p>
      {profile.avatar && (
        <img
          src={profile.avatar}
          alt="User Avatar"
          style={{ width: 100, height: 100, borderRadius: "50%" }}
        />
      )}
    </div>
  );
};

export default Profile;
