import os
import json, yaml
import logging, logging.config, coloredlogs


CONFIG = {
    "development": "app.config.DevelopmentConfig",
    "testing": "app.config.TestingConfig",
    "prod": "app.config.ProductionConfig",
    "default": "app.config.DevelopmentConfig"
}


class BaseConfig(object):
    DEBUG = False
    TESTING = False
    CONFIG_SILENT = True
    ENV = 'development'

    def __init__(self):
        print('BaseConfig')


class DevelopmentConfig(BaseConfig):
    DEBUG = True
    TESTING = True

    def __init__(self):
        print('............... DevelopmentConfig ............... ')


class TestingConfig(BaseConfig):
    DEBUG = False
    TESTING = True

    def __init__(self):
        print('TestingConfig')


class ProductionConfig(BaseConfig):
    DEBUG = False
    TESTING = False
    CONFIG_SILENT = False
    ENV = 'prod'

    def __init__(self):
        print('ProductionConfig')


def load_yaml_file(path):
        print('load_yaml_file(path="{path}")'.format(path=path))
        try:
            with open(path) as f :
                yf = yaml.load(f, Loader=yaml.FullLoader)
                return yf
        except Exception as err:
            print('load_yaml_file(...)  ==>  {err}.'.format(err=err))
            return None


def start_logging(app):
    if app.config['LOGGER']['START']:
        logging.config.dictConfig(load_yaml_file(app.config['LOGGER']['CONF_FILE']))
        logfile    = logging.getLogger('file')
        logconsole = logging.getLogger('console')
        logfile.debug("Debug FILE")
        logconsole.debug("Debug CONSOLE")

        coloredlogs.install(level='Debug')


def configure_app(app):
    # config_name = os.getenv('FLASK_CONFIGURATION', 'prod')
    # config_name = os.getenv('FLASK_CONFIGURATION', 'default')
    config_name = os.getenv('FLASK_CONFIGURATION', 'development')
    # config_name = os.getenv('FLASK_CONFIGURATION', 'testing')

    app.config.from_object(CONFIG[config_name]) # object-based default configuration
    # app.config.from_json('.config.json', silent=True) # instance-folders configuration
    app.config.from_pyfile('.config.conf', silent=True) # instance-folders configuration


    # Configure logging ...
    # start_logging(app)

    # Configure Security ...

    # Configure Compressing ...