"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Preview from "./Preview";
import Lessons from "./Lessons";
import { useContext, useEffect } from "react";
import { CoursesContext } from "@/context/CoursesContext";

function CoursesIndex({ id }) {
  const {
    courses,
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
  } = useContext(CoursesContext);

  useEffect(() => {
    if (courses) {
      const prueba = courses.filter((course) => course.url === id);
      if (prueba.length) {
        const course = prueba[0];
        setName(course.name);
        setVideo(course.video);
        setSummary(course.summary);
        setLessons(course.lessons);
      }
    }
  }, [courses, id, setLessons, setName, setSummary, setVideo]);
  

  return (
    <section className="p-5">
      <div className="flex flex-col gap-8 lg:flex-row overflow-y-auto">
        <div className="w-full flex flex-col gap-8 lg:w-3/5">
          <div>
            <Breadcrumb>
              <BreadcrumbList className="text-base">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/course/${id}`}>{id}</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <Preview />
        </div>
        <div className="lg:w-2/5 lg:sticky lg:top-0">
          <Lessons />
        </div>
      </div>
    </section>
  );
}

export default CoursesIndex;
