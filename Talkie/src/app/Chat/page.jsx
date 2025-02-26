"use client";

import { useContext, useEffect, useState, useRef } from "react";
import { UserContext } from "@/context/UserContext";
import { getDocument } from "@/lib/db_functions";

// Mensajes basados en el idioma nativo del usuario
const nativeMessages = {
  inglés: "Welcome to Talkie Chat. I see you speak English.",
  español: "¡Bienvenido al chat de Talkie! Veo que hablas Español.",
  francés: "Bonjour! Bienvenue sur Talkie Chat. Vous parlez français.",
  alemán: "Hallo! Willkommen im Talkie Chat. Sie sprechen Deutsch.",
  ruso: "Привет! Добро пожаловать в Talkie Chat. Вы говорите по-русски.",
};

// Mensajes para el idioma que se quiere aprender (objetivo)
const targetMessages = {
  inglés: "Welcome to Talkie Chat. I see you want to learn English.",
  español: "¡Bienvenido al chat de Talkie! Veo que quieres aprender Español.",
  francés:
    "Bonjour! Bienvenue sur Talkie Chat. Vous voulez apprendre le français.",
  alemán: "Hallo! Willkommen bei Talkie Chat. Du möchtest Deutsch lernen?.",
  ruso: "Привет! Добро пожаловать в Talkie Chat. Вы хотите выучить русский язык.",
};

// Mensajes para el dialecto, según el idioma objetivo
const dialectMessages = {
  inglés: {
    americano:
      'You have chosen the "Americano" dialect. Let’s start your adventure!',
    britanico:
      'You have chosen the "Británico" dialect. Let’s start your adventure!',
    australiano:
      'You have chosen the "Australiano" dialect. Let’s start your adventure!',
    canadiense:
      'You have chosen the "Canadiense" dialect. Let’s start your adventure!',
    nuevozelandez:
      'You have chosen the "Nuevo Zelandez" dialect. Let’s start your adventure!',
  },
  español: {
    espana:
      'Has escogido el dialecto de "España". ¡Empecemos tu aventura lingüística!',
    mexico:
      'Has escogido el dialecto de "México". ¡Empecemos tu aventura lingüística!',
    argentina:
      'Has escogido el dialecto de "Argentina". ¡Empecemos tu aventura lingüística!',
    colombia:
      'Has escogido el dialecto de "Colombia". ¡Empecemos tu aventura lingüística!',
    chile:
      'Has escogido el dialecto de "Chile". ¡Empecemos tu aventura lingüística!',
  },
  francés: {
    francia:
      'Vous avez choisi le dialecte de "France". Commençons cette aventure!',
    quebec:
      'Vous avez choisi le dialecte de "Québec". Commençons cette aventure!',
    suiza:
      'Vous avez choisi le dialecte de "Suisse". Commençons cette aventure!',
    belgica:
      'Vous avez choisi le dialecte de "Belgique". Commençons cette aventure!',
    africafrancofona:
      'Vous avez choisi le dialecte de "Afrique Francophone". Commençons cette aventure!',
  },
  alemán: {
    alemania:
      'Du hast den Dialekt aus "Alemania" ausgewählt. Lass uns dieses Abenteuer starten!',
    austria:
      'Du hast den Dialekt aus "Austria" ausgewählt. Lass uns dieses Abenteuer starten!',
    suiza:
      'Du hast den Dialekt aus "Suiza" ausgewählt. Lass uns dieses Abenteuer starten!',
    liechenstein:
      'Du hast den Dialekt aus "Liechenstein" ausgewählt. Lass uns dieses Abenteuer starten!',
  },
  ruso: {
    rusia: 'Вы выбрали диалект "Rusia". Давайте начнем это приключение!',
    ucrania: 'Вы выбрали диалект "Ucrania". Давайте начнем это приключение!',
    bielorrusia:
      'Вы выбрали диалект "Bielorrusia". Давайте начнем это приключение!',
    kazajistan:
      'Вы выбрали диалект "Kazajistan". Давайте начнем это приключение!',
  },
};

function ChatIA() {
  const {
    email,
    nativeLanguage,
    language,
    setName,
    setNativeLanguage,
    setLanguage,
    setDialect,
  } = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [inputText, setInputText] = useState("");
  const menuFetchedRef = useRef(false);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userDoc = await getDocument("users", email);
        if (userDoc) {
          const nativeLang = userDoc.nativeLanguage || "inglés";
          const targetLang = userDoc.language || "inglés";
          const selectedDialect = userDoc.dialect || "americano";
  
          const nativeLangLower = nativeLang.toLowerCase();
          const targetLangLower = targetLang.toLowerCase();
          const selectedDialectLower = selectedDialect.toLowerCase();
  
          setName(userDoc.name || "User");
          setNativeLanguage(nativeLangLower);
          setLanguage(targetLangLower);
          setDialect(selectedDialectLower);
  
          const welcomeMsgNative =
            nativeMessages[nativeLangLower] || "Welcome!";
          const welcomeMsgTarget =
            targetMessages[targetLangLower] || "Welcome!";
          const welcomeMsgDialect =
            (dialectMessages[targetLangLower] &&
              dialectMessages[targetLangLower][selectedDialectLower]) ||
            "";
  
          const combinedMsg = `${welcomeMsgTarget} ${welcomeMsgDialect}`;
  
          // Agrega mensajes de bienvenida
          setMessages([
            { id: 1, sender: "ia", text: welcomeMsgNative },
            { id: 2, sender: "ia", text: combinedMsg },
          ]);
  
          if (!menuFetchedRef.current) {
            const menuResponse = await fetch(
              `http://localhost:5000/menu?nativeLanguage=${encodeURIComponent(nativeLangLower)}`
            );
            const menuResult = await menuResponse.json();
            if (menuResponse.ok && menuResult.menu) {
              // Verificar si el menú ya fue agregado
              setMessages((prev) => {
                const menuAlreadyExists = prev.some(
                  (msg) => msg.text === menuResult.menu
                );
                if (!menuAlreadyExists) {
                  return [
                    ...prev,
                    { id: prev.length + 1, sender: "ia", text: menuResult.menu },
                  ];
                }
                return prev;
              });
              menuFetchedRef.current = true;
            }
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUserData();
  }, [email]);

  // Función para consumir el endpoint /action
  const handleTranslate = async () => {
    if (!inputText.trim()) return;
    try {
      const response = await fetch("http://localhost:5000/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_input: inputText,
          current_language: language,
          nativeLanguage: nativeLanguage,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, sender: "user", text: inputText },
          { id: prevMessages.length + 2, sender: "ia", text: result.response },
        ]);
        if (result.new_language) {
          setLanguage(result.new_language);
        }
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Error calling chat action API", error);
    }
    setInputText("");
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold text-gray-700">
        Cargando...
      </div>
    );

  return (
    <div className="w-full max-w-3xl mx-auto my-8 p-6 bg-white rounded-xl shadow-2xl">
      <header className="flex items-center justify-between border-b pb-4 mb-4">
        <h2 className="text-3xl font-bold text-tblue-700">Chat IA</h2>
      </header>
      <div className="flex flex-col space-y-4 h-80 overflow-y-auto p-4 bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "ia" ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-xl max-w-xs break-words shadow-sm ${
                message.sender === "ia"
                  ? "bg-gray-200 text-tblue-900" // Se cambió de bg-tblue-100 a bg-tblue-200
                  : "bg-tblue-700 text-white"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="flex-grow border border-gray-300 rounded-l-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-tblue-500 transition-all"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleTranslate();
          }}
        />
        <button
          className="bg-tblue-700 text-white px-6 py-3 rounded-r-xl hover:bg-tblue-800 transition-colors"
          onClick={handleTranslate}
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default ChatIA;
