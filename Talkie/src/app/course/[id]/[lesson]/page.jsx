"use client";

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { UserContextProvider, UserContext } from "@/context/UserContext";
import {
  CoursesContextProvider,
  CoursesContext,
} from "@/context/CoursesContext";
import { isUserLoggedIn } from "@/lib/auth_functions";
import { useContext, useEffect, useState } from "react";
import { getDocument } from "@/lib/db_functions";
import { useParams } from "next/navigation";
import LessonSection from "@/components/courses/LessonSection";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
  const { setCourses, setUrl } = useContext(CoursesContext);
  const [user, setUser] = useState(null);
  const { id, lesson } = useParams();

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
    return <div>Loading...</div>;
  }

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-grow w-full">
          <div className="w-full p-5">
            <Breadcrumb>
              <BreadcrumbList className="text-base">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/course/${id}`}>
                    {id.replace("-", " ")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/course/${id}/${lesson}`}>
                    {lesson.replace("-", " ")}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <LessonSection id={id} lesson={lesson} />
          </div>
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
