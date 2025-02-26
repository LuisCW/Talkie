"use client";

import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { UserContextProvider, UserContext } from "@/context/UserContext";
import {
  CoursesContextProvider,
  CoursesContext,
} from "@/context/CoursesContext";
import Courses from "@/components/dashboard/Courses";
import ChatIA from "@/app/Chat/page"; // Asegúrate de que la ruta sea la correcta para importar ChatIA
import { isUserLoggedIn } from "@/lib/auth_functions";
import { getDocument } from "@/lib/db_functions";
import { Skeleton } from "@/components/ui/skeleton";

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
    console.error("An error has occurred: " + err);
    return null;
  }
};

const getCourses = async (email) => {
  try {
    const res = await getDocument("courses", email);
    return res;
  } catch (err) {
    console.error("An error has occurred: " + err);
    return null;
  }
};

function PageContent() {
  const router = useRouter();
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
  const [isLoading, setIsLoading] = useState(true);
  // Estado para controlar la visualización del chat integrado
  const [showChat, setShowChat] = useState(false);

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

      setName(userData.name);
      setNativeLanguage(userData.nativeLanguage);
      setLanguage(userData.language);
      setDialect(userData.dialect);

      const coursesContent = Object.keys(coursesData).map(
        (key) => coursesData[key]
      );

      setCourses(coursesContent);
      setIsLoading(false);
    };

    checkUser();
  }, [
    setEmail,
    setCourses,
    setDialect,
    setLanguage,
    setName,
    setNativeLanguage,
  ]);

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex-grow w-full relative">
          {isLoading ? (
            <div className="px-4">
              <div className="w-full mt-4">
                <div className="h-48 rounded-xl w-full mt-20 md:mt-5 bg-neutral-150">
                  <Skeleton className="bg-neutral-300 animate-pulse w-full h-full rounded-xl" />
                </div>
                <div className="h-10 w-48 my-8 bg-neutral-150">
                  <Skeleton className="bg-neutral-300 animate-pulse w-full h-full rounded-md" />
                </div>
                <div className="w-full flex flex-wrap gap-5 pb-16 lg:pb-5">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="border-2 p-5 rounded-lg cursor-pointer w-full md:w-[48%] lg:w-[calc(25%-1.25rem)] bg-fgray-100"
                    >
                      <div className="mb-8">
                        <Skeleton className="w-16 h-16 md:w-12 md:h-12 rounded-full bg-fgray-200" />
                      </div>
                      <Skeleton className="h-6 w-3/4 bg-fgray-200 mb-4" />
                      <div className="w-full h-1 rounded-full bg-fgray-200 mt-4 mb-2"></div>
                      <Skeleton className="h-4 w-1/2 bg-fgray-200" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear md:hidden">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                </div>
              </header>
              <div className="flex flex-col gap-4 p-4 pt-0">
                <div className="rounded-xl w-full mt-5 bg-fblue-700 flex flex-col md:flex-row md:gap-6 py-6 items-center lg:px-8 lg:gap-12">
                  <img
                    src="logo/logo_talkie.png"
                    alt="Fotito feliz :D"
                    className="w-[30%] md:w-28 mb-6 md:mb-0 md:ml-6 lg:ml-0"
                  />
                  <div>
                    <h3 className="text-3xl font-semibold text-fgray-100 lg:text-4xl">
                      Tu puedes!!
                    </h3>
                    <p className="text-xl font-semibold text-fgray-200 mt-2">
                      Yo creo en ti :D...
                    </p>
                  </div>
                </div>
              </div>
              {/* Botón para mostrar u ocultar el chat */}
              <div className="flex justify-center mt-10 mb-8">
                {!showChat ? (
                  <button
                    onClick={() => setShowChat(true)}
                    className="w-full max-w-md bg-tblue-700 text-white font-bold text-2xl py-4 rounded-lg shadow-xl hover:bg-tblue-800 transition-all"
                  >
                    Aprende con IA
                  </button>
                ) : (
                  <button
                    onClick={() => setShowChat(false)}
                    className="w-full max-w-md bg-tblue-700 text-white font-bold text-2xl py-4 rounded-lg shadow-xl hover:bg-tblue-800 transition-all"
                  >
                    Ocultar chat
                  </button>
                )}
              </div>
              {/* Desplegar el ChatIA si showChat es verdadero */}
              {showChat && (
                <div className="mb-8">
                  <ChatIA />
                </div>
              )}
              <Courses />
            </>
          )}
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
