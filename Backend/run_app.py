from app import MyApp


if __name__ == '__main__':
    app = MyApp().create_app()
    app.run(port=app.config['PORT'])
