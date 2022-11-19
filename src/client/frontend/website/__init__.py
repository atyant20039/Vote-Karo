from flask import Flask

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'vote karo'

    from .page import page

    app.register_blueprint(page, url_prefix = '/')

    return app