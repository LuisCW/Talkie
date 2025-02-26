"use client";

import { createContext, useState } from "react";

export const CoursesContext = createContext();

export function CoursesContextProvider(props) {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("Loading");
  const [video, setVideo] = useState("");
  const [url, setUrl] = useState("");
  const [summary, setSummary] = useState("");
  const [completed, setCompleted] = useState(false);
  const [lessons, setLessons] = useState([]);

  return (
    <CoursesContext.Provider
      value={{
        courses,
        setCourses,
        name,
        setName,
        video,
        setVideo,
        url,
        setUrl,
        summary,
        setSummary,
        completed,
        setCompleted,
        lessons,
        setLessons,
      }}
    >
      {props.children}
    </CoursesContext.Provider>
  );
}
