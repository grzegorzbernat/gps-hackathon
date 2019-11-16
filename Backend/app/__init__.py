from flask import Flask
from flask_restplus import Api


from app.config import configure_app
from app.modules.users.route import api as user_api
from app.modules.offers.route import api as offer_api



class Singleton(type):
    def __init__(cls, name, bases, attrs, **kwargs):
        super().__init__(name, bases, attrs)
        cls._instance = None

    def __call__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__call__(*args, **kwargs)
        return cls._instance



# metaclass=Singleton
class MyApp():
    def __init__(self):
        try:
            print('<class {}>'.format(__name__))
            self.app = Flask(__name__)


            configure_app(self.app)
            # app.url_map.strict_slashes = False
            # app.config.from_object(config_object)
            # register_extensions(app)
            self.register_modules()
            # register_errorhandlers(app)
            # register_shellcontext(app)
            # register_commands(app)
        except Exception as err:
            print('__init__()  ==>  {err}.'.format(err=err))


    def register_modules(self):
        api = Api(self.app, version='1.0', title='Flask App API', description='A simple Falsk App API',)
        api.add_namespace(user_api)
        api.add_namespace(offer_api)


    def create_app(self):
        return self.app

    def app_config(self):
        return self.app.config
