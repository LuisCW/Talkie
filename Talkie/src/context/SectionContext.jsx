"use client";

import { createContext, useState } from "react";

export const SectionContext = createContext();

export function SectionContextProvider(props) {
  const [section, setSection] = useState("dashboard");
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <SectionContext.Provider
      value={{
        section,
        setSection,
        signUpOpen,
        setSignUpOpen,
        loginOpen,
        setLoginOpen,
      }}
    >
      {props.children}
    </SectionContext.Provider>
  );
}
