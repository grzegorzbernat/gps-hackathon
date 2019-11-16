from app import MyApp


if __name__ == '__main__':
    app = MyApp().create_app()
    app.run(port=app.config['PORT'])


    # logger = Logger(__name__).get_looger()
    # logger.info('************ Start Flask App Mateo. ************')
    # logger.debug('************ Start Flask App Mateo. ************')
    # logger.warning('************ Start Flask App Mateo. ************')
    # logger.error('************ Start Flask App Mateo. ************')
    # logger.exception('************ Start Flask App Mateo. ************')
    # logger.critical('************ Start Flask App Mateo. ************')

