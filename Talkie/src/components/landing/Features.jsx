"use client";

import Figure from "./Figure";

function Features() {
  return (
    <section className="pt-24 px-8 min-h-screen pb-20 md:px-16">
      <h2 className="text-center font-semibold text-3xl text-tblue-900 mb-12 md:text-4xl md:mb-20">
        ¿Por qué usar Talkie?
      </h2>
      <div className="flex flex-col gap-10 items-center md:flex-row md:flex-wrap md:justify-between">
        <div className="flex flex-col gap-10 md:flex-row">
          <Figure
            title="Aprende rápido"
            desc="Las lecciones de Talkie están hechas para que puedas terminarlas en un par de minutos."
            route="/images/features/feature_1.png"
            alt="Aprendes rápido"
          />
          <Figure
            title="Viaja tranquilo"
            desc="Ya no te tendrás que preocupar por no conocer los dialéctos extranjeros, así que podrás viajar tranquilo."
            route="/images/features/feature_2.png"
            alt="Viaja tranquilo"
          />
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
          <Figure
            title="Actividades divertidas"
            desc="Prueba tus conocimientos con increíbles actividades después de cada lección"
            route="/images/features/feature_4.png"
            alt="Actividades divertidas"
          />
          <Figure
            title="Diferentes formatos"
            desc="¿Aprendes mejor con videos y textos?, ¿O tal vez con actividades?. No importa, en talkie tienes todas!"
            route="/images/features/feature_3.png"
            alt="Diferentes formatos"
          />
        </div>
      </div>
    </section>
  );
}

export default Features;
