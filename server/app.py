from flask import Flask
from controllers.menssages import msg_bp
from config import config_app
import os


app = Flask(__name__, static_folder='../client/dist')
config_app(app)

app.register_blueprint(msg_bp)

# Rota "Catch-All" para servir o aplicativo React
@app.route('/')
@app.route('/<path:path>')
def serve_react(path: str = ''):
    if app.static_folder is None:
        raise RuntimeError('A pasta estática não está configurada corretamente.')
    if path and not path.startswith('/api') and os.path.exists(os.path.join(app.static_folder, path)):
        return app.send_static_file(path)
    return app.send_static_file('index.html')
