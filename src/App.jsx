import React, { createContext, useState } from "react";
import Profile from "./Components/Profile";

const ProfileNameContext = createContext();

function App() {
  const [profileName, setProfileName] = useState("");
  return (
    <ProfileNameContext.Provider value={{ profileName, setProfileName }}>
      <Profile />
    </ProfileNameContext.Provider>
  );
}

export { App as default, ProfileNameContext };
