from flask import Blueprint, request, jsonify
from config.ai import chat


msg_bp = Blueprint('messages', __name__, url_prefix='/api')


@msg_bp.route('/messages', methods=['POST'])
def messages():
    try:
        data = request.get_json(silent=True)
        if data is None:
            return jsonify({'error': 'Invalid request payload.'}), 400
        
        user_input = data.get('message', '')
        response = chat.send_message(user_input)
        return jsonify({'type': 'answer', 'text': response.text}), 200
    except Exception as e:
        print(e)
        return jsonify({'error': 'An error occurred while processing the request.'}), 500
