import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className=" flex flex-col w-full h-screen justify-center items-center text-center bg-ravelBlue space-y-6">
        <img src={user.picture} alt={user.name} className=" rounded-full w-60" />
        <div className=" text-white font-semibold space-y-2 text-6xl">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        <JSONPretty data={user} className=" text-white font-bold text-lg" />
      </div>
    )
  );
};

export default Profile;
