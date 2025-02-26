"use client";

import { useContext, useEffect, useState } from "react";
import LessonProgress from "./LessonProgress";
import { CoursesContext } from "@/context/CoursesContext";
import Button from "@/components/general/Button";
import { getDocument, updateDocument } from "@/lib/db_functions";
import { UserContext } from "@/context/UserContext";
import { useParams } from "next/navigation";

const handleCompleted = async (id, url, lessons, email, setIsLoading) => {
  setIsLoading(true);
  let coursesData = null;
  let currentCourse = null;
  let currentLesson = null;
  let length = 0;

  try {
    coursesData = await getDocument("courses", email);

    if (!coursesData) {
      throw new Error("No course data found.");
    }

    let courseLessons = {};

    Object.keys(coursesData).forEach((course, index) => {
      if (coursesData[course].url === id) {
        currentCourse = index;
        const updatedLessons = lessons.map((lesson, index) => {
          if (lesson.url === url) {
            currentLesson = index;
            length = coursesData[course].lessons.length;
            return {
              ...lesson,
              completed: true,
            };
          }
          return lesson;
        });
        coursesData[course].lessons = updatedLessons;
        courseLessons = updatedLessons;
      }
    });

    let completedLessons = 0;

    courseLessons.forEach((lesson) => {
      if (lesson.completed) completedLessons++;
    });

    Object.keys(coursesData).forEach((course) => {
      if (coursesData[course].url === id)
        coursesData[course].completedLessons = completedLessons;
    });

    // Validar que `currentLesson` tenga un valor válido.
    if (currentLesson === null) {
      throw new Error("Lesson not found in the course data.");
    }

    await updateDocument("courses", email, coursesData);
  } catch (error) {
    console.error("Error in handleCompleted:", error);
    alert(`An error occurred: ${error.message}`);
  } finally {
    setIsLoading(false);

    if (currentLesson === null) {
      console.error("currentLesson is not defined.");
      alert("Unable to complete the lesson. Please try again.");
      return;
    }

    if (currentLesson === length - 1) {
      location.href = "/dashboard";
    } else {
      location.href = `${
        coursesData[currentCourse].lessons[currentLesson + 1].url
      }`;
    }
  }
};

function LessonsProgress() {
  const [isLoading, setIsLoading] = useState(false);
  const [completedLessons, setCompletedLessons] = useState(0);
  const [precentage, setPrecentage] = useState(0);
  const [totalLessons, setTotalLessons] = useState(0);
  const { id, lesson } = useParams();
  const { lessons, url } = useContext(CoursesContext);
  const { email } = useContext(UserContext);

  useEffect(() => {
    let count = 0;
    lessons.forEach((lesson) => {
      if (lesson.completed) count++;
    });
    setCompletedLessons(count);
    setTotalLessons(lessons.length);
    setPrecentage(Math.round(count * 100 / lessons.length))
  }, [lessons]);

  return (
    <div className="w-full bg-fgray-200 p-5 rounded-xl lg:flex lg:flex-col lg:items-center lg:px-0">
      <h2 className="text-2xl font-semibold mb-4 text-center w-full text-fblue-700">
        Próximas lecciones
      </h2>
      <div className="w-full flex flex-col my-4 lg:w-4/5">
        <div className="w-full h-2 bg-fgray-100 rounded-full mb-1 lg:mb-2">
          <div className={`h-1 rounded-full w-[${precentage}%] bg-fblue-700`}></div>
        </div>
        <div className="flex items-center justify-between text-fgray-800 text-sm font-semibold">
          <p>{precentage}% completo</p>
          <p>
            {completedLessons}/{totalLessons} lecciones
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:max-h-[50vh] lg:overflow-y-auto py-3 rounded-xl lg:w-4/5">
        {lessons.map((lesson, index) => (
          <LessonProgress lesson={lesson} key={index} preview={true} />
        ))}
      </div>
      <Button
        text={`${isLoading ? "Cargando..." : "Marcar como completado"}`}
        type="primary"
        size="xl"
        disabled={isLoading}
        func={() => handleCompleted(id, url, lessons, email, setIsLoading)}
        aditionalStyles="w-full lg:w-4/5 lg:text-xl lg:mt-4 disabled:bg-opacity-50 disabled:cursor-default"
      />
    </div>
  );
}

export default LessonsProgress;
