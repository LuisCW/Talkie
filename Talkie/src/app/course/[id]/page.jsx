"use client";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { UserContextProvider, UserContext } from "@/context/UserContext";
import {
  CoursesContextProvider,
  CoursesContext,
} from "@/context/CoursesContext";
import { isUserLoggedIn } from "@/lib/auth_functions";
import { useContext, useEffect, useState } from "react";
import { getDocument } from "@/lib/db_functions";
import { useParams } from "next/navigation";
import CoursesIndex from '@/components/courses/CoursesIndex'

const findUser = async () => {
  try {
    const res = await isUserLoggedIn();
    return res;
  } catch (error) {
    console.error("Error checking user login status:", error);
    return null;
  }
};

const getUser = async (email) => {
  try {
    const res = await getDocument("users", email);
    return res;
  } catch (err) {
    console.error("An error has ocurred: " + err);
    return null;
  }
};

const getCourses = async (email) => {
  try {
    const res = await getDocument("courses", email);
    return res;
  } catch (err) {
    console.error("An error has ocurred: " + err);
    return null;
  }
};

const getProgress = async (email) => {
  try {
    const res = await getDocument("progress", email);
    return res;
  } catch (err) {
    console.error("An error has ocurred: " + err);
    return null;
  }
};

function PageContent() {
  const {
    name,
    setName,
    email,
    setEmail,
    nativeLanguage,
    setNativeLanguage,
    language,
    setLanguage,
    dialect,
    setDialect,
  } = useContext(UserContext);
  const { setCourses } = useContext(CoursesContext);
  const [user, setUser] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    const checkUser = async () => {
      const res = await findUser();
      if (!res) {
        window.location.href = "/";
        return;
      }
      setEmail(res.email);
  
      const userData = await getUser(res.email);
      const coursesData = await getCourses(res.email);
  
      if (!coursesData || Object.keys(coursesData).length === 0) {
        window.location.href = "/onboarding";
        return;
      }
  
      setUser(userData);
      setName(userData.name);
      setNativeLanguage(userData.nativeLanguage);
      setLanguage(userData.language);
      setDialect(userData.dialect);
  
      const coursesContent = Object.keys(coursesData).map(
        (key) => coursesData[key]
      );
  
      setCourses(coursesContent);
    };
  
    checkUser();
  }, [setEmail, setCourses, setName, setNativeLanguage, setLanguage, setDialect]);
  

  // Evitar renderizar contenido si `user` aún es nulo
  if (user === null) {
    return <div>Cargando...</div>;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex-grow w-full">
          <CoursesIndex id={id}/>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default function Page() {
  return (
    <UserContextProvider>
      <CoursesContextProvider>
        <PageContent />
      </CoursesContextProvider>
    </UserContextProvider>
  );
}
