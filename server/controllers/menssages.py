import re
from flask import Blueprint, request, jsonify
from ..config.ai import chat


msg_bp = Blueprint('messages', __name__, url_prefix='/api')


@msg_bp.route('/messages', methods=['POST'])
def messages():
    try:
        message = request.json
        if message is None:
            return jsonify({'error': 'Invalid request payload.'}), 400
        
        user_input = message.get('message', '')
        response = chat.send_message(user_input)
        return jsonify({'type': 'answer', 'text': response.text}), 200
    except:
        return jsonify({'error': 'An error occurred while processing the request.'}), 500
