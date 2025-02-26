"use client";

import { CoursesContext } from "@/context/CoursesContext";
import { useContext } from "react";

function Preview() {
  const {name, lessons, video, summary} = useContext(CoursesContext)
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-w-16 aspect-h-9">
        <iframe
          className="rounded-xl outline-none"
          src={video}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h2 className="text-2xl font-semibold">{name}</h2>
      <p className="text-fgray-800 text-base text-justify">
        {summary}
      </p>
    </div>
  );
}

export default Preview;
