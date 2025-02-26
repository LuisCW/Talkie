from flask import Flask, request, jsonify
from flask_cors import CORS
from Mi_primera_red_neuronal import translate_nn, teach_translation, train_model, data, get_menu, process_chat_input

app = Flask(__name__)
CORS(app)  # Habilita CORS para todos los orígenes

# Endpoint para obtener el menú de opciones en el idioma nativo:
@app.route('/menu', methods=['GET'])
def menu():
    nativeLanguage = request.args.get('nativeLanguage', 'english')
    menu_text = get_menu(nativeLanguage)
    return jsonify({'menu': menu_text}), 200

# Endpoint para procesar la acción del chat
@app.route('/action', methods=['POST'])
def action():
    req_data = request.get_json()  # Asegúrate de que la petición incluya JSON válido
    user_input = req_data.get('user_input')
    current_language = req_data.get('current_language')
    nativeLanguage = req_data.get('nativeLanguage', 'english')
    
    if not user_input or not current_language:
        return jsonify({'error': 'Faltan parámetros'}), 400

    result = process_chat_input(current_language, user_input, nativeLanguage)
    return jsonify(result), 200

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)