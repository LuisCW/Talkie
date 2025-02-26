"use client";

import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nativeLanguage, setNativeLanguage] = useState("");
  const [language, setLanguage] = useState("");
  const [dialect, setDialect] = useState("");
  const [profilePic, setProfilePic] = useState("");

  return (
    <UserContext.Provider
      value={{
        name,
        setName,
        email,
        setEmail,
        nativeLanguage,
        setNativeLanguage,
        language,
        setLanguage,
        profilePic,
        setProfilePic,
        dialect,
        setDialect,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
