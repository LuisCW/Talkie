"use client";

import { CoursesContext } from "@/context/CoursesContext";
import LessonsProgress from "./LessonsProgress";
import { useContext, useEffect, useState } from "react";

function LessonSection({id, lesson}) {
    const [lessonTitle, setLessonTitle] = useState("")
    const [lessonVideo, setLessonVideo] = useState("")
    const [lessonSummary, setLessonSummary] = useState("")
  const { name, setLessons, video, summary, setSummary, setName, courses, setVideo } = useContext(CoursesContext);
  useEffect(
    (e) => {
      if (courses) {
        
        const prueba = courses.filter((course) => course.url === id);
        if (courses.length) {
            
            const course = prueba[0];
            const lessonContent = course.lessons.filter(el => el.url === `/course/${id}/${lesson}`)
            if(!lessonContent) return
            console.log(lessonContent[0]);
            
            setLessonTitle(lessonContent[0].title);
            setLessonVideo(lessonContent[0].video);
            setLessonSummary(lessonContent[0].summary);
            setLessons(course.lessons);
        }
      }
    },
    [courses, id, lesson, setLessons]
  );
  return (
    <section className="flex flex-col gap-8 lg:flex-row overflow-y-auto mt-10">
      <div className="w-full flex flex-col gap-8 lg:w-3/5">
      </div>
      <div className="lg:w-2/5 lg:sticky lg:top-0">
        <LessonsProgress />
      </div>
    </section>
  );
}

export default LessonSection;
