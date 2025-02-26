'use client'

import { SectionContext } from '@/context/SectionContext'
import { useContext } from 'react'
import LoginForm from './LoginForm'

function Login() {
  const {loginOpen, setLoginOpen} = useContext(SectionContext)
  return (
    <div className={`w-screen h-screen fixed items-center justify-center bg-black/30 transition-all top-0 left-0 z-40
    ${loginOpen ? "flex" : "hidden"}`}
    onClick={e => setLoginOpen(false)}>
        <LoginForm/>
    </div>
  )
}

export default Login