import numpy as np
import re
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Embedding, LSTM

# ----- Datos Iniciales -----
# Las claves se asumen en español (en minúsculas) y las traducciones se almacenan también en minúsculas.
data = {
    'hola': {
        'english': {'hello': 3},
        'french': {'salut': 5},
        'german': {'hallo': 2},
        'russian': {'привет': 4}
    },
    'viajar': {
        'english': {'travel': 2, 'trip': 1, 'journey': 1},
        'french': {'voyager': 4},
        'german': {'reisen': 3},
        'russian': {'путешествовать': 3}
    },
    'adios': {
        'english': {'goodbye': 3},
        'french': {'au revoir': 2},
        'german': {'auf wiedersehen': 4},
        'russian': {'до свидания': 1}
    }
}

languages = ['english', 'french', 'german', 'russian']
vocab = set()
for translations in data.values():
    for trans_dict in translations.values():
        vocab.update(trans_dict.keys())
vocab.update(data.keys())
vocab = list(vocab)

word_to_index = {word: i for i, word in enumerate(vocab)}
index_to_word = {i: word for word, i in word_to_index.items()}

# ----- Preparación de Datos -----
def prepare_data(data):
    X_train = []
    y_train = []
    for word, translations in data.items():
        for lang, translation_dict in translations.items():
            for translation in translation_dict:
                X_train.append(word_to_index[word])
                y_train.append(word_to_index[translation])
    X_train = np.array(X_train)
    y_train = np.array(y_train)
    X_train = np.expand_dims(X_train, axis=-1)
    return X_train, y_train

X_train, y_train = prepare_data(data)

# ----- Definición y Entrenamiento del Modelo Neural -----
def create_model(vocab_size):
    model = Sequential()
    model.add(Embedding(input_dim=vocab_size, output_dim=10, input_length=1))
    model.add(LSTM(50))
    model.add(Dense(vocab_size, activation='softmax'))
    model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
    return model

model = create_model(len(vocab))
model.fit(X_train, y_train, epochs=1000, verbose=1)

# ----- Funciones de Traducción y Enseñanza -----
def get_top_translation(translations):
    return max(translations, key=translations.get)

def normalize_text(text):
    """
    Convierte a minúsculas y remueve espacios y signos de puntuación básicos al inicio y final.
    """
    return text.lower().strip(" ?!¡¿.,;")

def translate_nn(word, target_language):
    """
    Busca la traducción de 'word' en target_language de forma bidireccional.
    Se asume que las claves de data están en español, usando su forma normalizada.
    """
    key = normalize_text(word)

    # Si 'key' es la clave original:
    if key in data:
        if target_language in data[key]:
            translations = data[key][target_language]
            result = []
            for translation, votes in translations.items():
                result.append(f"{translation} (votos: {votes})")
            if result:
                return ', '.join(result)
    
    # Buscar 'key' entre los valores de cada entrada:
    for original_word, translations in data.items():
        for lang, trans_dict in translations.items():
            if any(normalize_text(t) == key for t in trans_dict.keys()):
                if target_language == 'español':
                    return f"{original_word} (votos acumulados)"
                else:
                    if target_language in data[original_word]:
                        translations_target = data[original_word][target_language]
                        result = []
                        for t, votes in translations_target.items():
                            result.append(f"{t} (votos: {votes})")
                        if result:
                            return ', '.join(result)
                        else:
                            return f"{original_word} (votos acumulados)"
                    else:
                        return f"{original_word} (votos acumulados)"
    return None

def verify_word(word):
    """
    Permite letras, espacios y signos de puntuación básicos para aceptar frases.
    """
    pattern = re.compile(r'^[\w\s\?\¿\!\¡\,\.\-]+$', re.UNICODE)
    return bool(pattern.match(word))

def teach_translation(word, translations):
    """
    Enseña la traducción de una palabra o frase.
    Usa las versiones normalizadas tanto para la clave como para sus traducciones.
    Se añade un mensaje de debug para verificar la inserción.
    """
    global model, word_to_index, index_to_word, vocab, X_train, y_train, data
    key = normalize_text(word)
    # Debug: imprimir la clave que se va a insertar.
    print("Enseñando clave:", key)
    if key not in data:
        data[key] = {}
    if key not in word_to_index:
        word_to_index[key] = len(vocab)
        index_to_word[len(vocab)] = key
        vocab.append(key)
    for lang, translation_list in translations.items():
        if lang not in data[key]:
            data[key][lang] = {}
        for translation in translation_list:
            if not verify_word(translation):
                continue
            trans_key = normalize_text(translation)
            if trans_key not in word_to_index:
                word_to_index[trans_key] = len(vocab)
                index_to_word[len(vocab)] = trans_key
                vocab.append(trans_key)
            if trans_key not in data[key][lang]:
                data[key][lang][trans_key] = 0
    # Debug: imprimir data[key] para confirmar la inserción.
    print("Data actualizada para clave:", key, "->", data[key])
    X_train, y_train = prepare_data(data)
    model = create_model(len(vocab))
    model.fit(X_train, y_train, epochs=100, verbose=1)

def translate_all(word):
    translations = {}
    if word not in data:
        return translations
    for lang in languages:
        translation = translate_nn(word, lang)
        if translation:
            translations[lang] = translation
    return translations

def train_model(epochs):
    global model, X_train, y_train
    model.fit(X_train, y_train, epochs=epochs, verbose=1)

# ----- Traducciones Dialectales -----
dialect_translations = {
    'english': {
        'americano': {
            "I got": "I have",
            "I want": "I wanna"
        },
        'british': {
            "I got": "I've got",
            "I want": "I fancy"
        }
    }
}

def translate_dialect(phrase, current_dialect):
    """
    Retorna las alternativas dialectales para 'phrase' si existen.
    """
    lang = 'english'  # Se asume inglés; se puede ampliar
    mappings = dialect_translations.get(lang, {})
    if current_dialect not in mappings:
        return None
    alternatives = {}
    for dialect_name, dialect_mapping in mappings.items():
        if dialect_name != current_dialect and phrase in dialect_mapping:
            alternatives[dialect_name] = dialect_mapping[phrase]
    return alternatives if alternatives else None

def translate_combined(input_phrase, target_language):
    """
    Divide la entrada en segmentos usando coma, punto, ? ! o ; y traduce cada segmento.
    Se aplica normalize_text a cada segmento.
    Si no existe traducción para un segmento, se muestra entre corchetes.
    """
    segments = re.split(r'[,\.\?\!;]+', input_phrase)
    segments = [seg.strip() for seg in segments if seg.strip()]
    combined_translations = []
    any_translation = False
    for seg in segments:
        trans = translate_nn(seg, target_language)
        if trans:
            any_translation = True
            combined_translations.append(trans)
        else:
            combined_translations.append(f"[{seg}]")
    return ', '.join(combined_translations) if any_translation else None

# ----- Función de Menú -----
def get_menu(nativeLanguage='english'):
    language_map = {
        'inglés': 'english',
        'english': 'english',
        'español': 'español',
        'french': 'french',
        'francés': 'french',
        'alemán': 'german',
        'german': 'german',
        'ruso': 'russian',
        'russian': 'russian'
    }
    lang_key = language_map.get(nativeLanguage.lower(), 'english')
    MENU_OPTIONS = {
        'english': (
            "Menu Options:\n"
            "1. Translate word or phrase.\n"
            "2. Teach translation.\n"
            "3. Train model.\n"
            "Select an option by typing the corresponding number."
        ),
        'español': (
            "Menú de opciones:\n"
            "1. Traducir palabra u oración.\n"
            "2. Enseñar traducción.\n"
            "3. Entrenar modelo.\n"
            "Seleccione una opción escribiendo el número correspondiente."
        ),
        'french': (
            "Menu des options:\n"
            "1. Traduire un mot ou une phrase.\n"
            "2. Enseigner la traduction.\n"
            "3. Entraîner le modèle.\n"
            "Sélectionnez une option en tapant le numéro correspondant."
        ),
        'german': (
            "Menüoptionen:\n"
            "1. Wort oder Satz übersetzen.\n"
            "2. Übersetzung lehren.\n"
            "3. Modell trainieren.\n"
            "Wählen Sie eine Option, indem Sie die entsprechende Nummer eingeben."
        ),
        'russian': (
            "Меню опций:\n"
            "1. Перевести слово или фразу.\n"
            "2. Обучить перевод.\n"
            "3. Обучить модель.\n"
            "Выберите вариант, введя соответствующий номер."
        )
    }
    return MENU_OPTIONS.get(lang_key, MENU_OPTIONS['english'])

# ----- Procesamiento de la Entrada del Chat -----
def process_chat_input(current_language, user_input, nativeLanguage='english', dialect='americano'):
    """
    Procesa la entrada del usuario y retorna una respuesta:
    - "iniciar" reinicia.
    - "cambiar" muestra el menú.
    - Dígitos se interpretan como opciones.
    - Si empieza por "enseñar:" se procesa la enseñanza.
    - Primero se intenta la traducción directa; si no se encuentra, se intenta traducir segmento a segmento.
    """
    response = ""
    new_language = current_language  # se mantiene el idioma seleccionado

    if user_input.lower() == 'iniciar':
        response = "Inicio. Por favor, ingresa una palabra u oración a traducir."
    elif user_input.lower() == 'cambiar':
        response = get_menu(nativeLanguage)
    elif user_input.isdigit():
        language_map = {
            'inglés': 'english',
            'english': 'english',
            'español': 'español',
            'french': 'french',
            'francés': 'french',
            'alemán': 'german',
            'german': 'german',
            'ruso': 'russian',
            'russian': 'russian'
        }
        native_key = language_map.get(nativeLanguage.lower(), 'english')
        option_responses = {
            'english': {
                "1": "Please, enter the word or phrase to translate.",
                "2": "To teach a translation, use: enseñar: word; translation(s)",
                "3": "Model training initiated."
            },
            'español': {
                "1": "Por favor, introduce la palabra u oración a traducir.",
                "2": "Para enseñar una traducción, envía: enseñar: palabra; traducción(es)",
                "3": "Entrenamiento del modelo iniciado."
            },
            'french': {
                "1": "Veuillez entrer le mot ou la phrase à traduire.",
                "2": "Pour enseigner une traduction, envoyez : enseigner : mot ; traduction(s)",
                "3": "Démarrage de l'entraînement du modèle."
            },
            'german': {
                "1": "Bitte geben Sie das zu übersetzende Wort oder den Satz ein.",
                "2": "Um eine Übersetzung beizubringen, geben Sie ein: lehren: Wort; Übersetzung(en)",
                "3": "Modelltraining gestartet."
            },
            'russian': {
                "1": "Пожалуйста, введите слово или фразу для перевода.",
                "2": "Чтобы обучить перевод, введите: обучить: слово; перевод(ы)",
                "3": "Начата тренировка модели."
            }
        }
        if user_input in option_responses[native_key]:
            response = option_responses[native_key][user_input]
        else:
            invalid_options = {
                'english': "Invalid option. Please select a valid option from the menu.",
                'español': "Opción no válida. Seleccione una opción válida desde el menú.",
                'french': "Option invalide. Veuillez sélectionner une option valide dans le menu.",
                'german': "Ungültige Option. Bitte wählen Sie eine gültige Option aus dem Menü.",
                'russian': "Недопустимый вариант. Пожалуйста, выберите действительный вариант из меню."
            }
            response = invalid_options[native_key]
    elif user_input.lower().startswith("enseñar:"):
        partes = user_input.split("enseñar:")
        if len(partes) > 1:
            contenido = partes[1].strip()
            if ";" in contenido:
                word, trans_str = contenido.split(";", 1)
                translations = {new_language: [t.strip() for t in trans_str.split(",") if t.strip()]}
                teach_translation(word.strip(), translations)
                response = f"Traducción para '{word.strip()}' añadida en {new_language.capitalize()}."
            else:
                response = "Formato incorrecto. Usa: enseñar: palabra; traducción1, traducción2, ..."
        else:
            response = "No se recibió contenido para enseñar la traducción."
    else:
        # Intentar traducción directa
        translation = translate_nn(user_input, new_language)
        if translation:
            response = f"The translation for '{user_input}' in {new_language.capitalize()} is: {translation}"
        else:
            # Si falla la traducción directa, intentar traducir por segmentos
            combined_translation = translate_combined(user_input, new_language)
            if combined_translation:
                response = f"The combined translation for '{user_input}' in {new_language.capitalize()} is: {combined_translation}"
            else:
                response = (f"I don't know the translation for '{user_input}' in {new_language.capitalize()}.\n"
                            f"If you wish to teach me the translation, send: enseñar: {user_input}; <your translation>\n"
                            f"Or type another word/phrase, or type 'iniciar' to return to the start.")
    
    return {"response": response, "new_language": new_language}

#Faltan Ejemplos, Correcion, Dialectos y Votos