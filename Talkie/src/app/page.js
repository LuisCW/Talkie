'use client'

import Header from '../components/header/Header'
import HeroSection from '../components/landing/HeroSection'
import Features from '../components/landing/Features'
import CTA from '../components/landing/CTA'
import Footer from '../components/footer/Footer'
import SignUp from '../components/landing/SignUp'
import Login from '../components/landing/Login'

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Features/>
      <CTA/>
      <Footer/>
      <SignUp/>
      <Login/>
    </div>
  );
}
