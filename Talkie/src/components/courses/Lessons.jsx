'use client'

import { useContext } from "react";
import Lesson from "./Lesson";
import { CoursesContext } from "@/context/CoursesContext";

function Lessons() {
  const {lessons} = useContext(CoursesContext)
  return (
    <div className="w-full">
      <h2 className="text-2xl font-semibold mb-4">Lecciones</h2>
      <div className="flex flex-col gap-4 lg:max-h-[80vh] lg:overflow-y-auto py-3 rounded-xl">
        {lessons.map((lesson, index) => (
          <Lesson lesson={lesson} key={index} preview={true} />
        ))}
      </div>
    </div>
  );
}

export default Lessons;
