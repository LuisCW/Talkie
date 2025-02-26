"use client";

import { useContext } from "react";
import { SectionContext } from "@/context/SectionContext";
import Button from "../general/Button";
import InfiniteScroller from "./InfiniteScroller";

function HeroSection() {
  const { setSignUpOpen, setLoginOpen } = useContext(SectionContext);
  return (
    <section className="w-full min-h-screen pt-20 px-4 flex flex-col items-center justify-center bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900">
          Aprende dialectos de forma{" "}
          <span className="text-tblue-700">rápida y divertida</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-fgray-600">
          El mejor contenido para que puedas aprender de manera divertida.
        </p>
      </div>
      <div className="mt-12 flex flex-col gap-6 w-full max-w-md md:max-w-lg lg:flex-row lg:justify-center">
        <Button
          text="Iniciar sesión"
          type="secondary"
          size="xl"
          func={() => setLoginOpen(true)}
          aditionalStyles="w-full lg:w-auto lg:px-16 lg:text-xl"
        />
        <Button
          text="Empezar ahora"
          type="primary"
          size="xl"
          func={() => setSignUpOpen(true)}
          aditionalStyles="w-full lg:w-auto lg:px-16 lg:text-xl"
        />
      </div>
      <div className="w-full mt-16 flex flex-col gap-8">
        <div className="overflow-hidden bg-white rounded-lg shadow p-4">
          <InfiniteScroller
            words={[
              "Guay",
              "Flipar",
              "Órale",
              "Laburo",
              "Quilombo",
              "Qué paja",
              "Ándale güey",
              "Está chido",
              "Parcero",
              "Chévere",
              "Cachar",
            ]}
            speed={20} // velocidad en ms para este scroller
          />
        </div>
        <div className="overflow-hidden bg-white rounded-lg shadow p-4">
          <InfiniteScroller
            words={[
              "Cool",
              "Dude",
              "Awesome",
              "Dope",
              "Mate",
              "Cheers",
              "Bloody",
              "Gobsmacked",
              "Arvo",
              "Loonie",
              "Sweet as",
            ]}
            direction="right"
            speed={40} // velocidad diferenciada
          />
        </div>
        <div className="overflow-hidden bg-white rounded-lg shadow p-4">
          <InfiniteScroller
            words={[
              "Ouf",
              "Fringues",
              "Kiffer",
              "Bosser",
              "Pote",
              "Allô",
              "Magasiner",
              "Tiguidou",
              "Serviette",
              "Natel",
              "Yafoy",
            ]}
            direction="right"
            speed={30} // otra velocidad para variar el efecto
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
