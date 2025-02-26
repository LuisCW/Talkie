'use client'

import { SectionContext } from '@/context/SectionContext'
import { useContext } from 'react'
import SignUpForm from './SignUpForm'

function SignUp() {
  const {signUpOpen, setSignUpOpen} = useContext(SectionContext)
  return (
    <div className={`w-screen h-screen fixed items-center justify-center bg-black/30 transition-all top-0 left-0 z-40
    ${signUpOpen ? "flex" : "hidden"}`}
    onClick={e => setSignUpOpen(false)}>
        <SignUpForm/>
    </div>
  )
}

export default SignUp