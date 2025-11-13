from flask_cors import CORS


def config_app(app):
    CORS(app, supports_credentials=True, origins=['http://localhost:5000'])
