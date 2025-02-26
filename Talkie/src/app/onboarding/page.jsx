"use client";

import { UserContextProvider, UserContext } from "@/context/UserContext";
import { useContext, useEffect, useState } from "react";
import Button from "@/components/general/Button";
import FormInput from "@/components/general/FormInput";
import FormSelection from "@/components/general/FormSelection";
import ReactCountryFlag from "react-country-flag";
import {
  addDocument,
  addDocumentWithCustomId,
  updateDocument,
} from "@/lib/db_functions";
import { isUserLoggedIn } from "@/lib/auth_functions";
import courses from "./courses";

const findUser = async () => {
  try {
    const res = await isUserLoggedIn();
    return res;
  } catch (error) {
    console.error("Error checking user login status:", error);
    return null;
  }
};

function PageContent() {
  const [section, setSection] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const {
    name,
    setName,
    email,
    setEmail,
    nativeLanguage,
    setNativeLanguage,
    language,
    setLanguage,
    dialect,
    setDialect,
  } = useContext(UserContext);

  useEffect(() => {
    const checkUser = async () => {
      const res = await findUser();
      if (!res) {
        window.location.href = "/";
        return;
      }
      setEmail(res.email);
    };

    checkUser();
  }, [setEmail]);

  const validateSection1 = () => {
    if (!name) {
      alert("El nombre es requerido");
      return false;
    }
    if (!language) {
      alert("Debes ingresar qué idioma quieres aprender");
      return false;
    }
    if (!dialect) {
      alert("Debes aprender un dialécto");
      return false;
    }
    if (!nativeLanguage) {
      alert("Debes ingresar qué idioma hablas");
      return false;
    }
    return true;
  };

  const handleSend = async (e) => {
    setIsLoading(true);

    try {
      const selectedCourse = courses[dialect];

      await updateDocument("users", email, {
        name,
        nativeLanguage,
        language,
        dialect,
      });

      await addDocumentWithCustomId("courses", selectedCourse, email);

      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Hubo un problema al procesar la información. Intenta de nuevo.");
    } finally {
      setIsLoading(true);
    }
    console.log("Enviando datos");
  };

  const toggleCourseSelection = (courseName) => {
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.includes(courseName)
        ? prevSelectedCourses.filter((course) => course !== courseName)
        : [...prevSelectedCourses, courseName]
    );
  };
  const dialectOptions = {
    "español": [
      { value: "espana", label: "España" },
      { value: "mexico", label: "México" },
      { value: "argentina", label: "Argentina" },
      { value: "colombia", label: "Colombia" },
      { value: "chile", label: "Chile" },
    ],
    "inglés": [
      { value: "americano", label: "Americano" },
      { value: "britanico", label: "Británico" },
      { value: "australiano", label: "Australiano" },
      { value: "canadiense", label: "Canadiense" },
      { value: "nuevozelandez", label: "Nuevo Zelandez" },
    ],
    "francés": [
      { value: "francia", label: "Francia" },
      { value: "quebec", label: "Quebec" },
      { value: "suiza", label: "Suiza" },
      { value: "belgica", label: "Bélgica" },
      { value: "africaFrancofona", label: "Africa Francofona" },
    ],
    "alemán": [
      { value: "alemania", label: "Alemania" },
      { value: "austria", label: "Austria" },
      { value: "suiza", label: "Suiza" },
      { value: "liechenstein", label: "Liechenstein" },
    ],
    "ruso": [
      { value: "rusia", label: "Rusia" },
      { value: "ucrania", label: "Ucrania" },
      { value: "bielorrusia", label: "Bielorrusia" },
      { value: "kazajistan", label: "Kazajistan" },
    ],
  };

  return (
    <div className="flex justify-center items-center w-screen min-h-screen bg-fgray-100">
      {section === 0 && (
        <section className="w-full h-full flex flex-col items-center justify-center p-5 md:w-3/4 lg:w-1/2">
          <h1 className="text-center text-3xl font-bold text-black lg:text-5xl">
            Bienvenido a <span className="text-tblue-900">Talkie</span>
          </h1>
          <h2 className="text-fgray-600 text-center mt-10 font-semibold md:text-xl">
            Antes de empezar, nos gustaría hacerte un par de preguntas
          </h2>
          <Button
            text="Continuar"
            type="primary"
            size="xl"
            func={() => setSection(1)}
            aditionalStyles="w-full lg:w-auto lg:text-xl lg:px-16 mt-14"
          />
        </section>
      )}
      {section === 1 && (
        <section className="w-full h-full flex flex-col items-center justify-center p-5 md:w-1/2 lg:w-2/3">
          <div className="w-full flex flex-col items-center pt-8 gap-6 lg:gap-10">
            <div className="w-full flex flex-col gap-6 lg:flex-row lg:gap-24">
              <FormInput
                labelText="Nombre"
                value={name}
                setValue={setName}
                placeholder=""
                type="text"
              />
              <FormSelection
                labelText="¿Qué idioma hablas?"
                value={nativeLanguage}
                setValue={setNativeLanguage}
                id="examDate"
                options={[
                  {
                    value: "inglés",
                    label: (
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode="US"
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title="Inglés"
                        />
                        Inglés
                      </span>
                    ),
                  },
                  {
                    value: "español",
                    label: (
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode="ES"
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title="Español"
                        />
                        Español
                      </span>
                    ),
                  },
                  {
                    value: "alemán",
                    label: (
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode="DE"
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title="Alemán"
                        />
                        Alemán
                      </span>
                    ),
                  },
                  {
                    value: "francés",
                    label: (
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode="FR"
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title="Francés"
                        />
                        Francés
                      </span>
                    ),
                  },
                  {
                    value: "ruso",
                    label: (
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode="RU"
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title="Ruso"
                        />
                        Ruso
                      </span>
                    ),
                  },
                ]}
              />
            </div>
            <div className="w-full flex flex-col gap-6 lg:flex-row lg:gap-24">
              <FormSelection
                labelText="¿Qué idioma quieres aprender?"
                value={language}
                setValue={setLanguage}
                id="school"
                options={[
                  {
                    value: "inglés",
                    label: (
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode="US"
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title="Inglés"
                        />
                        Inglés
                      </span>
                    ),
                  },
                  {
                    value: "español",
                    label: (
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode="ES"
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title="Español"
                        />
                        Español
                      </span>
                    ),
                  },
                  {
                    value: "alemán",
                    label: (
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode="DE"
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title="Alemán"
                        />
                        Alemán
                      </span>
                    ),
                  },
                  {
                    value: "francés",
                    label: (
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode="FR"
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title="Francés"
                        />
                        Francés
                      </span>
                    ),
                  },
                  {
                    value: "ruso",
                    label: (
                      <span className="flex items-center gap-2">
                        <ReactCountryFlag
                          countryCode="RU"
                          svg
                          style={{ width: "1.5em", height: "1.5em" }}
                          title="Ruso"
                        />
                        Ruso
                      </span>
                    ),
                  },
                ]}
              />
              <FormSelection
                labelText="¿Qué dialécto quieres aprender?"
                value={dialect}
                setValue={setDialect}
                id="exam"
                options={dialectOptions[language] || []}
              />
            </div>
            <div className="w-full flex flex-col gap-6 lg:flex-row-reverse lg:gap-10 lg:mt-6 lg:justify-start">
              <Button
                text={isLoading ? "Cargando..." : "Continuar"}
                type="primary"
                size="xl"
                func={handleSend}
                aditionalStyles="w-full lg:w-auto lg:px-16 disabled:bg-opacity-50 disabled:cursor-default"
                disabled={isLoading}
              />
              <Button
                text="Volver"
                type="secondary"
                size="xl"
                func={() => setSection(0)}
                aditionalStyles={`w-full py-3 mt-2 lg:mt-0 transition-all lg:w-auto lg:px-16 lg:py-2`}
              />
            </div>
          </div>
        </section>
      )}
      {section === 2 && (
        <section className="w-full h-full flex flex-col items-center justify-center p-5 md:w-1/2 lg:w-2/3">
          <h3 className="text-3xl font-semibold text-fgray-800 text-center">
            What do you want to learn?
          </h3>
          <div className="w-full flex mt-12 flex-col gap-6 lg:flex-row lg:flex-wrap lg:gap-6 lg:justify-between">
            {Object.keys(courses).map((courseName, index) => {
              const isSelected = selectedCourses.includes(courseName);
              return (
                <figure
                  key={index}
                  className={`w-full lg:block xl:w-1/3 py-4 px-8 rounded-lg border-2 ${
                    isSelected
                      ? "bg-fblue-700 text-fgray-200"
                      : "border-fgray-400"
                  } flex items-center justify-center cursor-pointer transition-all`}
                  onClick={() => toggleCourseSelection(courseName)}
                >
                  <p className="text-2xl font-semibold text-center">
                    {courses[courseName].name}
                  </p>
                </figure>
              );
            })}
          </div>

          <div className="w-full flex flex-col md:flex-row gap-6 mt-12 lg:flex-row-reverse">
            <Button
              text="Volver"
              type="secondary"
              size="xl"
              func={() => setSection(1)}
              aditionalStyles="w-full lg:w-auto lg:px-16"
            />
          </div>
        </section>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <UserContextProvider>
      <PageContent />
    </UserContextProvider>
  );
}
