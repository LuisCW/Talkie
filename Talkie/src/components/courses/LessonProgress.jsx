'use client'

import { RiPlayLargeFill, RiCheckboxCircleFill } from "react-icons/ri";

function LessonProgress({preview, lesson}) {
  return (
    <a className={`flex flex-row gap-4 px-2 py-3 rounded-lg w-full items-center border-2 ${lesson.completed ? "bg-fblue-700" : "bg-fgray-100 hover:border-fgray-400"} transition-all cursor-pointer`} href={lesson.url}>
        <RiPlayLargeFill className={`w-1/5 text-2xl ${lesson.completed ? "text-fgray-100" : "text-fblue-700"}`}/>
        <div className="w-3/5 flex flex-col justify-center py-1">
            <p className={`${lesson.completed ? "text-fgray-100" : "text-fblue-700"} text-base font-semibold`}>{lesson.title}</p>
            <p className={`${lesson.completed ? "text-fgray-100" : "text-fgray-800"} font-semibold text-xs opacity-75`}>{lesson.minutes} minutos</p>
        </div>
        <RiCheckboxCircleFill className={`w-1/5 text-2xl ${lesson.completed ? "text-fgray-100" : "text-transparent"}`}/>
    </a>
  )
}

export default LessonProgress