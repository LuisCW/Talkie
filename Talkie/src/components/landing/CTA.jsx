'use client'

import { SectionContext } from '@/context/SectionContext';
import Button from '../general/Button'
import { useContext } from 'react';
function CTA() {
  const { setSignUpOpen } = useContext(SectionContext);
  return (
    <section className="px-8 pb-20 md:px-16">
        <div className="bg-fgray-100 border-2 border-fgray-400 rounded-xl min-h-20 p-8 text-black md:px-16 lg:py-12">
            <h3 className="text-center font-semibold text-2xl md:text-3xl lg:mx-auto lg:text-4xl lg:w-4/5 text-tblue-900">Empieza ahora a usar Talkie</h3>
            <p className="mt-6 text-center text-sm md:text-lg lg:text-xl lg:w-4/5 lg:mx-auto">Crea tu cuenta y no vuelvas a sufrir por no entender las expresiones de un dialecto que no es el tuyo</p>
            <div className='mt-12 flex items-center w-full justify-between lg:w-4/5 lg:mx-auto'>
              <div className='h-1 w-full bg-black hidden md:flex md:w-1/5'/>
                <Button text="Crear cuenta" func={e => setSignUpOpen(true)} aditionalStyles="border-black text-black lg:text-xl lg:shrink-0 lg:mx-12 w-full md:w-auto"/>
              <div className='h-1 w-full bg-black hidden md:flex md:w-1/5'/>
            </div>
        </div>
    </section>
  )
}

export default CTA
