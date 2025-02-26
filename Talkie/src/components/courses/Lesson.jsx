'use client'

function Lesson({preview, lesson}) {
  return (
    <a className={`flex flex-row gap-4 px-2 py-3 rounded-lg w-full ${lesson.completed ? "bg-fblue-700" : "bg-fgray-200"} cursor-pointer`} href={lesson.url}>
        <div className={`${preview ? "block" : "hidden"} w-2/5 flex items-center`}>
            <img src={lesson.img} alt="lesson image" className="w-full rounded-lg"/>
        </div>
        <div className="w-3/5">
            <p className={`${lesson.completed ? "text-fgray-100" : "text-fblue-700"} text-base font-semibold`}>{lesson.title}</p>
            <p className={`${lesson.completed ? "text-fgray-100" : "text-fgray-800"} font-semibold text-xs opacity-75 mb-4`}>{lesson.minutes} minutes</p>
            <p className={`${lesson.completed ? "text-fgray-100" : "text-fgray-800"} text-sm`}>{(lesson.completed) ? "Completo" : "Pendiente"}</p>
        </div>
    </a>
  )
}

export default Lesson