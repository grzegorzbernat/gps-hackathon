
import logging, logging.config, coloredlogs, json, yaml




class Singleton(type):
    def __init__(cls, name, bases, attrs, **kwargs):
        super().__init__(name, bases, attrs)
        cls._instance = None

    def __call__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__call__(*args, **kwargs)
        return cls._instance


class Logger:
    def __init__(self, name):
        try:
            print('<class {}>'.format(__name__))

            # create logger
            self.logger = logging.getLogger(name)
            self.logger.setLevel(logging.DEBUG)
            formatter = logging.Formatter('[%(asctime)s] - [%(name)s.%(funcName)s():%(lineno)s] <%(levelname)s> : %(message)s')

            # ...
            # TODO SET THE PATHS IN CONFIG FILE ...
            file_handler = logging.FileHandler('/home/sal/Python/Flask/1-pro-all-falsk-apps-skeleton/flask-app-skeleton-5-(flask-restplus)/.logs/info.log')
            # file_handler.setLevel(logging.INFO)
            file_handler.setFormatter(formatter)

            # ...
            # console_handler = logging.StreamHandler()
            # # console_handler.setLevel(logging.DEBUG)
            # console_handler.setFormatter(formatter)


            # ...
            self.logger.addHandler(file_handler)
            # self.logger.addHandler(console_handler)

            coloredlogs.install(level='Debug')

        except Exception as err:
            print('__init__()  ==>  {err}.'.format(err=err))


    def load_yaml_file(self, path):
        print('load_yaml_file(path="{path}")'.format(path=path))
        try:
            with open(path) as f :
                yf = yaml.load(f, Loader=yaml.FullLoader)
                return yf
        except Exception as err:
            print('load_yaml_file(...)  ==>  {err}.'.format(err=err))
            return None


    def get_looger(self):
        return self.logger