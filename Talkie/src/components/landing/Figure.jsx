'use client'

function Figure({route, alt, title, desc, aditionalClasses}) {
  return (
    <figure className={`w-full rounded-xl bg-fgray-100 border-fgray-400 border-[2px] p-8 lg:px-16 ${aditionalClasses}`}>
        <h4 className='text-center font-semibold text-fblue-700 text-xl lg:text-3xl'>{title}</h4>
        <p className='text-sm mt-3 text-fgray-800 w-full text-center lg:text-xl'>{desc}</p>
        <img src={route} alt={alt} className='w-2/3 block mx-auto mt-10 lg:w-1/2 lg:mt-16'/>
    </figure>
  )
}

export default Figure