import React, { useContext } from "react";
import { ProfileNameContext } from "../App";

function Profile() {
  const { profileName, setProfileName } = useContext(ProfileNameContext);
  return (
    <div>
      <input
        onChange={(event) => {
          setProfileName(event.target.value);
        }}
        placeholder="Enter a profile name"
      ></input>
      <h3>Profile Name : {profileName}</h3>
    </div>
  );
}

export default Profile;
